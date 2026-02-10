export interface ImageLoadOptions {
  src: string
  placeholder?: string
  lowQuality?: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export class SmartImageLoader {
  private observer: IntersectionObserver | null = null
  private loadedImages = new Set<string>()
  private loadingImages = new Map<string, Promise<void>>()

  constructor() {
    this.initObserver()
  }

  private initObserver(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    // Predictive prefetch: load images 500px before visible
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            this.loadImage(img)
            this.observer?.unobserve(img)
          }
        })
      },
      {
        rootMargin: '500px',
        threshold: 0.01,
      }
    )
  }

  public observe(img: HTMLImageElement): void {
    if (!this.observer) {
      // Fallback for browsers without IntersectionObserver
      this.loadImage(img)
      return
    }

    this.observer.observe(img)
  }

  private async loadImage(img: HTMLImageElement): Promise<void> {
    const src = img.dataset.src || img.src

    if (!src || this.loadedImages.has(src)) {
      return
    }

    // Prevent duplicate loads
    if (this.loadingImages.has(src)) {
      return this.loadingImages.get(src)
    }

    const loadPromise = this.performLoad(img, src)
    this.loadingImages.set(src, loadPromise)

    try {
      await loadPromise
      this.loadedImages.add(src)
    } finally {
      this.loadingImages.delete(src)
    }
  }

  private async performLoad(img: HTMLImageElement, src: string): Promise<void> {
    // Show placeholder first (blur-up technique)
    const placeholder = img.dataset.placeholder
    if (placeholder && img.src !== placeholder) {
      img.src = placeholder
      img.style.filter = 'blur(20px)'
      img.style.transition = 'filter 0.3s ease-out'
    }

    // Load actual image
    const actualImage = new Image()
    actualImage.src = src

    // Use decode() for better performance
    try {
      await actualImage.decode()
    } catch (error) {
      console.warn('Image decode failed:', src, error)
      // Continue anyway
    }

    // Swap to high-quality image
    img.src = src
    img.style.filter = 'blur(0px)'

    // Remove data attributes to clean up
    delete img.dataset.src
    delete img.dataset.placeholder
  }

  public cleanup(): void {
    this.observer?.disconnect()
    this.loadedImages.clear()
    this.loadingImages.clear()
  }
}

// Singleton instance
export const smartImageLoader = new SmartImageLoader()

// Helper function for responsive images
export const getResponsiveImageSrcSet = (basePath: string): string => {
  const sizes = [320, 640, 768, 1024, 1280, 1920]

  return sizes
    .map((size) => {
      const webpPath = basePath.replace(/\.(jpg|png)$/, `-${size}w.webp`)
      return `${webpPath} ${size}w`
    })
    .join(', ')
}

// Get optimized image path (WebP with fallback)
export const getOptimizedImagePath = (
  path: string
): {
  webp: string
  fallback: string
} => {
  const webpPath = path.replace(/\.(jpg|png|jpeg)$/i, '.webp')

  return {
    webp: webpPath,
    fallback: path,
  }
}

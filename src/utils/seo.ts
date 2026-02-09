// SEO utilities and meta tag management
export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  ogType?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterImage?: string
  canonicalUrl?: string
  robots?: string
}

export function updateSEO(config: SEOConfig) {
  // Update title
  document.title = config.title

  // Update or create meta tags
  updateMetaTag('description', config.description)

  if (config.keywords && config.keywords.length > 0) {
    updateMetaTag('keywords', config.keywords.join(', '))
  }

  if (config.robots) {
    updateMetaTag('robots', config.robots)
  }

  // Open Graph tags
  updateMetaTag('og:title', config.title, 'property')
  updateMetaTag('og:description', config.description, 'property')
  updateMetaTag('og:type', config.ogType || 'website', 'property')

  if (config.ogImage) {
    updateMetaTag('og:image', config.ogImage, 'property')
  }

  if (config.ogUrl) {
    updateMetaTag('og:url', config.ogUrl, 'property')
  }

  // Twitter Card tags
  updateMetaTag('twitter:card', config.twitterCard || 'summary_large_image')
  updateMetaTag('twitter:title', config.title)
  updateMetaTag('twitter:description', config.description)

  if (config.twitterImage) {
    updateMetaTag('twitter:image', config.twitterImage)
  }

  // Canonical URL
  if (config.canonicalUrl) {
    updateLinkTag('canonical', config.canonicalUrl)
  }
}

function updateMetaTag(name: string, content: string, attributeName: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attributeName}="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attributeName, name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

// Structured data / JSON-LD
export function addStructuredData(data: Record<string, unknown>) {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(data)
  document.head.appendChild(script)
}

// Product structured data helper
export function addProductStructuredData(product: {
  name: string
  description: string
  image: string
  brand: string
  price: number
  currency: string
  availability: 'InStock' | 'OutOfStock' | 'PreOrder'
  rating?: number
  reviewCount?: number
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: `https://schema.org/${product.availability}`,
    },
  }

  if (product.rating && product.reviewCount) {
    Object.assign(structuredData, {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviewCount,
      },
    })
  }

  addStructuredData(structuredData)
}

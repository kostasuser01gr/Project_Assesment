/**
 * Photo Manager - Centralized system for managing beach photos
 * Provides type-safe access to real photos from FIGMA_IMPORT library
 */

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: 'hero' | 'lifestyle' | 'product' | 'setup' | 'ugc' | 'gallery';
  orientation: 'landscape' | 'portrait' | 'square';
}

/**
 * Photo Library - Real beach photos from Premium Figma Brief
 */
export const PHOTO_LIBRARY: Photo[] = [
  // HERO PHOTOS
  {
    id: 'hero-family-beach',
    src: '/images/beach/hero-family-beach.jpg',
    alt: 'Family enjoying beautiful beach day with Sun Ninja protection',
    width: 4032,
    height: 3024,
    category: 'hero',
    orientation: 'landscape',
  },
  {
    id: 'hero-ocean-sunset',
    src: '/images/beach/hero-ocean-sunset.jpg',
    alt: 'Stunning ocean sunset with premium beach setup',
    width: 4032,
    height: 3024,
    category: 'hero',
    orientation: 'landscape',
  },
  // PRODUCT PHOTOS
  {
    id: 'product-beach-01',
    src: '/images/beach/product-beach-01.jpg',
    alt: 'Sun Ninja product on pristine beach',
    width: 4032,
    height: 3024,
    category: 'product',
    orientation: 'landscape',
  },
  {
    id: 'product-beach-02',
    src: '/images/beach/product-beach-02.jpg',
    alt: 'Premium sun protection product detail',
    width: 4032,
    height: 3024,
    category: 'product',
    orientation: 'landscape',
  },
  {
    id: 'product-beach-03',
    src: '/images/beach/product-beach-03.jpg',
    alt: 'Sun Ninja beach essentials',
    width: 4032,
    height: 3024,
    category: 'product',
    orientation: 'landscape',
  },
  // GALLERY PHOTOS
  {
    id: 'gallery-ocean-waves',
    src: '/images/beach/gallery-ocean-waves.jpg',
    alt: 'Beautiful ocean waves',
    width: 4032,
    height: 3024,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-beach-scene',
    src: '/images/beach/gallery-beach-scene.jpg',
    alt: 'Idyllic beach scene',
    width: 4032,
    height: 3024,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-sunny-day',
    src: '/images/beach/gallery-sunny-day.jpg',
    alt: 'Perfect sunny day',
    width: 4032,
    height: 3024,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-sand-beach',
    src: '/images/beach/gallery-sand-beach.jpg',
    alt: 'Golden sand beach',
    width: 4032,
    height: 3024,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-coastal-view',
    src: '/images/beach/gallery-coastal-view.jpg',
    alt: 'Stunning coastal view',
    width: 4032,
    height: 3024,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-beach-relaxation',
    src: '/images/beach/gallery-beach-relaxation.jpg',
    alt: 'Beach relaxation',
    width: 4032,
    height: 3024,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-ocean-panorama',
    src: '/images/beach/gallery-ocean-panorama.jpg',
    alt: 'Ocean panorama',
    width: 4032,
    height: 3024,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-sunny-shore',
    src: '/images/beach/gallery-sunny-shore.jpg',
    alt: 'Sunny shoreline',
    width: 4032,
    height: 3024,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-beach-lifestyle',
    src: '/images/beach/gallery-beach-lifestyle.jpg',
    alt: 'Beach lifestyle',
    width: 4032,
    height: 3024,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-waterside',
    src: '/images/beach/gallery-waterside.jpg',
    alt: 'Waterside paradise',
    width: 4032,
    height: 3024,
    category: 'gallery',
    orientation: 'landscape',
  },
  // SETUP PHOTOS
  {
    id: 'setup-beach-umbrella',
    src: '/images/beach/setup-beach-umbrella.jpg',
    alt: 'Easy setup demonstration',
    width: 4032,
    height: 3024,
    category: 'setup',
    orientation: 'landscape',
  },
  {
    id: 'setup-installation',
    src: '/images/beach/setup-installation.jpg',
    alt: 'Simple installation process',
    width: 4032,
    height: 3024,
    category: 'setup',
    orientation: 'landscape',
  },
  {
    id: 'setup-ready-to-use',
    src: '/images/beach/setup-ready-to-use.jpg',
    alt: 'Fully set up and ready',
    width: 4032,
    height: 3024,
    category: 'setup',
    orientation: 'landscape',
  },
  // UGC PHOTOS
  {
    id: 'ugc-family-enjoying',
    src: '/images/beach/ugc-family-enjoying.jpg',
    alt: 'Real family enjoying beach',
    width: 4032,
    height: 3024,
    category: 'ugc',
    orientation: 'landscape',
  },
  {
    id: 'ugc-kids-playing',
    src: '/images/beach/ugc-kids-playing.jpg',
    alt: 'Kids playing safely',
    width: 4032,
    height: 3024,
    category: 'ugc',
    orientation: 'landscape',
  },
  {
    id: 'ugc-beach-day',
    src: '/images/beach/ugc-beach-day.jpg',
    alt: 'Perfect beach day',
    width: 4032,
    height: 3024,
    category: 'ugc',
    orientation: 'landscape',
  },
  {
    id: 'ugc-summer-fun',
    src: '/images/beach/ugc-summer-fun.jpg',
    alt: 'Summer fun',
    width: 4032,
    height: 3024,
    category: 'ugc',
    orientation: 'landscape',
  },
  {
    id: 'ugc-relaxing',
    src: '/images/beach/ugc-relaxing.jpg',
    alt: 'Relaxing beach moments',
    width: 4032,
    height: 3024,
    category: 'ugc',
    orientation: 'landscape',
  },
  {
    id: 'ugc-lifestyle-beach',
    src: '/images/beach/ugc-lifestyle-beach.jpg',
    alt: 'Authentic beach lifestyle',
    width: 4032,
    height: 3024,
    category: 'ugc',
    orientation: 'landscape',
  },
];

export const getPhotosByCategory = (category: Photo['category']): Photo[] => {
  return PHOTO_LIBRARY.filter((p) => p.category === category);
};

export const getPhotoById = (id: string): Photo | undefined => {
  return PHOTO_LIBRARY.find((p) => p.id === id);
};

export const getHeroPhotos = (): Photo[] => {
  return getPhotosByCategory('hero');
};

export const getGalleryPhotos = (count?: number): Photo[] => {
  const photos = getPhotosByCategory('gallery');
  return count ? photos.slice(0, count) : photos;
};

export const getProductPhotos = (): Photo[] => {
  return getPhotosByCategory('product');
};

export const getSetupPhotos = (): Photo[] => {
  return getPhotosByCategory('setup');
};

export const getUGCPhotos = (): Photo[] => {
  return getPhotosByCategory('ugc');
};

export const getLandscapePhotos = (): Photo[] => {
  return PHOTO_LIBRARY.filter((p) => p.orientation === 'landscape');
};

export const getPortraitPhotos = (): Photo[] => {
  return PHOTO_LIBRARY.filter((p) => p.orientation === 'portrait');
};

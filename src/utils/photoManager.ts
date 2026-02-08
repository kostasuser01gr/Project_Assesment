/**
 * Photo Manager - Centralized system for managing 298 beach photos
 * Provides type-safe access to real photos from the user's library
 */

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: 'hero' | 'lifestyle' | 'product' | 'setup' | 'ugc' | 'detail' | 'gallery';
  orientation: 'landscape' | 'portrait' | 'square';
}

/**
 * Photo Library - Curated selection from 298 real beach photos
 * Each photo is optimized for specific use cases
 */
export const PHOTO_LIBRARY: Photo[] = [
  // HERO PHOTOS - Dramatic wide shots for hero sections
  {
    id: 'hero-main',
    src: '/images/beach/hero-main.jpg',
    alt: 'Family enjoying beach day under Sun Ninja tent',
    width: 6000,
    height: 4000,
    category: 'hero',
    orientation: 'landscape',
  },
  {
    id: 'hero-sunset',
    src: '/images/beach/hero-sunset.jpg',
    alt: 'Sun Ninja tent at golden hour beach sunset',
    width: 6000,
    height: 4000,
    category: 'hero',
    orientation: 'landscape',
  },
  {
    id: 'hero-family',
    src: '/images/beach/hero-family.jpg',
    alt: 'Multi-generational family relaxing under beach tent',
    width: 6000,
    height: 4000,
    category: 'hero',
    orientation: 'landscape',
  },

  // PRODUCT PHOTOS - Close-ups of tent details
  {
    id: 'product-main',
    src: '/images/beach/product-main.jpg',
    alt: 'Sun Ninja beach tent full view on sandy beach',
    width: 5000,
    height: 3500,
    category: 'product',
    orientation: 'landscape',
  },
  {
    id: 'product-detail-upf',
    src: '/images/beach/product-detail-upf.jpg',
    alt: 'UPF 50+ fabric detail close-up',
    width: 4000,
    height: 6000,
    category: 'product',
    orientation: 'portrait',
  },
  {
    id: 'product-stakes',
    src: '/images/beach/product-stakes.jpg',
    alt: 'Beach tent stakes securing tent in sand',
    width: 6000,
    height: 4000,
    category: 'product',
    orientation: 'landscape',
  },
  {
    id: 'product-packed',
    src: '/images/beach/product-packed.jpg',
    alt: 'Sun Ninja tent in compact carry bag',
    width: 4000,
    height: 6000,
    category: 'product',
    orientation: 'portrait',
  },

  // LIFESTYLE PHOTOS - People using the tent
  {
    id: 'lifestyle-1',
    src: '/images/beach/lifestyle-1.jpg',
    alt: 'Kids playing beach games with tent shade',
    width: 6000,
    height: 4000,
    category: 'lifestyle',
    orientation: 'landscape',
  },
  {
    id: 'lifestyle-2',
    src: '/images/beach/lifestyle-2.jpg',
    alt: 'Mother applying sunscreen to child under tent',
    width: 6000,
    height: 4000,
    category: 'lifestyle',
    orientation: 'landscape',
  },
  {
    id: 'lifestyle-3',
    src: '/images/beach/lifestyle-3.jpg',
    alt: 'Couple reading books in beach tent shade',
    width: 6000,
    height: 4000,
    category: 'lifestyle',
    orientation: 'landscape',
  },
  {
    id: 'lifestyle-4',
    src: '/images/beach/lifestyle-4.jpg',
    alt: 'Beach picnic setup under Sun Ninja tent',
    width: 6000,
    height: 4000,
    category: 'lifestyle',
    orientation: 'landscape',
  },
  {
    id: 'lifestyle-5',
    src: '/images/beach/lifestyle-5.jpg',
    alt: 'Teenager using laptop in tent shade',
    width: 6000,
    height: 4000,
    category: 'lifestyle',
    orientation: 'landscape',
  },

  // SETUP PHOTOS - Installation process
  {
    id: 'setup-1',
    src: '/images/beach/setup-1.jpg',
    alt: 'Person setting up beach tent - step 1',
    width: 6000,
    height: 4000,
    category: 'setup',
    orientation: 'landscape',
  },
  {
    id: 'setup-2',
    src: '/images/beach/setup-2.jpg',
    alt: 'Easy tent assembly in under 3 minutes',
    width: 6000,
    height: 4000,
    category: 'setup',
    orientation: 'landscape',
  },

  // GALLERY PHOTOS - Mixed lifestyle shots
  {
    id: 'gallery-1',
    src: '/images/beach/gallery-1.jpg',
    alt: 'Beach tent at sunrise with calm waves',
    width: 6000,
    height: 4000,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-2',
    src: '/images/beach/gallery-2.jpg',
    alt: 'Kids building sandcastle near tent',
    width: 6000,
    height: 4000,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-3',
    src: '/images/beach/gallery-3.jpg',
    alt: 'Beach volleyball game with tent in background',
    width: 6000,
    height: 4000,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-4',
    src: '/images/beach/gallery-4.jpg',
    alt: 'Family enjoying snacks in tent shade',
    width: 6000,
    height: 4000,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-5',
    src: '/images/beach/gallery-5.jpg',
    alt: 'Dog resting in cool tent shade',
    width: 6000,
    height: 4000,
    category: 'gallery',
    orientation: 'landscape',
  },
  {
    id: 'gallery-6',
    src: '/images/beach/gallery-6.jpg',
    alt: 'Beach tent protecting against wind',
    width: 6000,
    height: 4000,
    category: 'gallery',
    orientation: 'landscape',
  },

  // DETAIL PHOTOS - Close-ups of features
  {
    id: 'detail-mesh-windows',
    src: '/images/beach/detail-mesh-windows.jpg',
    alt: 'Breathable mesh windows close-up',
    width: 4000,
    height: 6000,
    category: 'detail',
    orientation: 'portrait',
  },
  {
    id: 'detail-sand-pockets',
    src: '/images/beach/detail-sand-pockets.jpg',
    alt: 'Sand pocket weight system detail',
    width: 6000,
    height: 4000,
    category: 'detail',
    orientation: 'landscape',
  },
];

/**
 * Get photos by category
 */
export const getPhotosByCategory = (category: Photo['category']): Photo[] => {
  return PHOTO_LIBRARY.filter((p) => p.category === category);
};

/**
 * Get photo by ID
 */
export const getPhotoById = (id: string): Photo | undefined => {
  return PHOTO_LIBRARY.find((p) => p.id === id);
};

/**
 * Get random hero photo
 */
export const getHeroPhoto = (): Photo => {
  const heroPhotos = getPhotosByCategory('hero');
  return heroPhotos[0]; // Return main hero by default
};

/**
 * Get gallery photos (limited count)
 */
export const getGalleryPhotos = (count: number = 6): Photo[] => {
  const galleryPhotos = getPhotosByCategory('gallery');
  return galleryPhotos.slice(0, count);
};

/**
 * Get lifestyle photos for homepage
 */
export const getLifestylePhotos = (count: number = 5): Photo[] => {
  const lifestylePhotos = getPhotosByCategory('lifestyle');
  return lifestylePhotos.slice(0, count);
};

/**
 * Get product photos for product page gallery
 */
export const getProductPhotos = (): Photo[] => {
  return getPhotosByCategory('product');
};

/**
 * Get setup/how-to photos
 */
export const getSetupPhotos = (): Photo[] => {
  return getPhotosByCategory('setup');
};

/**
 * Get all landscape photos
 */
export const getLandscapePhotos = (): Photo[] => {
  return PHOTO_LIBRARY.filter((p) => p.orientation === 'landscape');
};

/**
 * Get all portrait photos
 */
export const getPortraitPhotos = (): Photo[] => {
  return PHOTO_LIBRARY.filter((p) => p.orientation === 'portrait');
};

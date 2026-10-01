import { siteConfig as defaultSiteConfig } from '../data/site';
import type { SiteConfig } from '../data/site';
import { roomsData as defaultRoomsData } from '../data/rooms';
import type { Room } from '../data/rooms';
import { experiencesData as defaultExperiencesData } from '../data/experiences';
import type { Experience } from '../data/experiences';
import { galleryData as defaultGalleryData } from '../data/gallery';
import type { GalleryItem } from '../data/gallery';

const KEYS = {
  SITE_CONFIG: 'ahas_pokuna_site_config',
  ROOMS: 'ahas_pokuna_rooms',
  EXPERIENCES: 'ahas_pokuna_experiences',
  GALLERY: 'ahas_pokuna_gallery'
};

// Site Config Helper
export const getStoredSiteConfig = (): SiteConfig => {
  try {
    const saved = localStorage.getItem(KEYS.SITE_CONFIG);
    return saved ? JSON.parse(saved) : defaultSiteConfig;
  } catch {
    return defaultSiteConfig;
  }
};

export const saveStoredSiteConfig = (data: SiteConfig) => {
  try {
    localStorage.setItem(KEYS.SITE_CONFIG, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save site config', e);
  }
};

// Rooms Helper
export const getStoredRooms = (): Room[] => {
  try {
    const saved = localStorage.getItem(KEYS.ROOMS);
    return saved ? JSON.parse(saved) : defaultRoomsData;
  } catch {
    return defaultRoomsData;
  }
};

export const saveStoredRooms = (data: Room[]) => {
  try {
    localStorage.setItem(KEYS.ROOMS, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save rooms data', e);
  }
};

// Experiences Helper
export const getStoredExperiences = (): Experience[] => {
  try {
    const saved = localStorage.getItem(KEYS.EXPERIENCES);
    return saved ? JSON.parse(saved) : defaultExperiencesData;
  } catch {
    return defaultExperiencesData;
  }
};

export const saveStoredExperiences = (data: Experience[]) => {
  try {
    localStorage.setItem(KEYS.EXPERIENCES, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save experiences data', e);
  }
};

// Gallery Helper
export const getStoredGallery = (): GalleryItem[] => {
  try {
    const saved = localStorage.getItem(KEYS.GALLERY);
    return saved ? JSON.parse(saved) : defaultGalleryData;
  } catch {
    return defaultGalleryData;
  }
};

export const saveStoredGallery = (data: GalleryItem[]) => {
  try {
    localStorage.setItem(KEYS.GALLERY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save gallery data', e);
  }
};

export type Subcategory = { id: string; name: string };
export type Category = { id: string; slug: string; name: string; subs?: Subcategory[]; image_url?: string };
export type Artist = { id: string; name: string; avatar?: string; price: number; rating: number; categories: string[]; bio?: string };

export const categories: Category[] = [
  { id: 'bridal', slug: 'bridal', name: 'Bridal Makeup', subs: [{ id: 'traditional', name: 'Traditional Bridal' }, { id: 'contemporary', name: 'Contemporary Bridal' }], image_url: '/img/category-bridal.jpg' },
  { id: 'party', slug: 'party', name: 'Party & Glam', subs: [{ id: 'cocktail', name: 'Cocktail Party' }, { id: 'redcarpet', name: 'Red Carpet Glam' }], image_url: '/img/category-party.jpg' },
  { id: 'casual', slug: 'casual', name: 'Casual / Everyday', subs: [{ id: 'office', name: 'Office Look' }, { id: 'minimal', name: 'Minimal/Natural' }], image_url: '/img/category-casual.jpg' },
  { id: 'fashion', slug: 'fashion', name: 'Fashion & Editorial', subs: [{ id: 'runway', name: 'Runway' }, { id: 'photoshoot', name: 'Photoshoot' }], image_url: '/img/category-fashion.jpg' },
  { id: 'festive', slug: 'festive', name: 'Festive / Cultural', subs: [{ id: 'diwali', name: 'Diwali Looks' }, { id: 'navratri', name: 'Navratri/Garba' }], image_url: '/img/category-festive.jpg' },
  { id: 'specialty', slug: 'specialty', name: 'Specialty Makeup', subs: [{ id: 'hd', name: 'HD/Camera Ready' }, { id: 'airbrush', name: 'Airbrush' }], image_url: '/img/category-specialty.jpg' },
];

export const artists: Artist[] = [
  { id: 'a1', name: 'Nisha Kapoor', avatar: '', price: 12000, rating: 4.8, categories: ['bridal', 'specialty'], bio: '8 yrs experience — bridal specialist.' },
  { id: 'a2', name: 'Rhea Sharma', avatar: '', price: 8000, rating: 4.5, categories: ['party','casual'], bio: 'Party & photoshoot looks.' },
  { id: 'a3', name: 'Tanya Singh', avatar: '', price: 15000, rating: 4.9, categories: ['bridal','fashion'], bio: 'Runway & editorial specialist.' },
  { id: 'a4', name: 'Aman Verma', avatar: '', price: 5000, rating: 4.2, categories: ['casual','party'], bio: 'Natural everyday looks.' },
  { id: 'a5', name: 'Sakshi Rao', avatar: '', price: 18000, rating: 5.0, categories: ['specialty','fashion'], bio: 'Airbrush & HD makeup pro.' },
];

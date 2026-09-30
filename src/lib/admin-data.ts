import { products as initialProductsData, accessories as initialAccessoriesData } from '@/data/products';

export interface AdminMachine {
  id: string;
  slug: string;
  name: string;
  model: string;
  category: string;
  badge?: string;
  shortDescription: string;
  description: string;
  image: string;
  speed: string;
  needles: string;
  embroideryArea: string;
  heads: string;
  price: string;
  priceNum: number;
  stock: number;
  isActive: boolean;
  isFeatured: boolean;
  warranty: string;
  createdAt: string;
}

export interface AdminAccessory {
  id: string;
  name: string;
  category: string;
  sku: string;
  price: number;
  comparePrice?: number;
  stock: number;
  image: string;
  description: string;
  isActive: boolean;
}

export interface AdminOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  machineModel: string;
  machineName: string;
  estimatedAmount: number;
  status: 'PENDING' | 'CONFIRMED' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  requirements: string;
  orderDate: string;
  items: {
    name: string;
    model: string;
    qty: number;
    price: number;
  }[];
}

export interface AdminCustomer {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  interestedMachine: string;
  totalInquiries: number;
  status: 'Active Lead' | 'Qualified' | 'Customer' | 'Contacted';
  createdAt: string;
}

export interface AdminCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  machineCount: number;
}

export interface AdminReview {
  id: string;
  author: string;
  role: string;
  company: string;
  machineModel: string;
  rating: number;
  content: string;
  status: 'PUBLISHED' | 'PENDING' | 'REJECTED';
  date: string;
}

export interface AdminSettings {
  companyName: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  adminPassword: string;
  taxPercent: number;
  currency: string;
  quotationValidityDays: number;
}

// Initial seed data
const defaultMachines: AdminMachine[] = initialProductsData.map((p, idx) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  model: p.model,
  category: p.category,
  badge: p.badge,
  shortDescription: p.shortDescription,
  description: p.description,
  image: p.image,
  speed: p.specs.speed,
  needles: p.specs.needles,
  embroideryArea: p.specs.embroideryArea,
  heads: p.specs.heads || '1 Head',
  price: p.price,
  priceNum: 150000 + idx * 125000,
  stock: 4 + idx * 2,
  isActive: true,
  isFeatured: idx < 3,
  warranty: p.warranty,
  createdAt: new Date(Date.now() - (idx + 1) * 86400000 * 5).toISOString(),
}));

const defaultAccessories: AdminAccessory[] = initialAccessoriesData.map((acc, idx) => ({
  id: acc.id,
  name: acc.name,
  category: acc.category,
  sku: `ACC-${acc.id.toUpperCase()}`,
  price: 2500 + idx * 1200,
  comparePrice: 3200 + idx * 1500,
  stock: 15 + idx * 5,
  image: acc.image,
  description: acc.description,
  isActive: true,
}));

const defaultOrders: AdminOrder[] = [
  {
    id: 'ord-101',
    orderNumber: 'STM-2026-9041',
    customerName: 'Zubair Ansari',
    companyName: 'Ansari Textile Works',
    email: 'zubair@ansaritextiles.com',
    phone: '+91 98351 22890',
    city: 'Surat',
    state: 'Gujarat',
    machineModel: 'EMB-HD6000',
    machineName: 'Heavy-Duty 6-Head Commercial Embroidery Machine',
    estimatedAmount: 1850000,
    status: 'PROCESSING',
    requirements: 'Need 6-head unit with 270° cap frame attachments and onsite installation in factory shed.',
    orderDate: '2026-09-24T14:30:00Z',
    items: [
      { name: 'Heavy-Duty 6-Head Machine', model: 'EMB-HD6000', qty: 1, price: 1750000 },
      { name: 'Magnetic Tubular Hoop 8-Pack', model: 'MHOOP-8', qty: 2, price: 50000 }
    ],
  },
  {
    id: 'ord-102',
    orderNumber: 'STM-2026-8973',
    customerName: 'Meera Deshmukh',
    companyName: 'Loom & Thread Boutique',
    email: 'meera@loomthread.in',
    phone: '+91 99201 44581',
    city: 'Mumbai',
    state: 'Maharashtra',
    machineModel: 'EMB-S1500',
    machineName: 'Single Head 15-Needle Embroidery Machine',
    estimatedAmount: 385000,
    status: 'CONFIRMED',
    requirements: 'Compact single head for custom bridal boutique with touch screen digitizer.',
    orderDate: '2026-09-23T11:15:00Z',
    items: [
      { name: 'Single Head Machine', model: 'EMB-S1500', qty: 1, price: 360000 },
      { name: 'Professional Digitizing Software Suite', model: 'DIGI-PRO', qty: 1, price: 25000 }
    ],
  },
  {
    id: 'ord-103',
    orderNumber: 'STM-2026-8910',
    customerName: 'Harpreet Singh',
    companyName: 'Crown Headwear & Uniforms',
    email: 'harpreet@crowncaps.co',
    phone: '+91 98140 77312',
    city: 'Ludhiana',
    state: 'Punjab',
    machineModel: 'EMB-CAP300',
    machineName: 'Tubular Cap & Hat Embroidery Machine',
    estimatedAmount: 490000,
    status: 'SHIPPED',
    requirements: 'High speed cap embroidery machine for 3D puff embroidery on sports baseball caps.',
    orderDate: '2026-09-22T09:40:00Z',
    items: [
      { name: 'Cap Embroidery Machine', model: 'EMB-CAP300', qty: 1, price: 460000 },
      { name: 'Tear-Away Cap Backing Rolls (100m)', model: 'STAB-CAP', qty: 3, price: 10000 }
    ],
  },
  {
    id: 'ord-104',
    orderNumber: 'STM-2026-8854',
    customerName: 'Kavita Nair',
    companyName: 'Nair Garment Exports',
    email: 'kavita@nairgarments.com',
    phone: '+91 94471 88921',
    city: 'Tirupur',
    state: 'Tamil Nadu',
    machineModel: 'EMB-M4000',
    machineName: 'Multi-Head 4-Head Industrial Machine',
    estimatedAmount: 1250000,
    status: 'DELIVERED',
    requirements: 'Export garment factory line setup. Complete installation with training requested.',
    orderDate: '2026-09-20T16:00:00Z',
    items: [
      { name: 'Multi-Head Machine', model: 'EMB-M4000', qty: 1, price: 1200000 },
      { name: 'High-Tensile Polyester Thread 24-Pack', model: 'TH-POLY', qty: 5, price: 10000 }
    ],
  },
  {
    id: 'ord-105',
    orderNumber: 'STM-2026-8790',
    customerName: 'Faizan Khan',
    companyName: 'Faizan Apparel Works',
    email: 'faizan.apparel@gmail.com',
    phone: '+91 97654 32110',
    city: 'Ranchi',
    state: 'Jharkhand',
    machineModel: 'SEW-I500',
    machineName: 'Direct-Drive Industrial Lockstitch Machine',
    estimatedAmount: 95000,
    status: 'PENDING',
    requirements: 'Interested in 2 units of industrial high-speed sewing machines for denim pant stitching.',
    orderDate: '2026-09-25T07:15:00Z',
    items: [
      { name: 'Industrial Sewing Machine', model: 'SEW-I500', qty: 2, price: 95000 }
    ],
  },
];

const defaultCustomers: AdminCustomer[] = [
  {
    id: 'cust-1',
    name: 'Zubair Ansari',
    company: 'Ansari Textile Works',
    email: 'zubair@ansaritextiles.com',
    phone: '+91 98351 22890',
    location: 'Surat, Gujarat',
    interestedMachine: 'EMB-HD6000 (6-Head Heavy Duty)',
    totalInquiries: 3,
    status: 'Customer',
    createdAt: '2026-08-10',
  },
  {
    id: 'cust-2',
    name: 'Meera Deshmukh',
    company: 'Loom & Thread Boutique',
    email: 'meera@loomthread.in',
    phone: '+91 99201 44581',
    location: 'Mumbai, Maharashtra',
    interestedMachine: 'EMB-S1500 (Single Head)',
    totalInquiries: 2,
    status: 'Customer',
    createdAt: '2026-08-18',
  },
  {
    id: 'cust-3',
    name: 'Harpreet Singh',
    company: 'Crown Headwear & Uniforms',
    email: 'harpreet@crowncaps.co',
    phone: '+91 98140 77312',
    location: 'Ludhiana, Punjab',
    interestedMachine: 'EMB-CAP300 (Cap Specialist)',
    totalInquiries: 4,
    status: 'Customer',
    createdAt: '2026-08-25',
  },
  {
    id: 'cust-4',
    name: 'Faizan Khan',
    company: 'Faizan Apparel Works',
    email: 'faizan.apparel@gmail.com',
    phone: '+91 97654 32110',
    location: 'Ranchi, Jharkhand',
    interestedMachine: 'SEW-I500 & EMB-S1500',
    totalInquiries: 1,
    status: 'Qualified',
    createdAt: '2026-09-24',
  },
  {
    id: 'cust-5',
    name: 'Rajesh Varma',
    company: 'Varma Sportswear Hub',
    email: 'rajesh@varmasports.com',
    phone: '+91 98200 11223',
    location: 'Bengaluru, Karnataka',
    interestedMachine: 'EMB-M4000 (4-Head)',
    totalInquiries: 2,
    status: 'Active Lead',
    createdAt: '2026-09-22',
  },
];

const defaultCategories: AdminCategory[] = [
  {
    id: 'cat-1',
    name: 'Single-Head Embroidery',
    slug: 'single-head',
    description: 'Precision single-head machines ideal for custom boutiques, monogramming, and small-batch orders.',
    machineCount: 1,
  },
  {
    id: 'cat-2',
    name: 'Multi-Head Industrial',
    slug: 'multi-head',
    description: 'High-throughput 4-head and 6-head synchronized machines for mass garment production.',
    machineCount: 2,
  },
  {
    id: 'cat-3',
    name: 'Computerized Sewing',
    slug: 'computerized-sewing',
    description: 'Programmable electronic sewing workstations with 400+ decorative stitch designs.',
    machineCount: 1,
  },
  {
    id: 'cat-4',
    name: 'Industrial Lockstitch',
    slug: 'industrial-sewing',
    description: 'Direct-drive heavy duty machines operating up to 5,000 SPM for denim, canvas, and leather.',
    machineCount: 1,
  },
  {
    id: 'cat-5',
    name: 'Cap & Tubular Specialist',
    slug: 'cap-tubular',
    description: 'Specialized 270° cylinder arm machines for hats, beanies, sleeves, and bags.',
    machineCount: 1,
  },
  {
    id: 'cat-6',
    name: 'Hoops, Parts & Accessories',
    slug: 'accessories',
    description: 'Genuine magnetic frames, high-tensile threads, titanium needles, and digitizing software.',
    machineCount: 5,
  },
];

const defaultReviews: AdminReview[] = [
  {
    id: 'rev-1',
    author: 'Sunil Mehta',
    role: 'Production Director',
    company: 'Mehta Textile Mills, Surat',
    machineModel: 'EMB-HD6000',
    rating: 5,
    content: 'We installed two 6-head machines. They have run 18 hours daily for six months with zero downtime. Stitch accuracy on zari work is exceptional.',
    status: 'PUBLISHED',
    date: '2026-09-15',
  },
  {
    id: 'rev-2',
    author: 'Ananya Sharma',
    role: 'Founder & Designer',
    company: 'Ananya Couture Atelier, Delhi',
    machineModel: 'EMB-S1500',
    rating: 5,
    content: 'The single-head EMB-S1500 transformed our sampling workflow. Thread changes are seamless, and the touchscreen digitizer makes setup effortless.',
    status: 'PUBLISHED',
    date: '2026-09-10',
  },
  {
    id: 'rev-3',
    author: 'Gurpreet Singh',
    role: 'Managing Partner',
    company: 'Singh Uniforms & Headwear, Ludhiana',
    machineModel: 'EMB-CAP300',
    rating: 5,
    content: 'Best cap machine we have ever invested in. 3D puff embroidery on structured baseball caps comes out razor sharp.',
    status: 'PUBLISHED',
    date: '2026-09-02',
  },
];

const defaultSettings: AdminSettings = {
  companyName: 'Autosewmart Industrial Machinery',
  tagline: 'Precision Embroidery & Industrial Sewing Workstations',
  email: 'sales@autosewmart.com',
  phone: '+91 72688 66359',
  whatsapp: '+91 72688 66359',
  address: '18E/12A/6, Lakhanpur Road, Prayagraj 211016, Uttar Pradesh, India',
  adminPassword: 'admin123',
  taxPercent: 18,
  currency: 'INR',
  quotationValidityDays: 30,
};

// Storage keys
const STORAGE_KEYS = {
  MACHINES: 'sm_admin_machines',
  ACCESSORIES: 'sm_admin_accessories',
  ORDERS: 'sm_admin_orders',
  CUSTOMERS: 'sm_admin_customers',
  CATEGORIES: 'sm_admin_categories',
  REVIEWS: 'sm_admin_reviews',
  SETTINGS: 'sm_admin_settings',
};

// Safe localStorage access
function getStoredItem<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function setStoredItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error('Failed to store item in localStorage', err);
  }
}

// Data Store Accessors
export const adminStore = {
  getMachines: (): AdminMachine[] => getStoredItem(STORAGE_KEYS.MACHINES, defaultMachines),
  saveMachines: (items: AdminMachine[]) => setStoredItem(STORAGE_KEYS.MACHINES, items),
  
  getAccessories: (): AdminAccessory[] => getStoredItem(STORAGE_KEYS.ACCESSORIES, defaultAccessories),
  saveAccessories: (items: AdminAccessory[]) => setStoredItem(STORAGE_KEYS.ACCESSORIES, items),

  getOrders: (): AdminOrder[] => getStoredItem(STORAGE_KEYS.ORDERS, defaultOrders),
  saveOrders: (items: AdminOrder[]) => setStoredItem(STORAGE_KEYS.ORDERS, items),

  getCustomers: (): AdminCustomer[] => getStoredItem(STORAGE_KEYS.CUSTOMERS, defaultCustomers),
  saveCustomers: (items: AdminCustomer[]) => setStoredItem(STORAGE_KEYS.CUSTOMERS, items),

  getCategories: (): AdminCategory[] => getStoredItem(STORAGE_KEYS.CATEGORIES, defaultCategories),
  saveCategories: (items: AdminCategory[]) => setStoredItem(STORAGE_KEYS.CATEGORIES, items),

  getReviews: (): AdminReview[] => getStoredItem(STORAGE_KEYS.REVIEWS, defaultReviews),
  saveReviews: (items: AdminReview[]) => setStoredItem(STORAGE_KEYS.REVIEWS, items),

  getSettings: (): AdminSettings => getStoredItem(STORAGE_KEYS.SETTINGS, defaultSettings),
  saveSettings: (items: AdminSettings) => setStoredItem(STORAGE_KEYS.SETTINGS, items),
};

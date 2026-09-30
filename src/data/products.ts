export interface Product {
  id: string;
  slug: string;
  name: string;
  model: string;
  shortDescription: string;
  description: string;
  category: string;
  image: string;
  badge?: string;
  specs: {
    speed: string;
    needles: string;
    embroideryArea: string;
    heads?: string;
    dimensions: string;
    weight: string;
    power: string;
    threadColors: string;
  };
  features: string[];
  suitableFor: string[];
  warranty: string;
  price: string;
}

export const products: Product[] = [
  {
    id: "emb-s1500",
    slug: "single-head-embroidery-machine",
    name: "Single Head Embroidery Machine",
    model: "EMB-S1500",
    badge: "Best Seller",
    shortDescription: "High-performance 15-needle single-head machine for boutiques, custom shops, and startups.",
    description: "The Autosewmart EMB-S1500 is a versatile, high-speed single-head industrial embroidery machine designed for precision and reliability. Perfect for small businesses, fashion boutiques, and custom apparel shops, it offers exceptional stitch registration, a generous 500x350mm embroidery area, and intuitive touchscreen controls.",
    category: "Single-Head",
    image: "/images/emb-s1500.jpg",
    specs: {
      speed: "1,200 SPM",
      needles: "15 Needles",
      embroideryArea: "500 × 350 mm",
      heads: "1 Head",
      dimensions: "800 × 700 × 900 mm",
      weight: "150 kg",
      power: "220V / 50-60Hz, 150W",
      threadColors: "15 Colors"
    },
    features: [
      "High-speed servo drive reaching 1,200 stitches/min",
      "Automatic thread trimming and color change mechanism",
      "Real-time intelligent thread break sensor",
      "10.1-inch HD touch screen with design preview",
      "Wi-Fi and USB high-speed direct transfer",
      "270° wide cap framing kit included"
    ],
    suitableFor: [
      "Custom Apparel Businesses",
      "Fashion Boutiques",
      "Cap & Headwear Embroidery",
      "Prototyping & Sampling",
      "Personalized Gift Shops"
    ],
    warranty: "2-Year Comprehensive Manufacturer Warranty",
    price: "Request Quote"
  },
  {
    id: "emb-m4000",
    slug: "multi-head-embroidery-machine",
    name: "Multi-Head Embroidery Machine",
    model: "EMB-M4000",
    badge: "High Productivity",
    shortDescription: "Industrial 4-head synchronized embroidery machine engineered for commercial batch production.",
    description: "Built for industrial-scale output, the EMB-M4000 synchronized 4-head machine quadruples your throughput without sacrificing millimeter-perfect stitch consistency. It is engineered for continuous 24/7 commercial operation, making it the definitive choice for apparel manufacturers and contract embroidery operations.",
    category: "Multi-Head",
    image: "/images/emb-m4000.jpg",
    specs: {
      speed: "1,000 SPM",
      needles: "12 Needles / Head",
      embroideryArea: "400 × 450 mm",
      heads: "4 Heads",
      dimensions: "2,400 × 1,200 × 1,500 mm",
      weight: "600 kg",
      power: "220V / 380V 3-Phase, 1.5kW",
      threadColors: "12 Colors"
    },
    features: [
      "4 synchronized heads for synchronized high-volume output",
      "Advanced dual-rail pantograph movement system",
      "Expanded 20-million stitch memory buffer",
      "Ultra-rigid anti-vibration steel foundation",
      "Independent head clutch and shutoff controls",
      "Automatic oiling and lubrication system"
    ],
    suitableFor: [
      "Garment Manufacturing Plants",
      "School & Corporate Uniform Suppliers",
      "Sports Apparel & Teamwear Brands",
      "Export Textile Operations",
      "High-Volume Contract Embroidery"
    ],
    warranty: "3-Year Comprehensive Warranty & Onsite Service",
    price: "Request Quote"
  },
  {
    id: "sew-c200",
    slug: "computerized-sewing-machine",
    name: "Computerized Sewing Machine",
    model: "SEW-C200",
    badge: "Smart Precision",
    shortDescription: "Advanced computerized sewing workstation with programmable decorative stitch patterns.",
    description: "The SEW-C200 combines micro-stepping computer control with aircraft-grade mechanics to deliver flawless tailoring, decorative stitching, and quilting. Featuring 400+ built-in stitch programs and an intuitive touch interface, it empowers professional designers to craft flawless finishes effortlessly.",
    category: "Computerized Sewing",
    image: "/images/sew-c200.jpg",
    specs: {
      speed: "1,500 SPM",
      needles: "Single Needle (Auto-thread)",
      embroideryArea: "Tailoring Workstation",
      heads: "1 Head",
      dimensions: "600 × 300 × 450 mm",
      weight: "45 kg",
      power: "220V / 50Hz, 100W",
      threadColors: "Single / Dual Spool"
    },
    features: [
      "400+ programmable stitch patterns & alphanumeric lettering",
      "Electronic auto-tension regulation system",
      "Hi-Def color LCD touchscreen interface",
      "Programmable needle up/down & back-tack stop",
      "Integrated automatic thread cutting system",
      "Spacious extended bed table for large quilts"
    ],
    suitableFor: [
      "Fashion Tailoring & Haute Couture",
      "Bridal & Evening Gown Ateliers",
      "Custom Apparel Designers",
      "Quilting & Crafting Studios",
      "High-End Alteration Facilities"
    ],
    warranty: "2-Year Comprehensive Warranty",
    price: "Request Quote"
  },
  {
    id: "sew-i500",
    slug: "industrial-sewing-machine",
    name: "Industrial Sewing Machine",
    model: "SEW-I500",
    badge: "Heavy Duty",
    shortDescription: "Direct-drive ultra-high-speed lockstitch machine operating up to 5,000 SPM.",
    description: "Engineered for intense industrial duty cycles, the SEW-I500 delivers staggering speeds up to 5,000 stitches per minute. Equipped with an integrated direct-drive servo motor, automatic trimming, and sealed lubrication, it glides through denim, canvas, leather, and multi-ply textiles without missing a stitch.",
    category: "Industrial Sewing",
    image: "/images/sew-i500.jpg",
    specs: {
      speed: "5,000 SPM",
      needles: "Single / Double Needle",
      embroideryArea: "Industrial Bed Table",
      heads: "1 Head",
      dimensions: "1,200 × 600 × 1,100 mm",
      weight: "85 kg",
      power: "220V / 380V, 550W Servo",
      threadColors: "Heavy-Duty Spool"
    },
    features: [
      "Blazing 5,000 SPM industrial stitching speed",
      "Direct-drive brushless energy-saving servo motor",
      "Automatic needle positioning, thread trimming & back-tack",
      "Heavy-duty walking foot / compound feed mechanism",
      "Full closed-loop oil pump circulation",
      "Cool-running glare-free LED workspace illumination"
    ],
    suitableFor: [
      "Denim & Jean Manufacturing",
      "Heavy Canvas, Tarps & Luggage",
      "Leather Footwear & Accessories",
      "Commercial Workwear & Uniforms",
      "Automotive & Marine Upholstery"
    ],
    warranty: "2-Year Heavy-Duty Industrial Warranty",
    price: "Request Quote"
  },
  {
    id: "emb-cap300",
    slug: "cap-embroidery-machine",
    name: "Cap Embroidery Machine",
    model: "EMB-CAP300",
    badge: "Specialty",
    shortDescription: "Specialized tubular machine optimized for 270° structured caps, hats, and sleeves.",
    description: "The EMB-CAP300 is custom-tailored to solve the difficulties of curved cap and tubular garment embroidery. Utilizing an ultra-slim cylinder arm and precision cap driver, it delivers crisp, distortion-free 3D puff embroidery and fine lettering across the entire crown of caps and beanies.",
    category: "Cap & Tubular",
    image: "/images/emb-cap300.jpg",
    specs: {
      speed: "1,000 SPM",
      needles: "12 Needles",
      embroideryArea: "360 × 60 mm (Cap Curve)",
      heads: "1 Head",
      dimensions: "750 × 700 × 850 mm",
      weight: "130 kg",
      power: "220V / 50-60Hz, 150W",
      threadColors: "12 Colors"
    },
    features: [
      "270° ultra-wide panoramic cap frame system",
      "Quick-clamp driver for instant cap loading",
      "Compact footprint ideal for storefront kiosks & retail",
      "Full-color high-definition touchscreen console",
      "Specialized 3D puff stitch compensation algorithms",
      "Tubular hoops included for sleeves and tote bags"
    ],
    suitableFor: [
      "Custom Headwear & Cap Brands",
      "Athletic Teams & Sports Merchandisers",
      "Retail Mall Kiosks & Event Pop-ups",
      "Promotional Product Distributors",
      "Souvenir & Tourism Apparel"
    ],
    warranty: "2-Year Comprehensive Warranty",
    price: "Request Quote"
  },
  {
    id: "emb-hd6000",
    slug: "heavy-duty-embroidery-machine",
    name: "Heavy-Duty Embroidery Machine",
    model: "EMB-HD6000",
    badge: "Flagship Production",
    shortDescription: "Heavy-duty 6-head commercial production powerhouse for 24/7 industrial manufacturing.",
    description: "When maximum volume and unwavering reliability are non-negotiable, the EMB-HD6000 stands supreme. Featuring 6 synchronized heads with 15 needles each and an expansive 500x450mm field per head, this titan dominates large uniform contracts, sportswear batches, and luxury home textiles.",
    category: "Multi-Head",
    image: "/images/emb-hd6000.jpg",
    specs: {
      speed: "1,100 SPM",
      needles: "15 Needles / Head",
      embroideryArea: "500 × 450 mm per Head",
      heads: "6 Heads",
      dimensions: "3,200 × 1,300 × 1,600 mm",
      weight: "900 kg",
      power: "380V 3-Phase, 2.0kW",
      threadColors: "15 Colors"
    },
    features: [
      "6 high-speed synchronized embroidery heads",
      "15 needle colors per head for complex multicolor crests",
      "Cast-iron reinforced bridge chassis prevents vibration",
      "Industrial Ethernet fleet management & job queuing",
      "Automated centralized thread tension management",
      "Dual emergency stops and automated head break recovery"
    ],
    suitableFor: [
      "Large-Scale Apparel Plants",
      "Military & Emergency Service Uniforms",
      "Luxury Bedding, Linens & Curtains",
      "Export Apparel Contractors",
      "Mass Corporate Merchandise Runs"
    ],
    warranty: "3-Year Commercial Warranty + Dedicated Technical Engineer",
    price: "Request Quote"
  }
];

export interface Accessory {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: string;
  image: string;
  price: string;
}

export const accessories: Accessory[] = [
  {
    id: "acc-1",
    name: "Mighty Hoops Magnetic Framing Kit",
    category: "Hoops & Frames",
    description: "Industrial patented magnetic hoops that clamp instantly without hoop burn on delicate or heavy fabrics.",
    specs: "Includes 4.25\", 5.5\", 7.25\" and 8x13\" magnetic rings",
    image: "/images/accessories.jpg",
    price: "Inquire"
  },
  {
    id: "acc-2",
    name: "Pro-Stitch Premium Polyester Thread Vault (40 Spools)",
    category: "Threads & Spools",
    description: "Ultra-glossy colorfast 40-weight polyester embroidery thread with extreme tensile strength to eliminate breaks.",
    specs: "40 Spools × 5,000m cones, high sheen, 100% colorfast",
    image: "/images/accessories.jpg",
    price: "Inquire"
  },
  {
    id: "acc-3",
    name: "Multi-Grade Stabilizer Backing Assortment",
    category: "Stabilizers",
    description: "Professional grade Cut-Away, Tear-Away, and Water-Soluble Wash-Away rolls for every fabric type.",
    specs: "3 Rolls (12\" × 100 yds), 2.5 oz Tearaway, 3.0 oz Cutaway, Solvy",
    image: "/images/accessories.jpg",
    price: "Inquire"
  },
  {
    id: "acc-4",
    name: "Groz-Beckert Precision Titanium Needles Box",
    category: "Needles & Parts",
    description: "Titanium nitride coated needles designed for reduced friction, cooler operation, and zero missed stitches.",
    specs: "Box of 100 needles (Size 75/11 & 80/12 DBxK5)",
    image: "/images/accessories.jpg",
    price: "Inquire"
  },
  {
    id: "acc-5",
    name: "Autosewmart Pro Digitizing & Fleet Suite",
    category: "Software",
    description: "Professional vector digitizing software with automatic lettering, puff conversion, and real-time machine fleet monitoring.",
    specs: "Lifetime license, Windows/macOS, DST/PES/EXP export",
    image: "/images/accessories.jpg",
    price: "Inquire"
  },
  {
    id: "acc-6",
    name: "Pre-Wound Magnetic Core Bobbins (144 pcs)",
    category: "Threads & Spools",
    description: "Precision spun polyester filament bobbins with magnetic core for uniform tension from first to last stitch.",
    specs: "Style L, 144 bobbins, White & Black available",
    image: "/images/accessories.jpg",
    price: "Inquire"
  }
];

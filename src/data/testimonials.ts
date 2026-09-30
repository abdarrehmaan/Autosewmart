export interface Testimonial {
  id: string;
  name: string;
  company: string;
  location: string;
  rating: number;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Khan",
    company: "Khan Textiles",
    location: "Karachi",
    rating: 5,
    content: "The Multi-Head Embroidery Machine we purchased has completely transformed our production line. The synchronization between heads is flawless, and the 1000 spm speed allowed us to double our output without sacrificing stitch quality."
  },
  {
    id: "t2",
    name: "Sarah Williams",
    company: "Elite Embroidery",
    location: "Dubai",
    rating: 5,
    content: "We demand the highest quality for our luxury clients, and these machines deliver perfectly. The precision on intricate designs is unmatched, and the build quality of the equipment is exceptionally robust. Highly recommended for premium work."
  },
  {
    id: "t3",
    name: "Rajesh Patel",
    company: "RP Garments",
    location: "Mumbai",
    rating: 4,
    content: "Excellent machines backed by phenomenal technical support. Whenever we've had a minor issue or needed guidance on a complex setup, their after-sales team has been quick to respond and incredibly helpful."
  },
  {
    id: "t4",
    name: "Maria Santos",
    company: "Santos Fashion",
    location: "Manila",
    rating: 5,
    content: "The specialized cap embroidery machine is a game-changer. It handles 270-degree designs effortlessly, and the quick-change frame system saves us so much time between runs. Our custom headwear business has grown significantly since this upgrade."
  }
];

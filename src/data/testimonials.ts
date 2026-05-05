export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Store Owner",
    company: "Fashion Boutique",
    content: "Emicyber transformed our Shopify store completely. Our conversion rate increased by 45% within the first month. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "TechGear Pro",
    content: "The Klaviyo automation setup was game-changing. Our email revenue tripled and the automation flows work flawlessly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Marketing Director",
    company: "Beauty Essentials",
    content: "Professional, responsive, and incredibly skilled. The store redesign exceeded our expectations and customer feedback has been amazing.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Founder",
    company: "Home Decor Plus",
    content: "Working with Chigozie was a pleasure. He delivered on time, communicated clearly, and the results speak for themselves.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "E-commerce Manager",
    company: "Organic Living",
    content: "The SEO optimization work has dramatically improved our organic traffic. We're now ranking on page 1 for our key products.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
  }
];

export interface PortfolioItem {
  id: number;
  name: string;
  niche: string;
  description: string;
  url: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    name: "Gymshark",
    niche: "Fitness Apparel",
    description: "High-performance fitness apparel brand with sleek design and seamless shopping experience.",
    url: "https://gymshark.com",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
  },
  {
    id: 3,
    name: "ColourPop",
    niche: "Beauty",
    description: "Affordable, high-quality makeup brand with vibrant colors and fast checkout.",
    url: "https://colourpop.com",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
   },

   {
     id: 4,
     name: "BlendJet",
     niche: "Kitchen Gadgets",
     description: "Portable blenders with powerful performance and eye-catching design.",
     url: "https://blendjet.com",
     image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&q=80"
   },
  {
    id: 5,
    name: "MVMT",
    niche: "Watches",
    description: "Affordable luxury watches with modern minimalist aesthetics.",
    url: "https://mvmt.com",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
  },
  {
    id: 6,
    name: "Tentree",
    niche: "Eco Clothing",
    description: "Sustainable clothing brand that plants ten trees for every item purchased.",
    url: "https://tentree.com",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
  },
  {
    id: 7,
    name: "Death Wish Coffee",
    niche: "Coffee Brand",
    description: "World's strongest coffee with bold branding and high-energy customer experience.",
    url: "https://deathwishcoffee.com",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
  }
];

export const niches = ["All", "Fitness Apparel", "Beauty", "Kitchen Gadgets", "Watches", "Eco Clothing", "Coffee Brand"];

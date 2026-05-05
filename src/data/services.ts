export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Shopify Store Development",
    description: "Build custom Shopify stores from scratch with conversion-focused design and functionality.",
    icon: "ShoppingCart",
    features: ["Custom Theme Development", "App Integration", "Payment Gateway Setup", "Mobile Optimization"]
  },
  {
    id: 2,
    title: "Store Redesign / Optimization",
    description: "Transform existing stores with modern design and improved user experience.",
    icon: "RefreshCw",
    features: ["UI/UX Audit", "Performance Optimization", "Conversion Rate Optimization", "Mobile Responsiveness"]
  },
  {
    id: 3,
    title: "Product Page Optimization",
    description: "Optimize product pages to increase conversions and average order value.",
    icon: "Package",
    features: ["A/B Testing", "Product Description Copy", "Image Optimization", "Trust Badge Integration"]
  },
  {
    id: 4,
    title: "Klaviyo Setup",
    description: "Professional Klaviyo email marketing setup and configuration for your store.",
    icon: "Mail",
    features: ["Account Setup", "List Segmentation", "Sign-up Forms", "Integration Configuration"]
  },
  {
    id: 5,
    title: "Email Automation",
    description: "Create automated email flows that nurture leads and drive repeat purchases.",
    icon: "Zap",
    features: ["Welcome Series", "Abandoned Cart Flow", "Post-Purchase Flow", "Win-Back Campaigns"]
  },
  {
    id: 6,
    title: "SEO Optimization",
    description: "Improve search engine rankings and drive organic traffic to your store.",
    icon: "Search",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Schema Markup"]
  },
  {
    id: 7,
    title: "Sales Funnel Optimization",
    description: "Optimize your entire sales funnel to maximize conversions at every stage.",
    icon: "TrendingUp",
    features: ["Funnel Analysis", "Landing Page Design", "Conversion Tracking", "A/B Testing"]
  }
];

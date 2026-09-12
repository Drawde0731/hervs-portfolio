import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "John Hervyne Diosemito",
  initials: "HD",
  nickname: "Hervs",
  url: "",
  location: "Santa Maria, Bulacan, PH",
  locationLink: "https://www.google.com/maps/place/Santa+Maria,+Bulacan",
  description: "Shopify Developer & E-Commerce Automation Specialist",
  bio: "I engineer Shopify storefronts, integrations, and automated workflows that streamline e-commerce operations and turn complex processes into systems that simply work.",
  summary:
    "I spent 3 years in customer service, handling billing, upselling, tech support, and CRM across BPO companies. That time taught me exactly what customers need and what frustrates them. Now I channel that into building Shopify stores and automating the e-commerce systems that make the whole experience seamless. Based in Bulacan, PH. Open to remote freelance and full-time opportunities.",
  avatarUrl: "/hervs.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Shopify Liquid",
    "Shopify",
    "n8n",
    "Go High Level",
    "Klaviyo",
    "DSers",
    "PageFly",
    "Loox",
    "Google Workspace",
    "CRM Tools",
    "Microsoft Office",
  ],
  services: [
    {
      emoji: "🛍️",
      title: "Shopify Store Development",
      description:
        "Full store builds: theme setup, custom Liquid sections, product pages, collections, and checkout optimization.",
    },
    {
      emoji: "📦",
      title: "Product Listing & Optimization",
      description:
        "SEO-friendly product titles, descriptions, and image optimization to maximize visibility and conversions.",
    },
    {
      emoji: "🔌",
      title: "App Integration",
      description:
        "Setup and configure essential Shopify apps: Klaviyo, DSers, Loox, PageFly, and more, fully wired to your store.",
    },
    {
      emoji: "⚡",
      title: "E-Commerce Automation",
      description:
        "Build n8n workflows that automate post-purchase flows, inventory alerts, and order fulfillment notifications.",
    },
    {
      emoji: "🎯",
      title: "CRM & Follow-up Automation",
      description:
        "Set up Go High Level pipelines for lead capture, welcome sequences, and automated follow-up to keep customers engaged.",
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "johnhervynediosemito.business@gmail.com",
    tel: "+63 906 290 8237",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/john-hervyne-diosemito-108264336",
        icon: Icons.linkedin,
        navbar: true,
      },
      Upwork: {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~019788c02220bba161?mp_source=share",
        icon: Icons.upwork,
        navbar: true,
      },
      OnlineJobs: {
        name: "OnlineJobs",
        url: "https://www.onlinejobs.ph/jobseekers/info/2246642",
        icon: Icons.briefcase,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:johnhervynediosemito.business@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "TaskUs",
      href: "https://www.taskus.com",
      badges: [],
      location: "Meycauayan, Bulacan",
      title: "Customer Service Representative",
      logoUrl: "/taskus.png",
      start: "Oct 2025",
      end: "Apr 2026",
      description:
        "Maintained a 91.7% positive survey KPI across 9 to 11 monthly customer interactions. Managed customer concerns across multiple channels while consistently hitting performance metrics, building skills directly applicable to handling Shopify store support and customer communication workflows.",
    },
    {
      company: "Concentrix",
      href: "https://www.concentrix.com",
      badges: [],
      location: "Quezon City, PH",
      title: "Customer Service Representative",
      logoUrl: "/concentrix.png",
      start: "Jun 2024",
      end: "Dec 2024",
      description:
        "Identified customer needs and upsold relevant products and promotional offers, building strong intuition for buyer behavior and product-market fit. Provided technical support across platforms and maintained up-to-date product knowledge as a direct foundation for managing Shopify app ecosystems and product catalogues.",
    },
    {
      company: "Teleperformance",
      href: "https://www.teleperformance.com",
      badges: [],
      location: "Quezon City, PH",
      title: "Customer Service Representative",
      logoUrl: "/teleperformance.png",
      start: "Nov 2022",
      end: "Jan 2023",
      description:
        "Tracked billing concerns and account adjustments with precision using CRM tools, ensuring accurate documentation and timely resolution. These skills transfer directly to managing e-commerce orders, customer records, and automation workflows.",
    },
  ],
  education: [
    {
      school: "Jesus Is Lord Colleges Foundation Inc.",
      href: "https://jilcf.edu.ph",
      degree: "Information Communication Technology, Technical-Vocational-Livelihood Track",
      logoUrl: "",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Novahaus Demo Store",
      href: "",
      dates: "In Progress",
      active: false,
      description:
        "Building a full Shopify store from scratch for a fictional home essentials brand, covering theme customization, custom Liquid sections, product listings, and app integrations (Klaviyo, Loox, DSers).",
      technologies: ["Shopify", "Liquid", "Klaviyo", "DSers", "Loox", "PageFly"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Abandoned Cart Recovery Flow",
      href: "",
      dates: "In Progress",
      active: false,
      description:
        "Designing and building an automated abandoned cart recovery sequence using n8n: 3-step email drip plus SMS trigger, integrated with a Shopify store webhook.",
      technologies: ["n8n", "Shopify", "Webhooks", "Email Automation"],
      links: [],
      image: "",
      video: "",
    },
  ],
} as const;

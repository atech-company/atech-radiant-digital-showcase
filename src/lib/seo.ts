export const SITE_URL = "https://atechleb.com";
export const SITE_NAME = "A TECH";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;
export const COMPANY_EMAIL = "hello@atechleb.com";
export const COMPANY_PHONE = "+96176349746";

export type SeoMeta = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  keywords?: string[];
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildTitle(pageTitle?: string, siteName: string = SITE_NAME): string {
  if (!pageTitle) return `${siteName} | Technology Company & Software Development`;
  return `${pageTitle} | ${siteName}`;
}

export const PAGE_SEO: Record<string, SeoMeta> = {
  home: {
    title: "Technology Company & Software Development",
    description:
      "A TECH is a technology company delivering custom software development, web development, AI solutions, ERP & POS systems, mobile apps, and digital transformation for modern businesses.",
    path: "/",
    keywords: [
      "technology company",
      "software development",
      "web development",
      "AI solutions",
      "digital transformation",
    ],
  },
  about: {
    title: "About A TECH",
    description:
      "Learn about A TECH, a software company specializing in Laravel, React, Next.js development, enterprise systems, and IT consulting.",
    path: "/about",
  },
  services: {
    title: "Technology Services",
    description:
      "Explore A TECH services: web development, AI solutions, custom software, ERP, POS, mobile apps, SaaS, UI/UX, API integration, and IT consulting.",
    path: "/services",
  },
  projects: {
    title: "Our Projects",
    description:
      "Explore A TECH projects: web applications, mobile apps, ERP systems, and custom software built for growing businesses.",
    path: "/projects",
  },
  login: {
    title: "Login",
    description: "Sign in to your A TECH account to access your dashboard and saved projects.",
    path: "/login",
  },
  contact: {
    title: "Contact A TECH",
    description:
      "Contact A TECH for software development, website design, AI automation, and enterprise technology consulting.",
    path: "/contact",
  },
  faqs: {
    title: "FAQs",
    description:
      "Frequently asked questions about A TECH software development, web design, AI solutions, ERP, POS, and support services.",
    path: "/faqs",
  },
  blog: {
    title: "Technology Blog",
    description:
      "Insights on web development, AI, Laravel, Next.js, ERP vs POS, digital transformation, and custom software from A TECH.",
    path: "/blog",
  },
};

export const PRIVATE_PATHS = [
  "/login",
  "/signup",
  "/dashboard",
  "/profile",
  "/cms",
];

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  readMinutes: number;
  tags: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-every-business-needs-a-professional-website",
    title: "Why Every Business Needs a Professional Website",
    metaDescription:
      "Discover why a professional website is essential for credibility, lead generation, and digital growth in 2026.",
    excerpt: "A professional website is your most important digital asset for trust and visibility.",
    publishedAt: "2026-04-01",
    readMinutes: 6,
    tags: ["web development", "website design", "digital transformation"],
    sections: [
      {
        heading: "Your website is your 24/7 sales channel",
        paragraphs: [
          "Customers research online before they buy. Without a professional website, you lose credibility to competitors who invest in web presence.",
          "A TECH helps businesses launch fast, SEO-friendly websites that convert visitors into leads.",
        ],
      },
    ],
  },
  {
    slug: "benefits-of-ai-for-small-businesses",
    title: "Benefits of AI for Small Businesses",
    metaDescription:
      "How small businesses can use AI for automation, customer support, and smarter decision-making.",
    excerpt: "AI is no longer only for enterprises—small businesses can adopt it practically today.",
    publishedAt: "2026-04-05",
    readMinutes: 7,
    tags: ["AI solutions", "business automation", "artificial intelligence"],
    sections: [
      {
        heading: "Practical AI wins for SMBs",
        paragraphs: [
          "Chatbots, automated reporting, and intelligent workflows reduce manual work and improve response times.",
          "A TECH implements AI solutions that integrate with your existing website and backend systems.",
        ],
      },
    ],
  },
  {
    slug: "laravel-vs-other-backend-frameworks",
    title: "Laravel vs Other Backend Frameworks",
    metaDescription:
      "Compare Laravel with other backend frameworks for security, speed, and long-term maintainability.",
    excerpt: "Laravel remains a top choice for secure, scalable business applications.",
    publishedAt: "2026-04-08",
    readMinutes: 8,
    tags: ["Laravel development", "API development", "software development"],
    sections: [
      {
        heading: "Why A TECH chooses Laravel",
        paragraphs: [
          "Laravel offers elegant syntax, strong ecosystem, and enterprise-ready patterns for APIs and admin panels.",
          "For CMS-driven websites and custom ERP systems, Laravel delivers speed to market without sacrificing quality.",
        ],
      },
    ],
  },
  {
    slug: "why-nextjs-is-great-for-seo",
    title: "Why Next.js Is Great for SEO",
    metaDescription:
      "Learn how Next.js improves SEO with server rendering, metadata APIs, and performance optimizations.",
    excerpt: "Next.js helps technology companies rank better with modern rendering and metadata control.",
    publishedAt: "2026-04-10",
    readMinutes: 7,
    tags: ["Next.js development", "SEO", "React development"],
    sections: [
      {
        heading: "SEO benefits of Next.js",
        paragraphs: [
          "Server-side rendering and static generation improve crawlability and Core Web Vitals.",
          "A TECH builds SEO-first frontends with React and Next.js for high-performance marketing sites.",
        ],
      },
    ],
  },
  {
    slug: "erp-vs-pos-which-does-your-business-need",
    title: "ERP vs POS: Which Does Your Business Need?",
    metaDescription:
      "ERP vs POS explained: choose the right system for retail, restaurants, and growing operations.",
    excerpt: "Understand when to invest in ERP, POS, or both for operational efficiency.",
    publishedAt: "2026-04-12",
    readMinutes: 6,
    tags: ["ERP systems", "POS systems", "enterprise software"],
    sections: [
      {
        heading: "ERP and POS serve different goals",
        paragraphs: [
          "POS handles front-line sales; ERP manages company-wide resources. Many businesses need integrated solutions.",
          "A TECH builds custom ERP and POS systems that sync inventory, finance, and reporting.",
        ],
      },
    ],
  },
  {
    slug: "how-custom-software-improves-productivity",
    title: "How Custom Software Improves Productivity",
    metaDescription:
      "Custom software eliminates spreadsheet chaos and manual processes to boost team productivity.",
    excerpt: "Off-the-shelf tools often fail unique workflows—custom software fills the gap.",
    publishedAt: "2026-04-15",
    readMinutes: 6,
    tags: ["custom software development", "business automation", "enterprise software"],
    sections: [
      {
        heading: "Tailored workflows save hours every week",
        paragraphs: [
          "Custom applications automate repetitive tasks and connect data across departments.",
          "A TECH partners with companies to design software that matches real operational needs.",
        ],
      },
    ],
  },
  {
    slug: "digital-transformation-for-modern-companies",
    title: "Digital Transformation for Modern Companies",
    metaDescription:
      "A practical guide to digital transformation: cloud, APIs, AI, and modern software stacks.",
    excerpt: "Digital transformation is a journey—start with strategy, then execute in phases.",
    publishedAt: "2026-04-18",
    readMinutes: 8,
    tags: ["digital transformation", "IT consulting", "cloud solutions"],
    sections: [
      {
        heading: "Build a transformation roadmap",
        paragraphs: [
          "Assess current systems, prioritize high-impact projects, and adopt cloud-native architecture gradually.",
          "A TECH provides IT consulting and implementation for sustainable digital transformation.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export type ServiceSeoPage = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  highlights: string[];
  body: string[];
  keywords: string[];
};

export const SERVICE_PAGES: ServiceSeoPage[] = [
  {
    slug: "web-development",
    title: "Web Development Services",
    metaDescription:
      "Professional web development and website design by A TECH. Custom web applications, e-commerce, and high-performance React and Next.js websites.",
    h1: "Professional Web Development & Website Design",
    intro:
      "A TECH builds fast, secure, and SEO-friendly websites and custom web applications that help businesses grow online.",
    highlights: ["Responsive design", "SEO-ready architecture", "Laravel & React stack", "E-commerce solutions"],
    body: [
      "Our web development team delivers modern websites and custom web applications tailored to your business goals.",
      "From corporate websites to complex platforms, we combine UI/UX design with reliable Laravel and React development.",
    ],
    keywords: ["web development", "website design", "custom web applications", "e-commerce development"],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions & Automation",
    metaDescription:
      "AI solutions and business automation from A TECH. Machine learning integrations, intelligent chatbots, and workflow automation.",
    h1: "AI Solutions for Modern Businesses",
    intro:
      "Harness artificial intelligence and machine learning to automate workflows, improve customer experience, and unlock data-driven decisions.",
    highlights: ["AI chatbots", "Process automation", "OpenAI integrations", "Predictive insights"],
    body: [
      "A TECH designs practical AI solutions that integrate with your existing systems and deliver measurable ROI.",
      "We help companies adopt AI responsibly with secure API development and scalable cloud architecture.",
    ],
    keywords: ["AI solutions", "artificial intelligence", "machine learning", "business automation"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    metaDescription:
      "Custom software development company building enterprise software, SaaS platforms, and business-critical applications.",
    h1: "Custom Software Development",
    intro:
      "We build enterprise software and bespoke applications that match your exact workflows, not the other way around.",
    highlights: ["Enterprise software", "Scalable architecture", "API-first design", "Long-term support"],
    body: [
      "A TECH is your startup technology partner and enterprise development team for custom software projects.",
      "From MVP to production, we deliver maintainable code with Laravel, React, and cloud-native practices.",
    ],
    keywords: ["custom software development", "enterprise software", "SaaS development"],
  },
  {
    slug: "erp-systems",
    title: "ERP Systems Development",
    metaDescription:
      "Custom ERP systems development for inventory, finance, HR, and operations. Streamline your business with A TECH.",
    h1: "ERP Systems Development",
    intro:
      "Centralize operations with custom ERP systems designed around your business processes and reporting needs.",
    highlights: ["Inventory management", "Finance modules", "Role-based access", "Real-time dashboards"],
    body: [
      "Our ERP solutions connect departments, reduce manual work, and improve decision-making across your organization.",
    ],
    keywords: ["ERP systems", "enterprise resource planning", "business automation"],
  },
  {
    slug: "pos-systems",
    title: "POS Systems Development",
    metaDescription:
      "Custom POS systems for retail and restaurants. Fast checkout, inventory sync, and reporting by A TECH.",
    h1: "POS Systems Development",
    intro:
      "Reliable point-of-sale systems built for speed, accuracy, and seamless integration with your back office.",
    highlights: ["Retail POS", "Inventory sync", "Multi-branch support", "Sales analytics"],
    body: [
      "A TECH develops POS systems that work online and offline, with secure payment flows and admin dashboards.",
    ],
    keywords: ["POS systems", "retail technology", "point of sale software"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    metaDescription:
      "Mobile app development for iOS and Android. Cross-platform apps with great UX and secure API integrations.",
    h1: "Mobile App Development",
    intro:
      "Build mobile applications that engage users and connect to your Laravel backend and cloud services.",
    highlights: ["iOS & Android", "Cross-platform", "Push notifications", "API integration"],
    body: [
      "From consumer apps to field-service tools, A TECH delivers mobile experiences aligned with your brand and goals.",
    ],
    keywords: ["mobile app development", "iOS development", "Android development"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    metaDescription:
      "SaaS development company building subscription platforms, multi-tenant apps, and cloud-based products.",
    h1: "SaaS Development",
    intro:
      "Launch and scale SaaS products with secure authentication, billing integrations, and cloud infrastructure.",
    highlights: ["Multi-tenant architecture", "Subscription billing", "Admin dashboards", "Cloud deployment"],
    body: [
      "A TECH helps founders and enterprises build SaaS platforms with Laravel APIs and modern React frontends.",
    ],
    keywords: ["SaaS development", "cloud solutions", "subscription software"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    metaDescription:
      "UI/UX design services for websites and apps. User-centered interfaces that improve conversion and usability.",
    h1: "UI/UX Design Services",
    intro:
      "Great design drives trust. We create intuitive interfaces for web, mobile, and enterprise software.",
    highlights: ["User research", "Wireframes & prototypes", "Design systems", "Accessibility"],
    body: [
      "Our UI/UX team collaborates with developers to ensure designs are beautiful and technically feasible.",
    ],
    keywords: ["UI/UX design", "user experience", "interface design"],
  },
  {
    slug: "api-integration",
    title: "API Development & Integration",
    metaDescription:
      "API development and third-party integrations. Connect CRM, payment, ERP, and cloud services securely.",
    h1: "API Development & Integration",
    intro:
      "Connect your systems with robust REST APIs, webhooks, and secure integration layers.",
    highlights: ["REST APIs", "Third-party integrations", "Webhooks", "Documentation"],
    body: [
      "A TECH builds APIs that power web apps, mobile apps, and partner ecosystems with reliability and security.",
    ],
    keywords: ["API development", "system integration", "Laravel API"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting & Digital Transformation",
    metaDescription:
      "IT consulting and digital transformation services. Technology strategy, architecture review, and modernization.",
    h1: "IT Consulting & Digital Transformation",
    intro:
      "Plan your technology roadmap with experts who understand software, cloud, and business operations.",
    highlights: ["Technology audits", "Architecture planning", "Digital transformation", "Vendor selection"],
    body: [
      "A TECH advises companies on modernizing legacy systems, adopting AI, and building scalable digital platforms.",
    ],
    keywords: ["IT consulting", "digital transformation", "technology strategy"],
  },
];

export function getServiceBySlug(slug: string): ServiceSeoPage | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

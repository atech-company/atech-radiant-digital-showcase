/**
 * Generates static index.html per main route so Google Search Console
 * sees unique title, description, and canonical for each page (SPA fix).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const SITE_URL = "https://atechleb.com";
const SITE_NAME = "A TECH";

const MAIN_PAGES = [
  {
    segment: "about",
    path: "/about",
    title: "About A TECH",
    description:
      "Learn about A TECH, a software company specializing in Laravel, React, Next.js development, enterprise systems, and IT consulting.",
  },
  {
    segment: "projects",
    path: "/projects",
    title: "Our Projects",
    description:
      "Explore A TECH projects: web applications, mobile apps, ERP systems, and custom software built for growing businesses.",
  },
  {
    segment: "services",
    path: "/services",
    title: "Technology Services",
    description:
      "Explore A TECH services: web development, AI solutions, custom software, ERP, POS, mobile apps, SaaS, UI/UX, API integration, and IT consulting.",
  },
  {
    segment: "faqs",
    path: "/faqs",
    title: "FAQs",
    description:
      "Frequently asked questions about A TECH software development, web design, AI solutions, ERP, POS, and support services.",
  },
  {
    segment: "contact",
    path: "/contact",
    title: "Contact A TECH",
    description:
      "Contact A TECH for software development, website design, AI automation, and enterprise technology consulting.",
  },
  {
    segment: "login",
    path: "/login",
    title: "Login",
    description: "Sign in to your A TECH account to access your dashboard and saved projects.",
  },
];

function buildTitle(pageTitle) {
  return `${pageTitle} | ${SITE_NAME}`;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectPageMeta(html, page) {
  const fullTitle = buildTitle(page.title);
  const canonical = `${SITE_URL}${page.path}`;
  const description = escapeHtml(page.description);

  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(fullTitle)}</title>`);
  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`
  );
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${description}" />`
  );
  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${description}" />`
  );
  return out;
}

const templatePath = path.join(distDir, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf8");

for (const page of MAIN_PAGES) {
  const pageDir = path.join(distDir, page.segment);
  fs.mkdirSync(pageDir, { recursive: true });
  const html = injectPageMeta(template, page);
  fs.writeFileSync(path.join(pageDir, "index.html"), html);
  console.log(`Prerendered SEO: ${page.path}`);
}

console.log("SEO prerender complete.");

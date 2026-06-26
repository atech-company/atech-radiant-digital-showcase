import { Helmet } from "react-helmet-async";
import { absoluteUrl, buildTitle, DEFAULT_OG_IMAGE, SITE_NAME, type SeoMeta } from "@/lib/seo";
import { useSiteBranding } from "@/hooks/use-content";

type SeoHeadProps = SeoMeta & {
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SeoHead = ({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noindex = false,
  keywords = [],
  jsonLd,
}: SeoHeadProps) => {
  const { data: branding } = useSiteBranding();
  const siteName = branding?.siteName?.trim() || SITE_NAME;
  const brandingImage = branding?.logo || branding?.favicon;
  const resolvedImage = image ?? (brandingImage ? absoluteUrl(brandingImage) : DEFAULT_OG_IMAGE);
  const favicon = branding?.favicon || branding?.logo || "/logo.png";
  const canonical = absoluteUrl(path);
  const fullTitle = buildTitle(title, siteName);
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href={favicon.startsWith("http") ? favicon : absoluteUrl(favicon)} />
      <link rel="apple-touch-icon" href={favicon.startsWith("http") ? favicon : absoluteUrl(favicon)} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={resolvedImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SeoHead;

import { Helmet } from "react-helmet-async";
import { absoluteUrl, buildTitle, DEFAULT_OG_IMAGE, SITE_NAME, type SeoMeta } from "@/lib/seo";

type SeoHeadProps = SeoMeta & {
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SeoHead = ({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  keywords = [],
  jsonLd,
}: SeoHeadProps) => {
  const canonical = absoluteUrl(path);
  const fullTitle = buildTitle(title);
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

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SeoHead;

import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { getServiceBySlug } from "@/data/seo-services";
import { breadcrumbSchema, organizationSchema, serviceSchema, websiteSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

type Props = { slug?: string };

const ServiceDetail = ({ slug: slugProp }: Props) => {
  const { slug: slugParam } = useParams<{ slug: string }>();
  const slug = slugProp ?? slugParam ?? "";
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link to="/services">Back to services</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const path = `/services/${service.slug}`;

  return (
    <div className="min-h-screen">
      <SeoHead
        title={service.title}
        description={service.metaDescription}
        path={path}
        keywords={service.keywords}
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          serviceSchema(service.title, service.metaDescription, absoluteUrl(path)),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path },
          ]),
        ]}
      />
      <Navigation />
      <main className="pt-16">
        <article className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              {" / "}
              <Link to="/services" className="hover:text-primary">Services</Link>
              {" / "}
              <span>{service.title}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.h1}</h1>
            <p className="text-xl text-muted-foreground mb-8">{service.intro}</p>

            <section aria-labelledby="service-highlights">
              <h2 id="service-highlights" className="text-2xl font-semibold mb-4">Key capabilities</h2>
              <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="service-details">
              <h2 id="service-details" className="text-2xl font-semibold mb-4">How A TECH helps</h2>
              {service.body.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>

            <Button asChild size="lg" className="mt-6">
              <Link to="/contact">
                Request a consultation
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;

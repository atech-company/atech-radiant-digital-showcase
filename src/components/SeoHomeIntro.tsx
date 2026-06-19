import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SeoHomeIntro = () => {
  const offerings = [
    "Custom software development",
    "Professional website development",
    "AI-powered solutions",
    "ERP and POS systems",
    "Mobile applications",
    "Business automation",
    "Cloud-based platforms",
    "API integrations",
    "IT consulting",
    "Ongoing support and maintenance",
  ];

  return (
    <section className="py-16 bg-muted/20" aria-labelledby="atech-offerings">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 id="atech-offerings" className="text-3xl font-bold mb-4 text-center">
          Technology Company for Software, Web, and AI Solutions
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-8">
          A TECH helps businesses grow with custom software development, Laravel and React engineering,
          digital transformation, and secure cloud platforms.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {offerings.map((item) => (
            <li key={item} className="rounded-lg border border-border bg-card px-4 py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
        <div className="text-center mt-8">
          <Link to="/services" className="inline-flex items-center text-primary font-medium hover:underline">
            Explore all services
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeoHomeIntro;

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import SeoHomeIntro from '@/components/SeoHomeIntro';
import { PAGE_SEO } from '@/lib/seo';
import { faqSchema, localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/schema';

const Index = () => {
  const meta = PAGE_SEO.home;

  return (
    <div className="min-h-screen">
      <SeoHead
        {...meta}
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          localBusinessSchema(),
          faqSchema([
            {
              question: "What services does A TECH provide?",
              answer:
                "A TECH provides custom software development, web development, AI solutions, ERP and POS systems, mobile apps, SaaS platforms, API integration, and IT consulting.",
            },
            {
              question: "Where is A TECH located?",
              answer: "A TECH is a technology company serving clients in Lebanon and worldwide.",
            },
          ]),
        ]}
      />
      <Navigation />
      <main>
        <Hero />
        <SeoHomeIntro />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
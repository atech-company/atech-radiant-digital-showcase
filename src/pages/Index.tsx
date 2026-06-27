import { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import { PAGE_SEO } from '@/lib/seo';
import { faqSchema, localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/schema';

const SeoHomeIntro = lazy(() => import('@/components/SeoHomeIntro'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const ContactCTA = lazy(() => import('@/components/ContactCTA'));

const SectionFallback = ({ minHeight = '12rem' }: { minHeight?: string }) => (
  <div aria-hidden="true" style={{ minHeight }} />
);

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
        <Suspense fallback={<SectionFallback minHeight="16rem" />}>
          <SeoHomeIntro />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactCTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

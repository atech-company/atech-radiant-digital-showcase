import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const FAQs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Coming soon... Find answers to common questions about our services, process, and pricing.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
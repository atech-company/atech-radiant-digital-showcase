import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Coming soon... Detailed information about our web development, mobile apps, UI/UX design, and custom systems.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
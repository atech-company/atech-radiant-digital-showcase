import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Coming soon... Explore our portfolio of successful digital projects and case studies.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
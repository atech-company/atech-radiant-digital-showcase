import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">A TECH</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Coming soon... Learn more about our team, mission, and the story behind A TECH.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
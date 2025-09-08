import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Smartphone, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/20 animate-float delay-1000" />
      <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-accent/20 animate-float delay-2000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">Digital Solutions</span>
            <br />
            <span className="text-foreground">That Transform</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
            We craft cutting-edge software, stunning websites, and powerful mobile apps 
            that drive your business forward in the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-400">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-effect group"
              asChild
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in-up delay-600">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Web Development</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Smartphone className="h-8 w-8 text-secondary" />
              </div>
              <p className="text-sm text-muted-foreground">Mobile Apps</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Palette className="h-8 w-8 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground">UI/UX Design</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SERVICE_PAGES } from '@/data/seo-services';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">A TECH</h3>
            <p className="text-muted-foreground">
              Technology company specializing in software development, web development,
              AI solutions, ERP & POS systems, and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="A TECH on GitHub" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="A TECH on Twitter" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="A TECH on LinkedIn" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="A TECH on Instagram" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/faqs" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              {SERVICE_PAGES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-primary hover:underline">View all services</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="mailto:atech@atechleb.com" className="text-muted-foreground hover:text-primary">atech@atechleb.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="tel:+96176349746" className="text-muted-foreground hover:text-primary">+961 (76) 349-746</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-muted-foreground">Beirut, Lebanon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} A TECH. All rights reserved.</p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Built with care by <span className="text-primary">A TECH</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

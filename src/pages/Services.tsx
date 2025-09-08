import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Settings, 
  Check, 
  ArrowRight, 
  Zap,
  Shield,
  Clock,
  Users,
  Star,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      features: [
        "Responsive Design",
        "SEO Optimization", 
        "Performance Optimization",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Content Management Systems"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
      pricing: {
        starter: { price: "$2,500", duration: "2-3 weeks", features: ["5-page website", "Mobile responsive", "Basic SEO", "Contact forms"] },
        professional: { price: "$7,500", duration: "4-6 weeks", features: ["Custom design", "CMS integration", "Advanced SEO", "Analytics setup", "Performance optimization"] },
        enterprise: { price: "$15,000+", duration: "8-12 weeks", features: ["Complex functionality", "Third-party integrations", "Advanced security", "Scalable architecture", "Ongoing support"] }
      }
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "Offline Functionality",
        "Push Notifications",
        "App Store Optimization",
        "Backend Integration"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
      pricing: {
        starter: { price: "$8,000", duration: "6-8 weeks", features: ["Cross-platform app", "Basic functionality", "App store submission", "Basic backend"] },
        professional: { price: "$20,000", duration: "10-14 weeks", features: ["Advanced features", "Custom UI/UX", "Backend development", "Admin panel", "Analytics"] },
        enterprise: { price: "$40,000+", duration: "16-24 weeks", features: ["Complex functionality", "Multiple platforms", "Advanced security", "Scalable backend", "Maintenance plan"] }
      }
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that create exceptional digital experiences.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Design Systems",
        "Usability Testing",
        "Brand Integration"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Miro"],
      pricing: {
        starter: { price: "$1,500", duration: "1-2 weeks", features: ["UI design", "Style guide", "Basic prototyping", "Design handoff"] },
        professional: { price: "$4,000", duration: "3-4 weeks", features: ["UX research", "User journeys", "Interactive prototypes", "Design system", "Usability testing"] },
        enterprise: { price: "$8,000+", duration: "6-8 weeks", features: ["Comprehensive UX audit", "Advanced prototyping", "A/B testing design", "Brand guidelines", "Ongoing design support"] }
      }
    },
    {
      icon: Settings,
      title: "Custom Systems",
      description: "Tailored software solutions and platforms designed for your specific business needs.",
      features: [
        "Custom Development",
        "System Integration",
        "Database Design",
        "API Development",
        "Cloud Solutions",
        "Scalable Architecture"
      ],
      technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "Docker", "Kubernetes"],
      pricing: {
        starter: { price: "$5,000", duration: "3-4 weeks", features: ["Basic automation", "Simple integrations", "Database setup", "Basic admin panel"] },
        professional: { price: "$15,000", duration: "6-10 weeks", features: ["Complex workflows", "API development", "Advanced integrations", "Custom dashboard", "Documentation"] },
        enterprise: { price: "$30,000+", duration: "12-20 weeks", features: ["Enterprise architecture", "Multi-system integration", "Advanced security", "Scalable infrastructure", "Ongoing maintenance"] }
      }
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies and frameworks to ensure your project is future-ready."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security measures and best practices to protect your data and users."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We stick to deadlines and deliver projects within the agreed timeframe."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of experienced developers and designers brings years of expertise."
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks ensure flawless performance."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Built to grow with your business and handle increasing demands."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in-up">
                Comprehensive digital solutions to transform your business with cutting-edge technology and innovative design.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={index} className="max-w-7xl mx-auto">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Service Info */}
                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-primary to-secondary glow-effect">
                          <service.icon className="h-8 w-8 text-background" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Key Features:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <Check className="h-5 w-5 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Technologies:</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-effect">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Pricing Cards */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="grid gap-6">
                        {Object.entries(service.pricing).map(([plan, details], planIndex) => (
                          <div key={planIndex} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/70 smooth-transition">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="text-lg font-semibold capitalize">{plan}</h4>
                                <p className="text-sm text-muted-foreground">{details.duration}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-primary">{details.price}</div>
                                <div className="text-sm text-muted-foreground">starting from</div>
                              </div>
                            </div>
                            <ul className="space-y-2">
                              {details.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-2 text-sm">
                                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="gradient-text">A TECH?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We combine technical excellence with creative innovation to deliver solutions that drive real business results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:bg-card/70 smooth-transition hover:scale-105">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary to-secondary glow-effect mb-6">
                    <item.icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto p-12 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm rounded-2xl border border-border card-shadow">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your <span className="gradient-text">Project?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project requirements and create a custom solution that exceeds your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-effect">
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-card">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
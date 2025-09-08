import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Settings, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Development', 'API Integration'],
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: ['React Native', 'Flutter Development', 'iOS/Android Native', 'App Store Optimization'],
      color: 'from-secondary/20 to-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that enhance user experience and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
    {
      icon: Settings,
      title: 'Custom Systems',
      description: 'Tailored software solutions and enterprise systems to meet your specific needs.',
      features: ['Database Design', 'Cloud Integration', 'API Development', 'DevOps Setup'],
      color: 'from-primary/20 to-accent/10',
      iconColor: 'text-primary',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-card/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive digital solutions 
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`
                p-6 cursor-pointer transition-all duration-300 hover-scale
                ${activeService === index 
                  ? 'border-primary/50 glow-effect' 
                  : 'border-border hover:border-primary/30'
                }
              `}
              onClick={() => setActiveService(index)}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                {(() => {
                  const IconComponent = service.icon;
                  return <IconComponent className={`h-8 w-8 ${service.iconColor}`} />;
                })()}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-center text-sm">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Active Service Details */}
        <Card className="p-8 bg-gradient-to-r from-card to-card/50 border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${services[activeService].color} flex items-center justify-center mr-4`}>
                  {(() => {
                    const IconComponent = services[activeService].icon;
                    return <IconComponent className={`h-10 w-10 ${services[activeService].iconColor}`} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-3xl font-bold gradient-text">
                    {services[activeService].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {services[activeService].description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 group"
                asChild
              >
                <a href="/services">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                {(() => {
                  const IconComponent = services[activeService].icon;
                  return <IconComponent className={`h-24 w-24 ${services[activeService].iconColor} opacity-50`} />;
                })()}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;
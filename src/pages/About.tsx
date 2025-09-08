import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp, 
  Globe, 
  Lightbulb,
  Code,
  Palette,
  Smartphone,
  Shield
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "100+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "8+", label: "Years Experience", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  const timeline = [
    {
      year: "2016",
      title: "A TECH Founded",
      description: "Started as a small team of passionate developers with a vision to create exceptional digital experiences."
    },
    {
      year: "2018",
      title: "First Major Success",
      description: "Delivered our first enterprise-level project, establishing our reputation for quality and innovation."
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our team to include specialized UI/UX designers and mobile app developers."
    },
    {
      year: "2022",
      title: "100 Projects Milestone",
      description: "Celebrated completing over 100 successful projects across various industries."
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description: "Recognized as a leading digital agency, specializing in cutting-edge technologies and modern design."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      speciality: "Full-Stack Development",
      icon: Code,
      description: "8+ years building scalable web applications and leading development teams."
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      speciality: "UI/UX Design",
      icon: Palette,
      description: "Expert in user-centered design with a passion for creating beautiful, functional interfaces."
    },
    {
      name: "Michael Rodriguez",
      role: "Tech Lead",
      speciality: "Mobile Development",
      icon: Smartphone,
      description: "Specialized in cross-platform mobile apps with focus on performance and user experience."
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      speciality: "Strategy & Operations",
      icon: Target,
      description: "Ensures projects are delivered on time and exceed client expectations."
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Every project is approached with enthusiasm and dedication to excellence."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners to achieve shared success."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Creating digital solutions that make a meaningful difference in businesses and lives."
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
                About <span className="gradient-text">A TECH</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in-up max-w-3xl mx-auto">
                We are a passionate team of developers, designers, and digital strategists dedicated to creating exceptional digital experiences that drive business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:bg-card/70 smooth-transition">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-primary to-secondary glow-effect mb-4">
                    <stat.icon className="h-6 w-6 text-background" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary glow-effect">
                    <Target className="h-6 w-6 text-background" />
                  </div>
                  <h2 className="text-3xl font-bold gradient-text">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We believe in the transformative power of technology and design to solve real-world problems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Deliver exceptional digital experiences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Build long-term partnerships with clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Stay at the forefront of technology</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary glow-effect">
                    <Eye className="h-6 w-6 text-background" />
                  </div>
                  <h2 className="text-3xl font-bold gradient-text">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading digital agency recognized for innovation, quality, and exceptional client service. We envision a future where every business has access to world-class digital solutions that help them thrive in the digital age.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Pioneer innovative digital solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Set industry standards for quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Expand our global impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From humble beginnings to industry recognition, here's how A TECH has evolved over the years.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/70 smooth-transition">
                        <Badge variant="outline" className="border-primary/30 text-primary mb-3">
                          {item.year}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-effect"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our diverse team of experts brings together years of experience in development, design, and project management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:bg-card/70 smooth-transition hover:scale-105">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary to-secondary glow-effect mb-6">
                    <member.icon className="h-8 w-8 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <Badge variant="outline" className="border-secondary/30 text-secondary mb-4">
                    {member.speciality}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:bg-card/70 smooth-transition hover:scale-105">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary to-secondary glow-effect mb-6">
                    <value.icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
                Ready to Work <span className="gradient-text">Together?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project and see how A TECH can help bring your digital vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-semibold glow-effect hover:opacity-90 smooth-transition"
                >
                  Start Your Project
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card smooth-transition"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageCircle, Clock, DollarSign, Palette, Code, Smartphone } from 'lucide-react';

const FAQs = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: MessageCircle,
      faqs: [
        {
          question: "What services does A TECH offer?",
          answer: "We specialize in web development, mobile app development, UI/UX design, and custom software systems. Our team creates stunning, functional digital solutions tailored to your business needs."
        },
        {
          question: "How long has A TECH been in business?",
          answer: "A TECH has been delivering cutting-edge digital solutions for over 8 years, helping businesses transform their digital presence with innovative technology."
        },
        {
          question: "What makes A TECH different from other agencies?",
          answer: "We combine creativity with technical expertise, using the latest technologies and design trends. Our focus on user experience, performance optimization, and long-term partnerships sets us apart."
        }
      ]
    },
    {
      title: "Project Process",
      icon: Clock,
      faqs: [
        {
          question: "What's your development process?",
          answer: "We follow a structured 5-phase process: Discovery & Planning, Design & Prototyping, Development & Testing, Launch & Deployment, and Ongoing Support & Maintenance."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, complex web applications 6-12 weeks, and mobile apps 8-16 weeks. We provide detailed timelines during planning."
        },
        {
          question: "Can I track my project's progress?",
          answer: "Absolutely! We provide regular updates, use project management tools for transparency, and schedule weekly check-ins to ensure you're always informed about progress."
        }
      ]
    },
    {
      title: "Pricing & Investment",
      icon: DollarSign,
      faqs: [
        {
          question: "How do you price your services?",
          answer: "We offer flexible pricing models: fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline requirements."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes! We offer flexible payment schedules typically split into milestones: 30% upfront, 40% at midpoint, and 30% upon completion. Custom payment plans are available for larger projects."
        },
        {
          question: "What's included in your pricing?",
          answer: "Our pricing includes design, development, testing, deployment, and 30 days of post-launch support. Additional features like SEO optimization, analytics setup, and training are available."
        }
      ]
    },
    {
      title: "Design & Development",
      icon: Palette,
      faqs: [
        {
          question: "Do you create custom designs?",
          answer: "Yes! Every project gets a custom design tailored to your brand, industry, and target audience. We don't use templates - every design is unique and built from scratch."
        },
        {
          question: "What technologies do you use?",
          answer: "We use modern tech stacks including React, Next.js, Node.js, TypeScript, Python, and cloud platforms like AWS and Vercel. We always choose the best technology for your specific needs."
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: "Absolutely! All our designs are responsive and mobile-first. We ensure your website looks and works perfectly on all devices and screen sizes."
        }
      ]
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
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in-up">
                Find answers to common questions about our services, process, and how we can help transform your digital presence.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary glow-effect">
                      <category.icon className="h-6 w-6 text-background" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold gradient-text">
                      {category.title}
                    </h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl px-6 hover:bg-card/70 smooth-transition"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-20 p-12 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm rounded-2xl border border-border card-shadow">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Still have <span className="gradient-text">questions?</span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our team is here to help! Get in touch with us for personalized answers and to discuss your project needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-semibold glow-effect hover:opacity-90 smooth-transition"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:hello@atech.com"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card smooth-transition"
                >
                  Send Email
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

export default FAQs;
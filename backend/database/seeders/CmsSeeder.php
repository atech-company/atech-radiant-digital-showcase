<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\Project;
use App\Models\Section;
use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class CmsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $home = Page::query()->updateOrCreate(
            ['slug' => 'home'],
            [
                'title' => 'Home',
                'seo_title' => 'Atech Digital Showcase',
                'seo_description' => 'Digital solutions and showcase website.',
                'is_published' => true,
            ]
        );

        Section::query()->updateOrCreate(
            ['page_id' => $home->id, 'key' => 'hero'],
            [
                'name' => 'Hero',
                'position' => 1,
                'is_published' => true,
                'payload' => [
                    'heroHeading1' => 'Build Faster',
                    'heroHeading2' => 'Scale Smarter',
                    'heroSubtitle' => 'A TECH helps startups and growing companies design, build, and launch digital products that convert users and drive measurable business growth.',
                    'heroCtas' => [
                        ['label' => 'Book Discovery Call', 'href' => '/contact'],
                        ['label' => 'Explore Services', 'href' => '/services', 'variant' => 'outline'],
                    ],
                    'serviceIcons' => [
                        ['label' => 'Web Platforms', 'icon' => 'Code'],
                        ['label' => 'Mobile Products', 'icon' => 'Smartphone'],
                        ['label' => 'Product Design', 'icon' => 'Palette'],
                    ],
                ],
            ]
        );

        Section::query()->updateOrCreate(
            ['page_id' => $home->id, 'key' => 'services'],
            [
                'name' => 'Services',
                'position' => 2,
                'is_published' => true,
                'payload' => [
                    'services' => [
                        [
                            'icon' => 'Code',
                            'title' => 'Web Product Engineering',
                            'description' => 'Conversion-focused websites and full web applications designed for speed, SEO, and scalability.',
                            'features' => ['Next.js & React', 'API-first Architecture', 'Performance Optimization', 'Technical SEO'],
                            'colorFrom' => 'primary/20',
                            'colorTo' => 'primary/10',
                        ],
                        [
                            'icon' => 'Smartphone',
                            'title' => 'Mobile App Development',
                            'description' => 'Cross-platform iOS/Android apps with production-ready architecture and polished UX.',
                            'features' => ['React Native', 'App Store Release', 'Push Notifications', 'Realtime Integrations'],
                            'colorFrom' => 'secondary/20',
                            'colorTo' => 'secondary/10',
                        ],
                        [
                            'icon' => 'Palette',
                            'title' => 'UI/UX & Design Systems',
                            'description' => 'User-centered interfaces and reusable design systems that keep products consistent and easy to scale.',
                            'features' => ['User Journeys', 'Wireframes', 'High-Fidelity UI', 'Design Systems'],
                            'colorFrom' => 'accent/20',
                            'colorTo' => 'accent/10',
                        ],
                        [
                            'icon' => 'Settings',
                            'title' => 'Automation & Integrations',
                            'description' => 'Workflow automation, third-party integrations, and internal tools that save team hours every week.',
                            'features' => ['CRM Integrations', 'Email Automation', 'Custom Dashboards', 'API Workflows'],
                            'colorFrom' => 'primary/20',
                            'colorTo' => 'secondary/10',
                        ],
                    ],
                    'aboutSectionTitle' => 'About A TECH',
                    'aboutSectionDescription' => 'A product-driven team combining strategy, UX, and engineering to launch results-oriented digital products.',
                    'aboutStats' => [
                        ['icon' => 'Users', 'label' => 'Long-term Clients', 'value' => '65+'],
                        ['icon' => 'Award', 'label' => 'Projects Shipped', 'value' => '120+'],
                        ['icon' => 'Coffee', 'label' => 'Product Workshops', 'value' => '340+'],
                        ['icon' => 'Clock', 'label' => 'Avg. Response Time', 'value' => '< 24h'],
                    ],
                    'aboutMissionTitle' => 'Our Mission',
                    'aboutMissionText' => 'Deliver digital products that improve operations, increase revenue, and make teams faster.',
                    'projectsSectionTitle' => 'Our Projects',
                    'projectsSectionDescription' => 'A curated portfolio of websites, apps, and platforms built for growth.',
                    'projectsSectionButtonLabel' => 'View All Projects',
                    'testimonialsTitle' => 'What Our Clients Say',
                    'testimonialsDescription' => 'Real feedback from founders and teams we partnered with.',
                    'contactCtaTitleLine1' => 'Ready to Start Your',
                    'contactCtaTitleLine2' => 'Digital Journey?',
                    'contactCtaDescription' => 'Share your idea, timeline, and target outcomes. We will send a clear execution plan.',
                    'contactCtaPrimaryLabel' => 'Get a Free Consultation',
                    'contactCtaSecondaryLabel' => 'View Our Portfolio',
                    'contactPhone' => '76349746',
                    'contactEmail' => 'hello@example.com',
                    'contactWhatsapp' => '76349746',
                ],
            ]
        );

        Project::query()->updateOrCreate(
            ['slug' => 'sample-enterprise-site'],
            [
                'title' => 'Sample Enterprise Site',
                'summary' => 'A sample seeded project to verify frontend API integration.',
                'cover' => null,
                'tags' => ['React', 'Laravel', 'CMS'],
                'body' => 'Initial seeded project body.',
                'position' => 1,
                'is_published' => true,
            ]
        );

        $projectsPage = Page::query()->updateOrCreate(
            ['slug' => 'projects'],
            [
                'title' => 'Projects',
                'seo_title' => 'Projects - Atech Digital',
                'seo_description' => 'Explore Atech Digital portfolio projects.',
                'is_published' => true,
            ]
        );

        Section::query()->updateOrCreate(
            ['page_id' => $projectsPage->id, 'key' => 'content'],
            [
                'name' => 'Projects Content',
                'position' => 1,
                'is_published' => true,
                'payload' => [
                    'heroTitle' => 'Our',
                    'heroAccent' => 'Projects',
                    'heroDescription' => 'Explore our portfolio of successful digital projects and case studies.',
                ],
            ]
        );

        SiteSetting::query()->updateOrCreate(
            ['key' => 'global'],
            [
                'value' => [
                    'siteName' => 'Atech Digital',
                    'contactEmail' => 'hello@atech.local',
                    'phone' => '+20 100 000 0000',
                ],
            ]
        );

        $about = Page::query()->updateOrCreate(
            ['slug' => 'about'],
            [
                'title' => 'About',
                'seo_title' => 'About - Atech Digital',
                'seo_description' => 'Learn more about Atech Digital team and mission.',
                'is_published' => true,
            ]
        );

        Section::query()->updateOrCreate(
            ['page_id' => $about->id, 'key' => 'content'],
            [
                'name' => 'About Content',
                'position' => 1,
                'is_published' => true,
                'payload' => [
                    'heroTitle' => 'About',
                    'heroAccent' => 'A TECH',
                    'heroDescription' => 'We are a multidisciplinary digital studio helping startups and enterprises launch high-impact platforms, products, and user experiences.',
                    'stats' => [
                        ['number' => '120+', 'label' => 'Projects Delivered', 'icon' => 'Award'],
                        ['number' => '65+', 'label' => 'Active Clients', 'icon' => 'Users'],
                        ['number' => '9+', 'label' => 'Years in Industry', 'icon' => 'TrendingUp'],
                        ['number' => '18', 'label' => 'Specialists', 'icon' => 'Shield'],
                    ],
                    'missionTitle' => 'Our Mission',
                    'missionText' => 'To build digital experiences that are fast, accessible, and business-driven while reducing time-to-market for ambitious teams.',
                    'visionTitle' => 'Our Vision',
                    'visionText' => 'To become the trusted digital transformation partner for companies across MENA and global markets.',
                    'timelineTitle' => 'Our Journey',
                    'timelineDescription' => 'From a small freelance collective to a full product agency with repeat global clients.',
                    'timeline' => [
                        ['year' => '2017', 'title' => 'Founded', 'description' => 'Started as a remote-first team focused on modern websites and brand systems.'],
                        ['year' => '2019', 'title' => 'Product Expansion', 'description' => 'Expanded from websites into dashboards, SaaS platforms, and API-driven systems.'],
                        ['year' => '2021', 'title' => 'Enterprise Delivery', 'description' => 'Delivered multi-team enterprise portals with role-based access and analytics layers.'],
                        ['year' => '2023', 'title' => 'Mobile & Growth', 'description' => 'Launched mobile product squads and growth-focused CRO service tracks.'],
                        ['year' => '2026', 'title' => 'AI-Ready Studio', 'description' => 'Integrated AI workflows and automation into customer-facing products.'],
                    ],
                    'teamTitle' => 'Meet Our Team',
                    'teamDescription' => 'A focused team of engineers, designers, and strategists working as one product unit.',
                    'team' => [
                        ['name' => 'Ali Yazbek', 'role' => 'CEO & Product Lead', 'speciality' => 'Product Strategy', 'icon' => 'Target', 'description' => 'Leads product direction, discovery workshops, and delivery governance.'],
                        ['name' => 'Maya Adel', 'role' => 'Design Director', 'speciality' => 'UI/UX Systems', 'icon' => 'Palette', 'description' => 'Design systems specialist with strong accessibility and conversion-first focus.'],
                        ['name' => 'Youssef Kareem', 'role' => 'Engineering Lead', 'speciality' => 'Web Platforms', 'icon' => 'Code', 'description' => 'Builds scalable frontend/backend stacks and technical architecture.'],
                        ['name' => 'Nour Salem', 'role' => 'Mobile Lead', 'speciality' => 'Cross-Platform Apps', 'icon' => 'Smartphone', 'description' => 'Owns React Native delivery and release pipeline quality.'],
                    ],
                    'valuesTitle' => 'Our Values',
                    'valuesDescription' => 'Principles that shape how we work, communicate, and deliver results.',
                    'values' => [
                        ['icon' => 'Lightbulb', 'title' => 'Clarity', 'description' => 'Clear goals, transparent process, and measurable outcomes.'],
                        ['icon' => 'Heart', 'title' => 'Ownership', 'description' => 'We act like product owners, not task executors.'],
                        ['icon' => 'Users', 'title' => 'Collaboration', 'description' => 'We co-create with clients through short, iterative loops.'],
                        ['icon' => 'Globe', 'title' => 'Impact', 'description' => 'Every release should create real user and business value.'],
                    ],
                    'ctaTitle' => 'Ready to Build Together?',
                    'ctaDescription' => 'Tell us your idea, timeline, and goals, and we will propose a delivery roadmap.',
                    'ctaPrimaryLabel' => 'Start Your Project',
                    'ctaSecondaryLabel' => 'See Portfolio',
                ],
            ]
        );

        $services = Page::query()->updateOrCreate(
            ['slug' => 'services'],
            [
                'title' => 'Services',
                'seo_title' => 'Services - Atech Digital',
                'seo_description' => 'Explore our web, mobile, design, and custom system services.',
                'is_published' => true,
            ]
        );

        Section::query()->updateOrCreate(
            ['page_id' => $services->id, 'key' => 'content'],
            [
                'name' => 'Services Content',
                'position' => 1,
                'is_published' => true,
                'payload' => [
                    'heroTitle' => 'Our',
                    'heroAccent' => 'Services',
                    'heroDescription' => 'End-to-end product and growth services, from discovery to design, development, launch, and optimization.',
                    'services' => [
                        [
                            'icon' => 'Code',
                            'title' => 'Web Product Development',
                            'description' => 'Custom web applications, portals, and SaaS platforms built for performance and scale.',
                            'features' => ['Product Discovery', 'Architecture Planning', 'Frontend + Backend Delivery', 'QA + CI/CD'],
                            'technologies' => ['React', 'Next.js', 'Laravel', 'PostgreSQL', 'Redis', 'Docker'],
                            'pricing' => [
                                'starter' => ['price' => '$4,000', 'duration' => '3-4 weeks', 'features' => ['MVP scope', 'Core pages', 'Basic auth', 'Deployment']],
                                'professional' => ['price' => '$12,000', 'duration' => '6-8 weeks', 'features' => ['Advanced modules', 'Admin dashboard', 'API integration', 'Analytics']],
                                'enterprise' => ['price' => '$25,000+', 'duration' => '10-16 weeks', 'features' => ['Complex workflows', 'RBAC', 'Security hardening', 'Scalable infra']],
                            ],
                        ],
                        [
                            'icon' => 'Smartphone',
                            'title' => 'Mobile App Engineering',
                            'description' => 'High-quality iOS/Android apps with unified codebase and production-grade architecture.',
                            'features' => ['UX-first Flows', 'Push Notifications', 'Offline Support', 'Store Submission'],
                            'technologies' => ['React Native', 'Expo', 'Firebase', 'Supabase'],
                            'pricing' => [
                                'starter' => ['price' => '$7,500', 'duration' => '5-7 weeks', 'features' => ['Core screens', 'Auth', 'Basic API', 'Store publish']],
                                'professional' => ['price' => '$18,000', 'duration' => '8-12 weeks', 'features' => ['Complex flows', 'Media uploads', 'Realtime', 'Crash monitoring']],
                                'enterprise' => ['price' => '$35,000+', 'duration' => '14-20 weeks', 'features' => ['Multi-role app', 'Advanced security', 'Scalable backend', 'Maintenance']],
                            ],
                        ],
                        [
                            'icon' => 'Palette',
                            'title' => 'UI/UX & Design Systems',
                            'description' => 'Research-backed interfaces and reusable design systems that improve usability and conversion.',
                            'features' => ['User Interviews', 'Journey Mapping', 'Wireframes', 'High-Fidelity UI'],
                            'technologies' => ['Figma', 'Storybook', 'Miro'],
                            'pricing' => [
                                'starter' => ['price' => '$2,000', 'duration' => '1-2 weeks', 'features' => ['UI refresh', 'Component kit', 'Handoff']],
                                'professional' => ['price' => '$6,500', 'duration' => '3-5 weeks', 'features' => ['UX research', 'Design system', 'Prototype testing']],
                                'enterprise' => ['price' => '$12,000+', 'duration' => '6-10 weeks', 'features' => ['Multi-product system', 'Governance', 'Design QA']],
                            ],
                        ],
                    ],
                    'whyChooseUs' => [
                        ['icon' => 'Zap', 'title' => 'Fast Delivery Cycles', 'description' => 'Lean sprints and clear milestones with weekly demos.'],
                        ['icon' => 'Shield', 'title' => 'Security by Default', 'description' => 'Secure coding standards and environment hardening from day one.'],
                        ['icon' => 'Clock', 'title' => 'Reliable Timelines', 'description' => 'Predictable delivery through structured planning and risk tracking.'],
                        ['icon' => 'Users', 'title' => 'Senior Team Access', 'description' => 'Direct collaboration with senior engineers and designers.'],
                        ['icon' => 'Star', 'title' => 'Quality Assurance', 'description' => 'Automated and manual QA to ensure a stable release.'],
                        ['icon' => 'TrendingUp', 'title' => 'Growth Focus', 'description' => 'Product decisions aligned to measurable business outcomes.'],
                    ],
                ],
            ]
        );

        $faqs = Page::query()->updateOrCreate(
            ['slug' => 'faqs'],
            [
                'title' => 'FAQs',
                'seo_title' => 'FAQs - Atech Digital',
                'seo_description' => 'Frequently asked questions about Atech Digital services and process.',
                'is_published' => true,
            ]
        );

        Section::query()->updateOrCreate(
            ['page_id' => $faqs->id, 'key' => 'content'],
            [
                'name' => 'FAQs Content',
                'position' => 1,
                'is_published' => true,
                'payload' => [
                    'heroTitle' => 'Frequently Asked',
                    'heroAccent' => 'Questions',
                    'heroDescription' => 'Clear answers about our process, pricing, timelines, and what to expect during delivery.',
                    'faqCategories' => [
                        [
                            'title' => 'Getting Started',
                            'icon' => 'MessageCircle',
                            'faqs' => [
                                ['question' => 'How do we start working together?', 'answer' => 'We start with a 30-minute discovery call, then share scope, timeline, and proposal.'],
                                ['question' => 'What do you need from us first?', 'answer' => 'Business goals, target audience, references, and any technical constraints.'],
                                ['question' => 'Can you sign NDA?', 'answer' => 'Yes, we can sign NDA before discussing sensitive product details.'],
                            ],
                        ],
                        [
                            'title' => 'Delivery Process',
                            'icon' => 'Clock',
                            'faqs' => [
                                ['question' => 'How often do you share progress?', 'answer' => 'Weekly demos with updates on scope, timeline, and risks.'],
                                ['question' => 'How do changes in scope work?', 'answer' => 'Changes are estimated and approved before entering sprint planning.'],
                                ['question' => 'Do you provide documentation?', 'answer' => 'Yes, we provide handover docs, setup notes, and API references where applicable.'],
                            ],
                        ],
                        [
                            'title' => 'Pricing & Contracts',
                            'icon' => 'DollarSign',
                            'faqs' => [
                                ['question' => 'Do you charge fixed or hourly?', 'answer' => 'Both models are available depending on scope clarity and product stage.'],
                                ['question' => 'How are payments structured?', 'answer' => 'Usually milestone-based: kickoff, midpoint, final delivery.'],
                                ['question' => 'Do you offer maintenance?', 'answer' => 'Yes, monthly maintenance and support packages are available.'],
                            ],
                        ],
                    ],
                    'ctaTitle' => 'Still need help?',
                    'ctaDescription' => 'Send us your question and we will reply with a tailored recommendation.',
                    'ctaPrimaryLabel' => 'Contact Us',
                    'ctaSecondaryLabel' => 'Send Email',
                ],
            ]
        );

        $contact = Page::query()->updateOrCreate(
            ['slug' => 'contact'],
            [
                'title' => 'Contact',
                'seo_title' => 'Contact - Atech Digital',
                'seo_description' => 'Contact Atech Digital for your next project.',
                'is_published' => true,
            ]
        );

        Section::query()->updateOrCreate(
            ['page_id' => $contact->id, 'key' => 'content'],
            [
                'name' => 'Contact Content',
                'position' => 1,
                'is_published' => true,
                'payload' => [
                    'heroTitle' => 'Contact',
                    'heroAccent' => 'A TECH',
                    'heroDescription' => 'Share your goals, expected timeline, and budget range. We will suggest a practical execution plan.',
                    'formTitle' => 'Let\'s Start a Conversation',
                    'formDescription' => 'Fill in the details and our team will contact you within one business day.',
                    'contactMethods' => [
                        ['title' => 'Email Us', 'value' => 'hello@example.com', 'description' => 'For project and partnership inquiries'],
                        ['title' => 'Call Us', 'value' => '76349746', 'description' => 'Available Sun-Thu, 10am-6pm'],
                        ['title' => 'WhatsApp', 'value' => '76349746', 'description' => 'Quick chat for immediate questions'],
                        ['title' => 'Office', 'value' => 'Cairo, Egypt', 'description' => 'Remote-first with scheduled meetings'],
                    ],
                    'locationTitle' => 'Our Location',
                    'locationName' => 'Cairo, Egypt',
                    'locationLine1' => 'Product-focused digital agency',
                    'locationLine2' => 'Meetings available online and onsite',
                    'whyChooseTitle' => 'Why Teams Choose Us',
                    'whyChooseItems' => [
                        'Senior product-minded engineers and designers',
                        'Fast iteration with weekly release mindset',
                        'Business-first recommendations, not only code',
                        'Transparent communication and clear accountability',
                    ],
                ],
            ]
        );
    }
}

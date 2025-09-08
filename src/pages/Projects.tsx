import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { useProjectsList } from '@/hooks/use-content';

const Projects = () => {
  const { data, isLoading, error } = useProjectsList();
  const projects = data?.projects ?? [];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful digital projects and case studies.
            </p>
          </div>

          {isLoading && <p className="text-center text-muted-foreground">Loading projects...</p>}
          {error && <p className="text-center text-red-500">Failed to load projects.</p>}

          {!isLoading && !error && (
            projects.length === 0 ? (
              <p className="text-center text-muted-foreground">No projects yet. Add some in the CMS.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                  <Card key={p.slug} className="p-6">
                    {p.cover && (
                      <img src={p.cover} alt={p.title} className="w-full h-40 object-cover rounded mb-4" />
                    )}
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{p.summary}</p>
                    {p.tags && p.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs bg-card border border-border rounded px-2 py-1">{t}</span>
                        ))}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
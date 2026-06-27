import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useHomeContent, useProjectsList } from '@/hooks/use-content';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  const { data: home } = useHomeContent();
  const { data, isLoading, error } = useProjectsList();
  const projects = data?.projects ?? [];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || projects.length <= 1) return;

    const interval = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => window.clearInterval(interval);
  }, [api, projects.length]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {String((home as Record<string, unknown>)?.projectsSectionTitle ?? 'Projects')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {String((home as Record<string, unknown>)?.projectsSectionDescription ?? '')}
          </p>
        </div>

        {isLoading && <p className="text-center text-muted-foreground mb-12">Loading projects...</p>}
        {error && <p className="text-center text-red-500 mb-12">Failed to load projects.</p>}

        {!isLoading && !error && (
          projects.length === 0 ? (
            <p className="text-center text-muted-foreground mb-12">No projects published yet.</p>
          ) : (
            <div className="mb-12">
              <Carousel
                setApi={setApi}
                opts={{ align: 'start', loop: true }}
                className="px-10 md:px-14"
              >
                <CarouselContent className="-ml-4">
                  {projects.map((project) => (
                    <CarouselItem
                      key={project.slug}
                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <Link to={`/projects/${project.slug}`} className="block h-full">
                        <Card className="overflow-hidden group cursor-pointer h-full hover-scale transition-all duration-300 hover:border-primary/50">
                          <div className="relative h-48 overflow-hidden">
                            {project.cover ? (
                              <img
                                src={project.cover}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted/40" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground mb-4 line-clamp-3">
                              {project.summary}
                            </p>
                            {project.tags && project.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-xs border-primary/30 text-primary"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 border-primary/30 hover:bg-primary/10" />
                <CarouselNext className="right-0 border-primary/30 hover:bg-primary/10" />
              </Carousel>

              {count > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        'h-2 rounded-full transition-all duration-300',
                        current === index
                          ? 'w-8 bg-primary'
                          : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        )}

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 group"
            asChild
          >
            <Link to="/projects">
              {String((home as Record<string, unknown>)?.projectsSectionButtonLabel ?? 'View All Projects')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

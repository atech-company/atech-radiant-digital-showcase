import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ProjectVisitButtonProps = {
  url?: string;
  className?: string;
  fullWidth?: boolean;
};

const ProjectVisitButton = ({ url, className, fullWidth = false }: ProjectVisitButtonProps) => {
  if (!url?.trim()) return null;

  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        'border-primary/40 text-primary hover:bg-primary/15',
        fullWidth && 'w-full',
        className,
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit Site
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </Button>
  );
};

export default ProjectVisitButton;

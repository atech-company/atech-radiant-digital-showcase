import { useId } from 'react';
import { cn } from '@/lib/utils';

type BrandHeartIconProps = {
  className?: string;
};

const BrandHeartIcon = ({ className }: BrandHeartIconProps) => {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-8 shrink-0', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="16" x2="28" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(215 100% 60%)" />
          <stop offset="1" stopColor="hsl(260 80% 65%)" />
        </linearGradient>
      </defs>
      <path
        d="M16 27.5c-.4 0-.8-.15-1.1-.4C8.2 21.8 3.5 17.6 3.5 12.2 3.5 8.4 6.6 5.5 10.2 5.5c2.2 0 4.2 1.1 5.3 2.8.5.7 1 1.1 1.5 1.1s1-.4 1.5-1.1c1.1-1.7 3.1-2.8 5.3-2.8 3.6 0 6.7 2.9 6.7 6.7 0 5.4-4.7 9.6-11.4 14.9-.3.25-.7.4-1.1.4z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default BrandHeartIcon;

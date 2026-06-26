import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/seo';
import { useSiteBranding } from '@/hooks/use-content';
import BrandHeartIcon from '@/components/BrandHeartIcon';

type SiteLogoProps = {
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  logoClassName?: string;
  showText?: boolean;
};

const SiteLogo = ({
  className,
  textClassName = 'text-2xl font-bold gradient-text',
  iconClassName = 'h-8 w-8 object-contain',
  logoClassName = 'h-8 w-auto object-contain',
  showText = true,
}: SiteLogoProps) => {
  const { data: branding } = useSiteBranding();
  const siteName = branding?.siteName?.trim() || SITE_NAME;
  const logoIcon = branding?.logoIcon;
  const logo = branding?.logo;

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      {logoIcon ? (
        <img src={logoIcon} alt="" className={iconClassName} aria-hidden="true" />
      ) : (
        <BrandHeartIcon className={iconClassName} />
      )}
      {logo ? (
        <img src={logo} alt={siteName} className={logoClassName} />
      ) : showText ? (
        <div className={textClassName}>{siteName}</div>
      ) : null}
    </div>
  );
};

export default SiteLogo;

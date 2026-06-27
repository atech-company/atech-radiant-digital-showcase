import { useEffect, useState, type ReactNode } from 'react';

type DeferredMountProps = {
  children: ReactNode;
  idleTimeoutMs?: number;
};

const DeferredMount = ({ children, idleTimeoutMs = 2500 }: DeferredMountProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mount = () => setMounted(true);

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(mount, { timeout: idleTimeoutMs });
      return () => window.cancelIdleCallback(id);
    }

    const timer = window.setTimeout(mount, idleTimeoutMs);
    return () => window.clearTimeout(timer);
  }, [idleTimeoutMs]);

  return mounted ? children : null;
};

export default DeferredMount;

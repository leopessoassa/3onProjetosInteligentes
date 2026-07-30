import { useState, useEffect } from 'react';

export function useStickyHeader(): boolean {
  // Inicializa com false para compatibilidade SSR — window não existe no servidor
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isSticky;
}

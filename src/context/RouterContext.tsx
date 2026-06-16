import React, { createContext, useContext, useState, useEffect } from 'react';

type Route = 
  | { path: 'home' }
  | { path: 'about' }
  | { path: 'products' }
  | { path: 'product'; id: string }
  | { path: 'contact' }
  | { path: 'cart' };

interface RouterContextType {
  route: Route;
  navigate: (route: Route) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [route, setRoute] = useState<Route>({ path: 'home' });

  // Basic hash router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      
      if (hash.startsWith('product/')) {
        const id = hash.split('/')[1];
        setRoute({ path: 'product', id });
      } else if (['home', 'about', 'products', 'contact', 'cart'].includes(hash)) {
        setRoute({ path: hash as any });
      } else {
        setRoute({ path: 'home' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Init
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newRoute: Route) => {
    if (newRoute.path === 'product') {
      window.location.hash = `product/${newRoute.id}`;
    } else {
      window.location.hash = newRoute.path;
    }
  };

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used within RouterProvider');
  return context;
}

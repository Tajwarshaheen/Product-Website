import React from 'react';
import { CartProvider } from './context/CartContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function AppContent() {
  const { route } = useRouter();

  let CurrentPage;
  switch (route.path) {
    case 'home':
      CurrentPage = <Home />;
      break;
    case 'products':
      CurrentPage = <Products />;
      break;
    case 'product':
      CurrentPage = <ProductDetail id={route.id} />;
      break;
    case 'cart':
      CurrentPage = <Cart />;
      break;
    case 'about':
      CurrentPage = <About />;
      break;
    case 'contact':
      CurrentPage = <Contact />;
      break;
    default:
      CurrentPage = <Home />;
  }

  return <Layout>{CurrentPage}</Layout>;
}

export default function App() {
  return (
    <CartProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </CartProvider>
  );
}


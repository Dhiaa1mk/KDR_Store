import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Toaster } from './components/ui/sonner';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/boutique',
    element: (
      <Layout>
        <Shop />
      </Layout>
    ),
  },
  {
    path: '/produit/:id',
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: '/panier',
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: '/commande',
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
  },
  {
    path: '/connexion',
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: '/inscription',
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: '/a-propos',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: '/admin',
    element: (
      <Layout>
        <Admin />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl mb-4 text-white">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Page non trouvée</p>
            <a href="/" className="bg-primary text-black px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-block">
              Retour à l'accueil
            </a>
          </div>
        </div>
      </Layout>
    ),
  },
]);

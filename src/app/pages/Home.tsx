import { Link } from 'react-router';
import { ArrowRight, TruckIcon, ShieldCheck, Headphones, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { products, testimonials, categories } from '../data/products';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const newProducts = products.filter((p) => p.isNew).slice(0, 4);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white tracking-tight">
              KDR<span className="text-primary">__</span>STORE
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-8 tracking-wider">
              PREMIUM STREETWEAR
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Découvrez notre collection exclusive de vêtements streetwear haut de gamme. Style urbain, qualité premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/boutique">
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 gap-2 text-lg px-8">
                  Découvrir la Collection
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/boutique?filter=new">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                  Nouveautés
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <TruckIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-white mb-2">Livraison Rapide</h3>
              <p className="text-muted-foreground">Livraison dans toute la Tunisie</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-white mb-2">Paiement Sécurisé</h3>
              <p className="text-muted-foreground">Paiement à la livraison (COD)</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-white mb-2">Support 24/7</h3>
              <p className="text-muted-foreground">Service client disponible</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-white">Catégories</h2>
            <p className="text-muted-foreground">Explorez notre collection par catégorie</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.filter(c => c.id !== 'all').map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/boutique?category=${category.id}`}
                  className="block bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <h3 className="text-white group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl mb-2 text-white">Nouveautés</h2>
              <p className="text-muted-foreground">Les derniers arrivages KDR__STORE</p>
            </div>
            <Link to="/boutique?filter=new">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                Voir Tout
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl mb-2 text-white">Best Sellers</h2>
              <p className="text-muted-foreground">Nos produits les plus populaires</p>
            </div>
            <Link to="/boutique?filter=bestsellers">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                Voir Tout
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-white">Ce Que Disent Nos Clients</h2>
            <p className="text-muted-foreground">Des milliers de clients satisfaits</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.comment}</p>
                <p className="text-white">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Instagram className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl mb-4 text-white">@KDR__STORE</h2>
            <p className="text-muted-foreground mb-6">Suivez-nous sur Instagram pour plus de style</p>
            <Button className="bg-primary text-black hover:bg-primary/90">
              Suivre sur Instagram
            </Button>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-secondary rounded-lg overflow-hidden group cursor-pointer"
              >
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-${1490481651871 + i}-ab68de25d43d?w=600&q=80`}
                  alt={`Instagram ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-primary/10 to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Rejoignez la Communauté KDR__STORE
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Profitez d'offres exclusives et soyez les premiers informés des nouvelles collections
            </p>
            <Link to="/inscription">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-lg px-8">
                Créer un Compte
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

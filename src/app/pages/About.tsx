import { Target, Eye, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const values = [
    {
      icon: Award,
      title: 'Qualité Premium',
      description: 'Nous sélectionnons uniquement les meilleurs matériaux pour garantir une qualité exceptionnelle.',
    },
    {
      icon: Target,
      title: 'Style Unique',
      description: 'Nos designs exclusifs reflètent l\'esprit streetwear moderne et audacieux.',
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Une famille de passionnés qui partagent la même vision du style urbain.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              KDR<span className="text-primary">__</span>STORE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Marque tunisienne de streetwear premium, dédiée à ceux qui vivent et respirent la culture urbaine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-white">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  KDR__STORE est né d'une passion pour le streetwear et l'envie de créer une marque qui représente
                  l'authenticité, le style et la qualité. Basée en Tunisie, notre marque s'inspire de la culture
                  urbaine internationale tout en célébrant nos racines locales.
                </p>
                <p>
                  Chaque pièce KDR__STORE est conçue avec une attention particulière aux détails, utilisant des
                  matériaux premium et des finitions métalliques argentées qui sont devenues notre signature. Nous
                  croyons que le streetwear n'est pas seulement une mode, c'est un mode de vie.
                </p>
                <p>
                  Notre mission est de fournir à nos clients des vêtements qui allient confort, style et durabilité,
                  tout en restant accessibles. Nous sommes fiers de servir une communauté grandissante de passionnés
                  de streetwear qui partagent notre vision.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                  alt="KDR Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl mb-4 text-white">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Créer des vêtements streetwear premium qui permettent à chacun d'exprimer son individualité et sa
                passion pour la culture urbaine, tout en offrant une qualité exceptionnelle et un service client
                irréprochable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl mb-4 text-white">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Devenir la référence du streetwear premium en Tunisie et au-delà, en créant une communauté mondiale
                de passionnés qui partagent les mêmes valeurs d'authenticité, de qualité et d'innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-white">Nos Valeurs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chacune de nos décisions et actions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-3 text-white">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '50+', label: 'Produits' },
              { number: '1000+', label: 'Clients Satisfaits' },
              { number: '24/7', label: 'Support Client' },
              { number: '100%', label: 'Qualité Garantie' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl mb-2 text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-white">Rejoignez Notre Communauté</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez notre collection et faites partie de la famille KDR__STORE
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/boutique">
                <button className="bg-primary text-black px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Explorer la Boutique
                </button>
              </a>
              <a href="/contact">
                <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                  Nous Contacter
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

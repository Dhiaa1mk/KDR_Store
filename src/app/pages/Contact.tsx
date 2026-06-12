import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { toast } from 'sonner';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé !', {
      description: 'Nous vous répondrons dans les plus brefs délais.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = 'Bonjour! J\'aimerais avoir plus d\'informations sur KDR__STORE.';
    const url = `https://wa.me/21627985233?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const faqs = [
    {
      question: 'Comment passer une commande ?',
      answer: 'Vous pouvez passer commande directement sur notre site web, via WhatsApp au +216 27 985 233, ou sur Instagram. Ajoutez simplement les produits à votre panier et suivez les étapes de commande.',
    },
    {
      question: 'Quels sont les modes de paiement acceptés ?',
      answer: 'Nous acceptons le paiement à la livraison (COD). Vous payez en espèces lors de la réception de votre commande.',
    },
    {
      question: 'Quel est le délai de livraison ?',
      answer: 'La livraison prend généralement 2-4 jours ouvrables en Tunisie. Nous livrons partout dans le pays.',
    },
    {
      question: 'Les frais de livraison sont-ils gratuits ?',
      answer: 'Oui, la livraison est totalement gratuite partout en Tunisie.',
    },
    {
      question: 'Puis-je échanger ou retourner un produit ?',
      answer: 'Oui, vous avez 14 jours pour retourner ou échanger un produit. Le produit doit être dans son état d\'origine avec toutes les étiquettes.',
    },
    {
      question: 'Comment choisir ma taille ?',
      answer: 'Nous recommandons de consulter notre guide des tailles disponible sur chaque page produit. En cas de doute, contactez-nous sur WhatsApp pour des conseils personnalisés.',
    },
    {
      question: 'Les produits sont-ils authentiques ?',
      answer: 'Absolument ! Tous nos produits KDR__STORE sont 100% authentiques et fabriqués avec des matériaux premium.',
    },
    {
      question: 'Comment suivre ma commande ?',
      answer: 'Après confirmation de votre commande, nous vous contacterons avec un numéro de suivi. Vous pouvez également nous contacter sur WhatsApp pour connaître le statut de votre commande.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-white">Contactez-nous</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.a
            href="tel:+21627985233"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group text-center"
          >
            <Phone className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white mb-2">Téléphone</h3>
            <p className="text-muted-foreground">+216 27 985 233</p>
          </motion.a>

          <motion.button
            onClick={handleWhatsApp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group text-center"
          >
            <MessageCircle className="w-12 h-12 text-[#25D366] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white mb-2">WhatsApp</h3>
            <p className="text-muted-foreground">Chat en direct</p>
          </motion.button>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group text-center"
          >
            <Instagram className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white mb-2">Instagram</h3>
            <p className="text-muted-foreground">@KDR__STORE</p>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl mb-6 text-white">Envoyez-nous un Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-muted-foreground">
                    Nom Complet
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-secondary border-border text-white mt-2"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-muted-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-secondary border-border text-white mt-2"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-muted-foreground">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-secondary border-border text-white mt-2"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-muted-foreground">
                    Sujet
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-secondary border-border text-white mt-2"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-muted-foreground">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-white mt-2"
                    placeholder="Votre message..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 gap-2">
                  <Send className="w-5 h-5" />
                  Envoyer le Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl mb-6 text-white">Informations</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Adresse</h4>
                    <p className="text-muted-foreground">Tunisie</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Téléphone</h4>
                    <p className="text-muted-foreground">+216 27 985 233</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Email</h4>
                    <p className="text-muted-foreground">contact@kdrstore.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-white mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lundi - Samedi</span>
                  <span className="text-white">9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-white">10h - 16h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 text-white text-center">Questions Fréquentes (FAQ)</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-white hover:text-primary text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

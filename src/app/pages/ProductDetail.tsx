import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ShoppingCart, Heart, Share2, ChevronLeft, Check, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ProductCard } from '../components/ProductCard';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Produit non trouvé</h2>
          <Link to="/boutique">
            <Button className="bg-primary text-black">Retour à la boutique</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Veuillez sélectionner une taille');
      return;
    }
    if (!selectedColor) {
      toast.error('Veuillez sélectionner une couleur');
      return;
    }

    addToCart(product, selectedSize, selectedColor, quantity);
    toast.success('Produit ajouté au panier !', {
      description: `${product.name} - Taille: ${selectedSize}, Couleur: ${selectedColor}`,
    });
  };

  const handleWhatsAppOrder = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Veuillez sélectionner une taille et une couleur');
      return;
    }

    const message = `Bonjour! Je suis intéressé par:\n\nProduit: ${product.name}\nTaille: ${selectedSize}\nCouleur: ${selectedColor}\nQuantité: ${quantity}\nPrix: ${product.price * quantity} DT`;
    const url = `https://wa.me/21627985233?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Lien copié dans le presse-papiers');
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link to="/boutique" className="hover:text-primary transition-colors">
            Boutique
          </Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/boutique">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-primary -ml-4">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Retour à la boutique
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && <Badge className="bg-primary text-black">Nouveau</Badge>}
                {product.isBestSeller && <Badge className="bg-white text-black">Best Seller</Badge>}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-secondary rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-transparent hover:border-primary/50'
                  }`}
                >
                  <ImageWithFallback src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl mb-4 text-white">{product.name}</h1>
            <p className="text-3xl text-primary mb-6">{product.price} DT</p>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-6">
              {product.stock > 0 ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-green-500">En stock ({product.stock} disponibles)</span>
                </>
              ) : (
                <span className="text-red-500">Rupture de stock</span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-white mb-3">
                Taille <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-3 rounded border transition-all ${
                      selectedSize === size
                        ? 'bg-primary text-black border-primary'
                        : 'bg-transparent text-muted-foreground border-border hover:border-primary/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-white mb-3">
                Couleur <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 rounded border transition-all ${
                      selectedColor === color
                        ? 'bg-primary text-black border-primary'
                        : 'bg-transparent text-muted-foreground border-border hover:border-primary/50'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-white mb-3">Quantité</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-white hover:text-primary transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 text-white border-x border-border">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 text-white hover:text-primary transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-muted-foreground">
                  Total: {product.price * quantity} DT
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-primary text-black hover:bg-primary/90 gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Ajouter au Panier
              </Button>
              <Button
                onClick={handleWhatsAppOrder}
                disabled={product.stock === 0}
                className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Commander sur WhatsApp
              </Button>
            </div>

            <div className="flex gap-4 mb-8">
              <Button variant="outline" size="icon" className="border-border hover:border-primary">
                <Heart className="w-5 h-5" />
              </Button>
              <Button onClick={handleShare} variant="outline" size="icon" className="border-border hover:border-primary">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Product Details */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Catégorie</span>
                <span className="text-white capitalize">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SKU</span>
                <span className="text-white">KDR-{product.id.padStart(4, '0')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Livraison</span>
                <span className="text-white">Partout en Tunisie</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Paiement</span>
                <span className="text-white">À la livraison (COD)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl mb-8 text-white">Produits Similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

import { Link } from 'react-router';
import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Separator } from '../components/ui/separator';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';
import { useState } from 'react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      toast.info('Code promo non valide', {
        description: 'Ce code promo n\'existe pas ou a expiré.',
      });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-3xl mb-4 text-white">Votre panier est vide</h2>
          <p className="text-muted-foreground mb-8">
            Découvrez notre collection et trouvez votre style
          </p>
          <Link to="/boutique">
            <Button className="bg-primary text-black hover:bg-primary/90">
              Découvrir la Boutique
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl mb-8 text-white">Panier ({cart.length})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="bg-card border border-border rounded-lg p-4 flex gap-4"
              >
                {/* Image */}
                <Link
                  to={`/produit/${item.id}`}
                  className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <Link to={`/produit/${item.id}`}>
                    <h3 className="text-white hover:text-primary transition-colors mb-1 truncate">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-2">
                    Taille: {item.selectedSize} • Couleur: {item.selectedColor}
                  </p>
                  <p className="text-lg text-primary">{item.price} DT</p>
                </div>

                {/* Quantity and Actions */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                    className="text-muted-foreground hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)
                      }
                      className="p-2 text-white hover:text-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-white">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)
                      }
                      className="p-2 text-white hover:text-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="text-white text-xl mb-6">Résumé de la Commande</h2>

              {/* Coupon */}
              <div className="mb-6">
                <label className="block text-sm text-muted-foreground mb-2">Code Promo</label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Entrez votre code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="bg-secondary border-border text-white"
                  />
                  <Button
                    onClick={handleApplyCoupon}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Appliquer
                  </Button>
                </div>
              </div>

              <Separator className="bg-border mb-6" />

              {/* Price Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Sous-total</span>
                  <span>{getCartTotal()} DT</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Livraison</span>
                  <span className="text-green-500">Gratuite</span>
                </div>
                <Separator className="bg-border" />
                <div className="flex justify-between text-white text-xl">
                  <span>Total</span>
                  <span className="text-primary">{getCartTotal()} DT</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link to="/commande" className="block">
                  <Button className="w-full bg-primary text-black hover:bg-primary/90 gap-2">
                    Passer la Commande
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/boutique" className="block">
                  <Button variant="outline" className="w-full border-border hover:border-primary">
                    Continuer mes Achats
                  </Button>
                </Link>
              </div>

              {/* Info */}
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  ✓ Livraison gratuite partout en Tunisie
                  <br />
                  ✓ Paiement à la livraison (COD)
                  <br />
                  ✓ Retour gratuit sous 14 jours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (
    !formData.fullName ||
    !formData.phone ||
    !formData.address ||
    !formData.city
  ) {
    toast.error(
      'Veuillez remplir tous les champs obligatoires'
    );
    return;
  }

  try {
    const response = await fetch(
      'http://127.0.0.1:5000/api/orders',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_name: formData.fullName,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          total_price: getCartTotal(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Erreur serveur');
    }

    toast.success('Commande confirmée !', {
      description:
        'Nous vous contacterons bientôt pour confirmer votre commande.',
    });

    clearCart();

    setTimeout(() => {
      navigate('/');
    }, 2000);

  } catch (error) {
    console.error(error);

    toast.error(
      "Erreur lors de l'envoi de la commande"
    );
  }
};

useEffect(() => {
  if (cart.length === 0) {
    navigate('/panier');
  }
}, [cart, navigate]);

if (cart.length === 0) {
  return null;
}

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl mb-8 text-white">Finaliser la Commande</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-white text-xl mb-6">Informations Client</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="fullName" className="text-muted-foreground">
                      Nom Complet <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="bg-secondary border-border text-white mt-2"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-muted-foreground">
                      Téléphone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-secondary border-border text-white mt-2"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-muted-foreground">
                      Email (optionnel)
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-secondary border-border text-white mt-2"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-white text-xl mb-6">Adresse de Livraison</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address" className="text-muted-foreground">
                      Adresse <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="bg-secondary border-border text-white mt-2"
                      placeholder="Rue, numéro, appartement..."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-muted-foreground">
                        Ville <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="bg-secondary border-border text-white mt-2"
                        placeholder="Tunis, Sousse, Sfax..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode" className="text-muted-foreground">
                        Code Postal (optionnel)
                      </Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="bg-secondary border-border text-white mt-2"
                        placeholder="1000"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="notes" className="text-muted-foreground">
                      Notes (optionnel)
                    </Label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-white mt-2"
                      placeholder="Instructions de livraison, préférences..."
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-white text-xl mb-6">Mode de Paiement</h2>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-black rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Paiement à la Livraison (COD)</h3>
                    <p className="text-sm text-muted-foreground">
                      Payez en espèces lors de la réception de votre commande. Livraison gratuite partout en Tunisie.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-white text-xl mb-6">Votre Commande</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                  {cart.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex gap-3"
                    >
                      <div className="w-16 h-16 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-sm truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {item.selectedSize} • {item.selectedColor}
                        </p>
                        <p className="text-sm text-primary">
                          {item.quantity} × {item.price} DT
                        </p>
                      </div>
                    </div>
                  ))}
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

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90">
                  Confirmer la Commande
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  En passant commande, vous acceptez nos conditions générales de vente
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

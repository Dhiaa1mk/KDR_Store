import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logo from '../../imports/image.png';

export function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    toast.success('Compte créé avec succès !', {
      description: 'Bienvenue dans la famille KDR__STORE',
    });

    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <ImageWithFallback src={logo} alt="KDR__STORE" className="h-16 w-auto mx-auto" />
          </Link>
          <h1 className="text-3xl mb-2 text-white">Créer un Compte</h1>
          <p className="text-muted-foreground">Rejoignez la communauté KDR__STORE</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="fullName" className="text-muted-foreground">
                Nom Complet
              </Label>
              <div className="relative mt-2">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="bg-secondary border-border text-white pl-10"
                  placeholder="Votre nom complet"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-muted-foreground">
                Email
              </Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-secondary border-border text-white pl-10"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-muted-foreground">
                Téléphone
              </Label>
              <div className="relative mt-2">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-secondary border-border text-white pl-10"
                  placeholder="+216 XX XXX XXX"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-muted-foreground">
                Mot de passe
              </Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-secondary border-border text-white pl-10 pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-muted-foreground">
                Confirmer le mot de passe
              </Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="bg-secondary border-border text-white pl-10 pr-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" required className="mt-1 rounded border-border bg-secondary" />
              <span className="text-sm text-muted-foreground">
                J'accepte les{' '}
                <Link to="/contact" className="text-primary hover:underline">
                  conditions générales
                </Link>{' '}
                et la{' '}
                <Link to="/contact" className="text-primary hover:underline">
                  politique de confidentialité
                </Link>
              </span>
            </div>

            <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90">
              Créer mon Compte
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Vous avez déjà un compte ?{' '}
            <Link to="/connexion" className="text-primary hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

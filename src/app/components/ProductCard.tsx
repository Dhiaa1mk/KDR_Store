import { Link } from 'react-router';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../data/products';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
    >
      {/* Image */}
      <Link to={`/produit/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-secondary">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-primary text-black">Nouveau</Badge>
          )}
          {product.isBestSeller && (
            <Badge className="bg-white text-black">Best Seller</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Link to={`/produit/${product.id}`}>
            <Button size="sm" variant="secondary" className="gap-2">
              <Eye className="w-4 h-4" />
              Voir
            </Button>
          </Link>
          <Link to={`/produit/${product.id}`}>
            <Button size="sm" className="bg-primary text-black hover:bg-primary/90 gap-2">
              <ShoppingCart className="w-4 h-4" />
              Ajouter
            </Button>
          </Link>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link to={`/produit/${product.id}`}>
          <h3 className="text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2 capitalize">{product.category}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg text-primary">{product.price} DT</p>
          {product.stock > 0 ? (
            <p className="text-xs text-green-500">En stock ({product.stock})</p>
          ) : (
            <p className="text-xs text-red-500">Rupture</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

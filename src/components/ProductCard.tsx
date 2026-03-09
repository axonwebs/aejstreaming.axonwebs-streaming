import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addItem, items } = useCart();
  const isInCart = items.some((i) => i.product.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative rounded-2xl border border-primary/10 bg-card overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Tag badges */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          {product.tag && (
            <span className="px-3 py-1 text-[10px] font-body font-bold rounded-full bg-primary text-primary-foreground uppercase tracking-wider">
              {product.tag}
            </span>
          )}
          <span className="px-3 py-1 text-[10px] font-body font-bold rounded-full bg-surface border border-primary/20 text-primary uppercase tracking-wider">
            100% Original
          </span>
        </div>

        {/* Icon area with gradient */}
        <div className={`relative h-40 flex items-center justify-center bg-gradient-to-br ${product.color} overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10" />
          {/* Decorative corner lines */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 m-2" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 m-2" />
          <span className="relative text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{product.icon}</span>
          
          {/* Duration badge at bottom */}
          {product.duration && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="text-xs font-body font-bold text-primary uppercase tracking-wider">{product.duration}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 bg-gradient-to-b from-card to-background/50">
          <p className="text-[10px] font-body text-primary/60 uppercase tracking-[0.2em] mb-1">
            {product.category}
          </p>
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">
            {product.name}
          </h3>
          {product.duration && (
            <p className="text-xs font-body text-muted-foreground mb-3">
              Renovable ✨
            </p>
          )}
          <div className="flex items-end justify-between mt-auto pt-3 border-t border-primary/10">
            <span className="text-2xl font-display font-bold text-gradient-gold">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={() => addItem(product)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-body text-sm font-semibold transition-all duration-300
                ${isInCart 
                  ? "bg-primary/20 text-primary border border-primary/30" 
                  : "bg-gradient-to-r from-primary to-gold-light text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                }`}
            >
              {isInCart ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {isInCart ? "Agregado" : "Agregar"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

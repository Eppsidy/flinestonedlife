
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  thc?: string;
  cbd?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'weed':
        return 'bg-green-600 border-green-800';
      case 'vapes':
        return 'bg-purple-600 border-purple-800';
      case 'edibles':
        return 'bg-orange-600 border-orange-800';
      default:
        return 'bg-stone-600 border-stone-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'weed':
        return '';
      case 'vapes':
        return '';
      case 'edibles':
        return '';
      default:
        return '';
    }
  };

  return (
    <div 
      className="rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-8 border-stone-600"
      style={{
        background: 'linear-gradient(145deg, #d6d3d1, #a8a29e)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cg fill-opacity='0.1'%3E%3Cpath fill='%23000' d='M15 15c0-4.14-3.36-7.5-7.5-7.5S0 10.86 0 15s3.36 7.5 7.5 7.5S15 19.14 15 15zm7.5 0c0-4.14-3.36-7.5-7.5-7.5S7.5 10.86 7.5 15s3.36 7.5 7.5 7.5S22.5 19.14 22.5 15z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-64 object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Stone Category Badge */}
        <div 
          className={`absolute top-4 left-4 ${getCategoryColor(product.category)} text-white px-3 py-2 rounded-full text-sm font-bold border-4 shadow-lg`}
          style={{ fontFamily: 'Creepster, cursive' }}
        >
          {getCategoryIcon(product.category)} {product.category}
        </div>
        
        {/* Stone THC/CBD Info */}
        {(product.thc || product.cbd) && (
          <div 
            className="absolute top-4 right-4 text-white px-3 py-2 rounded-lg text-xs border-4 border-stone-800 shadow-lg"
            style={{
              background: 'linear-gradient(45deg, #44403c, #292524)',
              fontFamily: 'Creepster, cursive'
            }}
          >
            {product.thc && <div>THC: {product.thc}</div>}
            {product.cbd && <div>CBD: {product.cbd}</div>}
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="text-white px-6 py-3 rounded-full font-bold animate-fade-in border-4 border-stone-600 shadow-xl"
              style={{
                background: 'linear-gradient(45deg, #000000, #1a1a1a)',
                fontFamily: 'Wulf Utility W00 Regular, cursive'
              }}
            >
              Yabba Dabba View! 👀
            </div>
          </div>
        )}
      </div>
      
      <div 
        className="p-6"
        style={{
          background: 'linear-gradient(180deg, #f5f5f4, #e7e5e4)'
        }}
      >
        <h3 
          className="text-xl font-bold text-stone-800 mb-2"
          style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
        >
          {product.name}
        </h3>
        <p className="text-stone-600 mb-4 text-sm">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span 
            className="text-2xl font-black text-black"
            style={{ fontFamily: 'Wulf Utility W00 Regular , cursive' }}
          >
            R{product.price} 
          </span>
          <button 
            onClick={() => onAddToCart(product)}
            className="text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg border-4 border-stone-600"
            style={{
              background: 'linear-gradient(5deg, #000000, #1a1a1a)',
              fontFamily: 'Wulf Utility W00 Regular, cursive'
            }}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

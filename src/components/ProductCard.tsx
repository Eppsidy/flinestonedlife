
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
      case 'flower':
        return 'bg-green-500';
      case 'vapes':
        return 'bg-purple-500';
      case 'edibles':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-green-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-64 object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 ${getCategoryColor(product.category)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
          {product.category}
        </div>
        
        {/* THC/CBD Info */}
        {(product.thc || product.cbd) && (
          <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
            {product.thc && <div>THC: {product.thc}</div>}
            {product.cbd && <div>CBD: {product.cbd}</div>}
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold animate-fade-in">
              View Details! 👀
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 bg-gradient-to-b from-white to-green-50">
        <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-green-600">
            ${product.price}
          </span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg border-2 border-green-400"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

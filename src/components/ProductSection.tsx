
import React from 'react';
import ProductCard from './ProductCard';

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

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ onAddToCart }) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Purple Haze",
      price: 45.00,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "A legendary sativa strain with sweet berry aroma and euphoric effects. Perfect for creative endeavors and social activities.",
      category: "Flower",
      thc: "18-22%",
      cbd: "<1%"
    },
    {
      id: 2,
      name: "OG Kush Vape Cart",
      price: 65.00,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      description: "Premium distillate vape cartridge with classic OG Kush flavor profile. Smooth hits with potent effects.",
      category: "Vapes",
      thc: "85-90%"
    },
    {
      id: 3,
      name: "Blue Dream",
      price: 50.00,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
      description: "Balanced hybrid strain offering relaxation without heavy sedation. Sweet blueberry taste with gentle cerebral invigoration.",
      category: "Flower",
      thc: "17-24%",
      cbd: "1-2%"
    },
    {
      id: 4,
      name: "Delta-9 Gummies",
      price: 35.00,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      description: "Delicious fruit-flavored gummies with precise 10mg THC dosing. Perfect for controlled, long-lasting effects.",
      category: "Edibles",
      thc: "10mg per piece"
    },
    {
      id: 5,
      name: "Wedding Cake",
      price: 55.00,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "Indica-dominant hybrid with sweet vanilla flavor. Relaxing effects perfect for evening use and stress relief.",
      category: "Flower",
      thc: "20-25%",
      cbd: "<1%"
    },
    {
      id: 6,
      name: "Live Resin Vape",
      price: 75.00,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      description: "Premium live resin vape cartridge preserving full terpene profile. Rich flavor and potent effects.",
      category: "Vapes",
      thc: "80-85%"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-green-800 mb-6">
            🌿 PREMIUM CANNABIS DISPENSARY 🌿
          </h2>
          
          {/* Product Description */}
          <div className="bg-green-100 rounded-2xl p-8 mb-8 border-4 border-green-600 shadow-xl">
            <h3 className="text-3xl font-bold text-green-800 mb-4">🍃 Premium Quality Cannabis Products 🍃</h3>
            <p className="text-lg text-green-700 max-w-4xl mx-auto leading-relaxed">
              Discover our carefully curated selection of premium cannabis products. From top-shelf flower strains 
              to cutting-edge vape cartridges and precisely dosed edibles, we offer only the finest quality products 
              from trusted cultivators and manufacturers. Each product is lab-tested for potency and purity, 
              ensuring a safe and consistent experience. Whether you're seeking relaxation, creativity, or relief, 
              our knowledgeable staff can help you find the perfect product for your needs.
            </p>
          </div>

          <p className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed">
            Explore our premium selection of flower, concentrates, edibles, and accessories. 
            All products are lab-tested and sourced from licensed, reputable growers and manufacturers.
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center mt-8 space-x-8">
            <div className="text-4xl animate-bounce">🌿</div>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>💨</div>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🍯</div>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-6 rounded-2xl mb-12 shadow-xl border-4 border-green-400">
          <h3 className="text-2xl font-bold mb-2">🚚 FREE DELIVERY OVER $75! 🚚</h3>
          <p className="text-lg">Fast, discreet delivery to your door!</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* About Our Products Section */}
        <div className="mt-20 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-8 rounded-2xl shadow-2xl border-4 border-green-400">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-6">🧪 Lab-Tested Quality Assurance 🧪</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-4 leading-relaxed">
                Every product in our dispensary undergoes rigorous <strong>third-party lab testing</strong> 
                to ensure safety, potency, and consistency. We partner with licensed cultivators and 
                manufacturers who share our commitment to quality and transparency.
              </p>
              <p className="text-lg mb-4">
                Our <strong>flower strains</strong> are carefully selected for their unique terpene profiles and effects, 
                our <strong>vape cartridges</strong> use premium distillate and live resin, and our 
                <strong>edibles</strong> are precisely dosed for reliable experiences every time.
              </p>
              <p className="text-lg font-semibold">
                Whether you're a seasoned enthusiast or new to cannabis, our knowledgeable staff 
                is here to guide you to the perfect product for your lifestyle and needs! 🌱✨
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-green-800 text-white p-8 rounded-2xl shadow-2xl border-4 border-green-500">
            <h3 className="text-3xl font-bold mb-4">Need product recommendations?</h3>
            <p className="text-xl mb-6">Our cannabis consultants are here to help!</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Contact Us! 📞
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

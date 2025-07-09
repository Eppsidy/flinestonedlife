
import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import Silk from './Silk';

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
  searchTerm: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ onAddToCart, searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: Product[] = [
    {
      id: 1,
      name: "Bedrock Blaze",
      price: 45.00,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "A legendary prehistoric strain with sweet berry aroma and euphoric stone age effects. Perfect for mammoth hunting adventures!",
      category: "Weed",
      thc: "18-22%",
      cbd: "<1%"
    },
    {
      id: 2,
      name: "Dino Dab Cart",
      price: 65.00,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      description: "Premium distillate vape cartridge with classic caveman flavor profile. Smooth hits that'll make you roar like a T-Rex!",
      category: "Vapes",
      thc: "85-90%"
    },
    {
      id: 3,
      name: "Wilma's Wild Weed",
      price: 50.00,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
      description: "Balanced hybrid strain offering relaxation without heavy sedation. Sweet blueberry taste that even Pebbles would love!",
      category: "Weed",
      thc: "17-24%",
      cbd: "1-2%"
    },
    {
      id: 4,
      name: "Yabba Dabba Gummies",
      price: 35.00,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      description: "Delicious fruit-flavored gummies with precise 10mg THC dosing. Perfect for controlled, long-lasting stone age sessions.",
      category: "Edibles",
      thc: "10mg per piece"
    },
    {
      id: 5,
      name: "Fred's Fire Flower",
      price: 55.00,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "Indica-dominant hybrid with sweet vanilla flavor. Relaxing effects perfect for evening cave dwelling and stress relief.",
      category: "Weed",
      thc: "20-25%",
      cbd: "<1%"
    },
    {
      id: 6,
      name: "Brontosaurus Breath Vape",
      price: 75.00,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      description: "Premium live resin vape cartridge preserving full terpene profile. Rich flavor that's older than the stone age!",
      category: "Vapes",
      thc: "80-85%"
    },
    {
      id: 7,
      name: "Mammoth Munchie Brownies",
      price: 40.00,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      description: "Rich chocolate brownies infused with premium cannabis. Each brownie contains 25mg THC for a mammoth-sized experience.",
      category: "Edibles",
      thc: "25mg per piece"
    },
    {
      id: 8,
      name: "Pterodactyl Purple",
      price: 48.00,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
      description: "Energizing sativa strain perfect for daytime adventures. Citrusy flavor with uplifting effects that'll make you soar!",
      category: "Weed",
      thc: "16-20%",
      cbd: "<1%"
    }
  ];

  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
<section 
      id="shop" 
      className="py-20 relative"
    >
      {/* Silk Background */}
      <div className="absolute inset-0">
        <Silk
          speed={2}
          scale={1.5}
          color="#0080000"
          noiseIntensity={0.8}
          rotation={0.2}
        />
      </div>
      {/* Stone Age Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.05-8.95-20-20-20s-20 8.95-20 20 8.95 20 20 20 20-8.95 20-20zm20 0c0-11.05-8.95-20-20-20s-20 8.95-20 20 8.95 20 20 20 20-8.95 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Stone Slab Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl"
            style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
          >
            Flintstoner
          </h2>
          
          <div 
            className="rounded-2xl p-8 mb-8 border-8 border-stone-600 shadow-2xl"
            style={{
              background: 'linear-gradient(145deg, #d6d3d1, #a8a29e)',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-opacity='0.1'%3E%3Cpath fill='%23000' d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          >
            <h3 
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
            >
               Premium Stone Age Cannabis
            </h3>
            <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed">
              Welcome to The Flintstoned finest dispensary! Our prehistoric cannabis products are sourced from the 
              most ancient strains, cultivated in mammoth dung and blessed by the great Gazoo himself. 
              Each product is cave-tested for potency and approved by Fred Flintstone's smoking circle.
            </p>
          </div>

          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8">
            Yabba Dabba Doo your way through our selection of flower, vapes, and edibles. 
            All products are dino-tested and sourced from licensed Flintstoned growers!
          </p>
          
          {/* Decorative Stone Age Elements */}
          <div className="flex justify-center items-center space-x-8">
            <div className="h-2 w-20  bg-stone-700 rounded-full"></div>
            
          </div>
        </div>

        {/* Stone Age Category Filter */}
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Search Results Info */}
        {(searchTerm || selectedCategory !== 'All') && (
          <div className="text-center mb-8">
            <p 
              className="text-lg text-white font-bold"
              style={{ fontFamily: 'Wulf Utility W00 Regular , cursive' }}
            >
              {searchTerm && `Cave search results for "${searchTerm}"`}
              {searchTerm && selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {!searchTerm && selectedCategory !== 'All' && `Showing ${selectedCategory} products`}
              {` (${filteredProducts.length} prehistoric products found) `}
            </p>
          </div>
        )}

        {/* Bedrock Deals Banner */}
        <div 
          className="text-white text-center py-6 rounded-2xl mb-12 shadow-2xl border-8 border-stone-600"
          style={{
            background: 'linear-gradient(45deg, #000000, #1a1a1a)',
            fontFamily: 'Creepster, cursive'
          }}
        >
          <h3 className="text-2xl font-bold mb-2">FREE DELIVERIES FOR ORDERS OVER R200!</h3>
          <p className="text-lg">Fast pterodactyl delivery to your cave!</p>
        </div>

        {/* Stone Tablet Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 
              className="text-2xl font-bold text-stone-800 mb-2"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              No products found in this cave
            </h3>
            <p className="text-stone-600">Try adjusting your stone age search or filter criteria 🦴</p>
          </div>
        )}

        {/* Stone Age Quality Assurance */}
        <div 
          className="mt-20 text-white p-8 rounded-2xl shadow-2xl border-8 border-stone-600"
          style={{
            background: 'linear-gradient(135deg, #78716c, #57534e)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg fill-opacity='0.1'%3E%3Cpath fill='%23000' d='M25 25c0-6.9-5.6-12.5-12.5-12.5S0 18.1 0 25s5.6 12.5 12.5 12.5S25 31.9 25 25z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          <div className="text-center">
            <h3 
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
            >
              Cave-Tested Quality Assurance
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-4 leading-relaxed">
                Every product in our Stone Age dispensary undergoes rigorous <strong>mammoth-powered lab testing </strong> 
                to ensure safety, potency, and that special Flintsoned quality. We partner with licensed cave cultivators 
                who share our commitment to prehistoric excellence and dinosaur-approved transparency.
              </p>
              <p 
                className="text-lg font-semibold"
                style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
              >
                Whether you're a seasoned cave dweller or new to stone age cannabis, 
                our Flintstone-trained staff is here to guide you! Yabba Dabba Doooo! 🦴✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

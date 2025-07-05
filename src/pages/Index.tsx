
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';
import SearchModal from '../components/SearchModal';

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

const Index = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
    console.log('Added to cart:', product);
    
    // Show a notification
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div class="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-fade-in">
        🛒 ${product.name} added to cart! 
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Header 
        cartCount={cartItems.length} 
        onSearchToggle={() => setIsSearchOpen(true)}
      />
      
      <main>
        <Hero />
        <ProductsSection onAddToCart={addToCart} />
        <TestimonialSlider />
      </main>
      
      <Footer />

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 z-40 border-4 border-green-400"
        >
          <div className="text-2xl">🚀</div>
        </button>
      )}

      {/* Floating Cannabis Leaf */}
      <div className="fixed bottom-8 left-8 text-6xl animate-bounce z-30 pointer-events-none">
        🌿
      </div>
    </div>
  );
};

export default Index;

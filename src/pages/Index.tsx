import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';


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

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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
    console.log('Adding product to cart:', product);
    setCartItems(prev => {
      console.log('Current cart items:', prev);
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        const updatedItems = prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log('Updated cart (existing item):', updatedItems);
        return updatedItems;
      } else {
        const newItems = [...prev, { ...product, quantity: 1 }];
        console.log('Updated cart (new item):', newItems);
        return newItems;
      }
    });

    // Prehistoric notification
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div class="fixed top-20 right-4 bg-sone-600 text-white px-6 py-4 rounded-full shadow-2xl z-50 animate-fade-in border-4 border-stone-600" style="background: linear-gradient(45deg, #000000, #1a1a1a); font-family: 'Wulf Utility W00 Regular', cursive;">
        🦴 ${product.name} added to your stone cart! 🦕
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{
      background: 'linear-gradient(180deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #92400e 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Prehistoric Background Pattern */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23000'%3E%3Cpath d='M20 20c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm40 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 40c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Floating Dino Footprints */}
      <div className="fixed top-20 left-10 text-6xl animate-pulse z-10 pointer-events-none opacity-30">
        🦕
      </div>
      <div className="fixed top-40 right-20 text-4xl animate-bounce z-10 pointer-events-none opacity-40" style={{ animationDelay: '1s' }}>
        🦴
      </div>
      <div className="fixed bottom-40 left-20 text-5xl animate-pulse z-10 pointer-events-none opacity-25" style={{ animationDelay: '2s' }}>
        🌿
      </div>

      <Header 
        cartCount={getTotalItems()} 
        onCartToggle={() => setIsCartOpen(true)}
        onSearch={handleSearch}
      />
      
      <main className="relative z-10">
        <Hero />
        <ProductsSection onAddToCart={addToCart} searchTerm={searchTerm} />
        <TestimonialSlider />
      </main>
      
      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />

      {/* Stone Age Scroll to Top Button */}
{showScrollTop && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-8 right-8 p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 z-40 border-4 border-stone-600"
    style={{
      backgroundImage: `url("/assets/scroollup.jpg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '60px',
      height: '60px'
    }}
    aria-label="Scroll to top"
  >
  </button>
)}



      {/* Floating Stone Wheel */}
      <div className="fixed bottom-8 left-8 z-30 pointer-events-none animate-spin" style={{ animationDuration: '10s' }}>
  <img
    src="/assets/Fred_Flintstone.png"
    alt="Spinning rock"
    className="w-16 h-auto"
  />
</div>
    </div>
  );
};

export default Index;

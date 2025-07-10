
import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import SearchBar from './SearchBar';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
  onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartToggle, onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const connectWhatsApp = () => {
    const phoneNumber = "+27693028863";
    const message = encodeURIComponent("Yabba Dabba Doooo! I'm interested in your prehistoric cannabis products from Flintstoned!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header 
      className="shadow-2xl border-b-8 border-stone-600 relative overflow-hidden sticky top-0 z-40"
      style={{
        background: 'linear-gradient(135deg, #78716c 0%, #57534e 50%, #44403c 100%)',
        backgroundImage: `url("assets/Headerbg.webp")`,
      }}
    >
      {/* Stone texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-repeat" style={{
        backgroundImage: `url("assets/Headerbg.jpg")`,
      }}></div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Stone Slab Logo */}
          <div className="flex items-center">
            <h1 
              className="text-2xl md:text-3xl font-bold text-orange-200 drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
            >
              <span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                Flintstoned Life
              </span>
            </h1>
          </div>

          {/* Stone Age Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-1 bg-stone-600 rounded-full"></div>
              <a 
                href="#home" 
                className="text-green-600 hover:text-orange-100 font-bold transition-colors duration-300 text-lg tracking-wide"
                style={{ fontFamily: 'Creepster, cursive' }}
              >
                CAVE
              </a>
              <div className="text-green-600">🦴</div>
              <a 
                href="#shop" 
                className="text-green-600 hover:text-orange-100 font-bold transition-colors duration-300 text-lg tracking-wide"
                style={{ fontFamily: 'Creepster, cursive' }}
              >
                SHOP
              </a>
              <div className="text-green-600">🦴</div>
              <a 
                href="#about" 
                className="text-green-600 hover:text-orange-100 font-bold transition-colors duration-300 text-lg tracking-wide"
                style={{ fontFamily: 'Creepster, cursive' }}
              >
                TRIBE
              </a>
              <div className="w-8 h-1 bg-stone-600 rounded-full"></div>
            </div>
            
            <button 
              onClick={connectWhatsApp}
              className="text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 border-4 border-stone-600 shadow-xl"
              style={{
                background: 'linear-gradient(45deg, #000000, #1a1a1a)',
                fontFamily: '45deg, #000000, #1a1a1a, cursive'
              }}
            >
              💬 CONNECT
            </button>
          </nav>

          {/* Stone Tools (Search and Cart) 
          <div className="flex items-center space-x-4">
            <SearchBar onSearch={onSearch} />
            */}
            <button 
              onClick={onCartToggle}
              className="text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 relative border-4 border-stone-600"
              style={{
                background: 'linear-gradient(45deg, #000000, #1a1a1a)'
              }}
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse border-2 border-stone-600"
                  style={{
                    background: 'linear-gradient(45deg, #dc2626, #991b1b)',
                    fontFamily: 'Creepster, cursive'
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button> 

            {/* Mobile Stone Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-3 rounded-full shadow-lg transition-all duration-300 border-4 border-stone-600"
              style={{
                background: 'linear-gradient(45deg, #000000, #1a1a1a)'
              }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Stone Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden mt-4 rounded-lg p-4 shadow-xl animate-fade-in border-4 border-stone-600"
            style={{
              background: 'linear-gradient(45deg, #78716c, #57534e)'
            }}
          >
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-orange-200 hover:text-orange-100 font-bold transition-colors duration-300 text-lg"
                style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
              >
                🏠 CAVE
              </a>
              <a 
                href="#shop" 
                className="text-orange-200 hover:text-orange-100 font-bold transition-colors duration-300 text-lg"
                style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
              >
                🛒 SHOP
              </a>
              <a 
                href="#about" 
                className="text-orange-200 hover:text-orange-100 font-bold transition-colors duration-300 text-lg"
                style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
              >
                👥 TRIBE
              </a>
              <button 
                onClick={connectWhatsApp}
                className="text-white font-bold py-2 px-4 rounded-full transition-all duration-300 text-left border-4 border-stone-600"
                style={{
                  background: 'linear-gradient(45deg, #000000, #1a1a1a)',
                  fontFamily: 'Wulf Utility W00 Regular, cursive, cursive'
                }}
              >
                💬 Connect with Tribe
              </button>
            </nav>
          </div>
        )}
      
    </header>
  );
};

export default Header;

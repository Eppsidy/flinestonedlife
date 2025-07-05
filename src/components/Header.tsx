
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onSearchToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onSearchToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-800 via-emerald-700 to-green-900 shadow-2xl border-b-4 border-green-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23000' points='36,1 14,1 6,14 6,27 14,40 36,40 44,27 44,14'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-green-200 drop-shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                🌿 GREEN LEAF DISPENSARY
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-green-200 hover:text-green-100 font-semibold transition-colors duration-300 text-lg tracking-wide">
              HOME
            </a>
            <a href="#shop" className="text-green-200 hover:text-green-100 font-semibold transition-colors duration-300 text-lg tracking-wide">
              SHOP
            </a>
            <a href="#about" className="text-green-200 hover:text-green-100 font-semibold transition-colors duration-300 text-lg tracking-wide">
              ABOUT
            </a>
            <a href="#contact" className="text-green-200 hover:text-green-100 font-semibold transition-colors duration-300 text-lg tracking-wide">
              CONTACT
            </a>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onSearchToggle}
              className="bg-green-700 hover:bg-green-600 text-green-200 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <Search size={20} />
            </button>
            
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden bg-green-700 hover:bg-green-600 text-green-200 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-green-800 rounded-lg p-4 shadow-xl animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-green-200 hover:text-green-100 font-semibold transition-colors duration-300 text-lg">
                HOME
              </a>
              <a href="#shop" className="text-green-200 hover:text-green-100 font-semibold transition-colors duration-300 text-lg">
                SHOP
              </a>
              <a href="#about" className="text-green-200 hover:text-green-100 font-semibold transition-colors duration-300 text-lg">
                ABOUT
              </a>
              <a href="#contact" className="text-green-200 hover:text-green-100 font-semibold transition-colors duration-300 text-lg">
                CONTACT
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

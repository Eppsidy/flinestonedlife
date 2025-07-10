
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-stone-800 to-stone-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Newsletter Signup 
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 mb-12 text-center shadow-2xl border-4 border-yellow-400">
          <h3 className="text-3xl font-bold mb-4">📜 Join Our Stone-Age Newsletter! 📜</h3>
          <p className="text-xl mb-6">Get the latest deals delivered by pterodactyl mail!</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your cave address..."
              className="flex-1 px-4 py-3 rounded-full text-stone-800 font-semibold"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-stone-800 font-bold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              Subscribe! 🦴
            </button>
          </div>
        </div>
        */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-4"> FLINTSTONED LIFE</h3>
            <p className="text-stone-300 mb-4 leading-relaxed">
              Flintstoned premier marketplace for all your Stone Age needs. From prehistoric tech to cave fashion!
            </p>
            <div className="flex space-x-4">
              <div className="text-2xl hover:scale-110 transition-transform cursor-pointer">📱</div>
              <div className="text-2xl hover:scale-110 transition-transform cursor-pointer">📧</div>
              <div className="text-2xl hover:scale-110 transition-transform cursor-pointer">🌐</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-yellow-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-stone-300 hover:text-yellow-300 transition-colors">Home</a></li>
              <li><a href="#shop" className="text-stone-300 hover:text-yellow-300 transition-colors">Shop</a></li>
              <li><a href="#about" className="text-stone-300 hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-stone-300 hover:text-yellow-300 transition-colors">Contact</a></li>
              <li><a href="#faq" className="text-stone-300 hover:text-yellow-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-bold text-yellow-300 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#tech" className="text-stone-300 hover:text-yellow-300 transition-colors">Stone Age Tech</a></li>
              <li><a href="#fashion" className="text-stone-300 hover:text-yellow-300 transition-colors">Cave Fashion</a></li>
              <li><a href="#tools" className="text-stone-300 hover:text-yellow-300 transition-colors">Prehistoric Tools</a></li>
              <li><a href="#home-decor" className="text-stone-300 hover:text-yellow-300 transition-colors">Cave Decor</a></li>
              <li><a href="#food" className="text-stone-300 hover:text-yellow-300 transition-colors">Dino Delicacies</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-yellow-300 mb-4">Contact Info</h4>
            <div className="space-y-3 text-stone-300">
              <div className="flex items-center">
                <span className="mr-2">🏠</span>
                <span>123 Ave, Stone County</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span>Flintstone</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <span>hello@flintstonedlife.rock</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">⏰</span>
                <span>Sunrise to Sunset Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 Eppsidy. All rights reserved in the Stone Age.
            </p>
            <div className="flex space-x-6 text-stone-400">
              <a href="#privacy" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
              <a href="#shipping" className="hover:text-yellow-300 transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>

        {/* Fun Element */}
        <div className="text-center mt-8">
          <div className="inline-block animate-bounce">
            <span className="text-4xl"></span>
            <span className="text-2xl text-yellow-300 font-bold ml-2">Powered by Eppsidy</span>
            <span className="text-4xl ml-2"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Premium Quality!", "Lab Tested!", "Trusted Source!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
<section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-white">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Floating Elements 
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🌿</div>
        <div className="absolute top-40 right-20 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>💨</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-bounce" style={{ animationDelay: '2s' }}>🍯</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>🌱</div>
      </div>*/}

      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Animated Text */}
          <div className="mb-8">
            <h2 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-4 animate-fade-in">
              {texts[currentText]}
            </h2>
            <p className="text-xl md:text-2xl text-green-100 font-semibold max-w-2xl mx-auto leading-relaxed">
              Welcome to the premier cannabis dispensary experience! 
              <br />
              <span className="text-green-200">Discover premium flower, concentrates, and edibles from trusted growers.</span>
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={scrollToShop}
            className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-green-300 hover:border-green-200"
          >
             SHOP PREMIUM CANNABIS 
          </button>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="text-white text-4xl"></div>
            <p className="text-green-200 font-semibold mt-2">Explore our products!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

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

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const generateWhatsAppMessage = () => {
    const orderItems = cartItems.map(item => 
      `🦴 ${item.name} x${item.quantity} (R${(item.price * item.quantity).toFixed(2)})`
    ).join('\n');
    
    const message = `Yabba Dabba Doooo! I'd like to place a prehistoric order from Flintstone\n\n${orderItems}\n\nTotal: R${total.toFixed(2)} stone coins \n\nPlease confirm availability and pterodactyl delivery details. Thank you, fellow cave dweller! 🦴`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "+27693028863";
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex">
      {/* Stone Cave Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Stone Cart Cave */}
      <div 
        className="ml-auto h-full w-full max-w-md shadow-2xl flex flex-col border-8 border-stone-600 relative z-[10000]"
        style={{
          background: 'linear-gradient(180deg, #d6d3d1, #a8a29e)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-opacity='0.1'%3E%3Cpath fill='%23000' d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        {/* Stone Slab Header */}
        <div 
          className="text-white p-4 flex items-center justify-between border-b-4 border-stone-600"
          style={{
            background: 'linear-gradient(45deg, #78716c, #57534e)',
            fontFamily: 'Creepster, cursive'
          }}
        >
          <div className="flex items-center space-x-2">
            <ShoppingBag size={24} />
            <h2 className="text-xl font-bold">Your Stone Cart</h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full transition-colors duration-300"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Cave Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <p 
                className="text-stone-500 text-lg"
                style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
              >
                Your stone cart is empty
              </p>
              <p className="text-stone-400 mt-2">Add some prehistoric cannabis products! 🦕</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="rounded-lg p-4 border-4 border-stone-600 shadow-lg"
                  style={{
                    background: 'linear-gradient(145deg, #f5f5f4, #e7e5e4)'
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg border-2 border-stone-400"
                    />
                    <div className="flex-1">
                      <h3 
                        className="font-bold text-stone-800"
                        style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-sm text-stone-600">{item.category}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span 
                          className="font-bold text-black"
                          style={{ fontFamily: 'Creepster, cursive' }}
                        >
                          R{item.price}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="text-white p-1 rounded-full shadow-lg border-2 border-red-800"
                            style={{ background: 'linear-gradient(45deg, #dc2626, #991b1b)' }}
                          >
                            <Minus size={12} />
                          </button>
                          <span 
                            className="font-bold px-2"
                            style={{ fontFamily: 'Creepster, cursive' }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="text-white p-1 rounded-full shadow-lg border-2 border-green-800"
                            style={{ background: 'linear-gradient(45deg, #16a34a, #15803d)' }}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span 
                          className="text-sm font-semibold"
                          style={{ fontFamily: 'Creepster, cursive' }}
                        >
                          Subtotal: R{(item.price * item.quantity).toFixed(2)} 🪨
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-600 text-sm hover:text-red-800 font-bold"
                          style={{ fontFamily: 'Creepster, cursive' }}
                        >
                          Remove 🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stone Age Footer */}
        {cartItems.length > 0 && (
          <div 
            className="border-t-4 border-stone-600 p-4"
            style={{
              background: 'linear-gradient(145deg, #f5f5f4, #e7e5e4)'
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <span 
                className="text-xl font-bold text-stone-800"
                style={{ fontFamily: 'Wulf Utility W00 Regular, cursive' }}
              >
                Total Cave Bill:
              </span>
              <span 
                className="text-2xl font-black text-black"
                style={{ fontFamily: 'Creepster, cursive' }}
              >
                ${total.toFixed(2)} 
              </span>
            </div>
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 border-4 border-orange-800"
              style={{
                background: 'linear-gradient(45deg, #ea580c, #dc2626)',
                fontFamily: 'Wulf Utility W00 Regular, cursive'
              }}
            >
              <span>💬</span>
              <span>Checkout on WhatsApp</span>
            </button>
            <p className="text-xs text-stone-600 text-center mt-2">
              You'll be redirected to WhatsApp to complete your prehistoric order!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;

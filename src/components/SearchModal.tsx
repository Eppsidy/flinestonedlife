
import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const mockProducts = [
    "Stone Age Smartphone",
    "Bedrock Breakfast Bowl", 
    "Dino Print Tunic",
    "Prehistoric Power Tools",
    "Stone Wheel Deluxe",
    "Cave Painting Kit"
  ];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length > 0) {
      const results = mockProducts.filter(product => 
        product.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 border-4 border-orange-600">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-stone-800">🔍 Search Bedrock Store</h3>
            <button 
              onClick={onClose}
              className="text-stone-600 hover:text-stone-800 p-2"
            >
              <X size={24} />
            </button>
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for Stone Age products..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 border-2 border-stone-300 rounded-full focus:border-orange-500 focus:outline-none text-lg"
              autoFocus
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400" size={20} />
          </div>

          {searchResults.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-stone-700 mb-3">Search Results:</h4>
              <ul className="space-y-2">
                {searchResults.map((result, index) => (
                  <li 
                    key={index}
                    className="p-3 bg-stone-100 rounded-lg hover:bg-orange-100 cursor-pointer transition-colors"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {searchTerm && searchResults.length === 0 && (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🦕</div>
              <p className="text-stone-600">No products found. Try searching for something else!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

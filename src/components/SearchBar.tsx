
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search prehistoric products..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 border-4 border-stone-600"
          style={{
            background: 'linear-gradient(45deg, #000000, #1a1a1a)'
          }}
        >
          <Search size={20} />
        </button>
      ) : (
        <div 
          className="flex items-center rounded-full shadow-lg border-4 border-stone-600 overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #d6d3d1, #a8a29e)'
          }}
        >
          <div className="px-4">
            <Search size={20} className="text-stone-600" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={placeholder}
            className="py-3 px-2 w-64 focus:outline-none text-stone-800 bg-transparent"
            style={{ fontFamily: 'Creepster, cursive' }}
            autoFocus
          />
          <button
            onClick={clearSearch}
            className="px-4 py-3 text-stone-600 hover:text-stone-800"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

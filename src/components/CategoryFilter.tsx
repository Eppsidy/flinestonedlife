
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      <button
        onClick={() => onCategoryChange('All')}
        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 border-4 border-stone-600 shadow-lg ${
          selectedCategory === 'All'
            ? 'text-white transform scale-110'
            : 'text-stone-800 hover:scale-105'
        }`}
        style={{
          background: selectedCategory === 'All' 
            ? 'linear-gradient(45deg, #000000, #1a1a1a)' 
            : 'linear-gradient(145deg, #d6d3d1, #a8a29e)',
          fontFamily: 'Wulf Utility W00 Regular, cursive'
        }}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-bold transition-all duration-300 border-4 border-stone-600 shadow-lg ${
            selectedCategory === category
              ? 'text-white transform scale-110'
              : 'text-stone-800 hover:scale-105'
          }`}
          style={{
            background: selectedCategory === category 
              ? 'linear-gradient(45deg, #000000, #1a1a1a)' 
              : 'linear-gradient(145deg, #d6d3d1, #a8a29e)',
            fontFamily: 'Wulf Utility W00 Regular, cursive'
          }}
        >
          {category} {category === 'Weed' ? '' : category === 'Vapes' ? '' : ''}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

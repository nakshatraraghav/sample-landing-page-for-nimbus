import React, { useState } from 'react';
import { Filter, ChevronDown, Check } from 'lucide-react';

type FilterOption = {
  id: string;
  name: string;
};

interface FilterBarProps {
  onFilterChange: (filters: Record<string, string>) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [isExpanded, setIsExpanded] = useState(false);
  
  const categories: FilterOption[] = [
    { id: 'all', name: 'All Models' },
    { id: 'text-generation', name: 'Text Generation' },
    { id: 'image-generation', name: 'Image Generation' },
    { id: 'embedding', name: 'Embeddings' },
    { id: 'classification', name: 'Classification' },
  ];
  
  const sizes: FilterOption[] = [
    { id: 'all', name: 'All Sizes' },
    { id: 'small', name: 'Small (<5B)' },
    { id: 'medium', name: 'Medium (5-20B)' },
    { id: 'large', name: 'Large (>20B)' },
  ];
  
  const prices: FilterOption[] = [
    { id: 'all', name: 'All Prices' },
    { id: 'free', name: 'Free' },
    { id: 'paid', name: 'Paid' },
  ];
  
  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = {
      ...activeFilters,
      [filterType]: value
    };
    
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200">
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <span className="font-medium text-gray-700">Filters</span>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700"
        >
          <ChevronDown 
            size={20} 
            className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>
      
      <div 
        className={`grid gap-4 transition-all duration-300 ease-in-out px-4 ${
          isExpanded 
            ? 'grid-rows-[1fr] py-4 border-t border-gray-200 opacity-100' 
            : 'grid-rows-[0fr] opacity-0 py-0 border-t-0 overflow-hidden'
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Categories */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
              <div className="space-y-1">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleFilterChange('category', category.id)}
                    className={`flex items-center justify-between w-full text-left px-3 py-1.5 rounded-md text-sm ${
                      activeFilters.category === category.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                    {activeFilters.category === category.id && (
                      <Check size={16} className="text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Sizes */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Model Size</h4>
              <div className="space-y-1">
                {sizes.map(size => (
                  <button
                    key={size.id}
                    onClick={() => handleFilterChange('size', size.id)}
                    className={`flex items-center justify-between w-full text-left px-3 py-1.5 rounded-md text-sm ${
                      activeFilters.size === size.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {size.name}
                    {activeFilters.size === size.id && (
                      <Check size={16} className="text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Prices */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Price</h4>
              <div className="space-y-1">
                {prices.map(price => (
                  <button
                    key={price.id}
                    onClick={() => handleFilterChange('price', price.id)}
                    className={`flex items-center justify-between w-full text-left px-3 py-1.5 rounded-md text-sm ${
                      activeFilters.price === price.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {price.name}
                    {activeFilters.price === price.id && (
                      <Check size={16} className="text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
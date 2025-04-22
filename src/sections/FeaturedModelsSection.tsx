import React, { useState } from 'react';
import { Search } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import ModelCard from '../components/ModelCard';
import { models } from '../data/models';

const FeaturedModelsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  
  const handleFilterChange = (filters: Record<string, string>) => {
    setActiveFilters(filters);
  };
  
  const filteredModels = models.filter(model => {
    // Search filter
    if (searchQuery && !model.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (activeFilters.category && activeFilters.category !== 'all') {
      if (!model.tags.includes(activeFilters.category)) {
        return false;
      }
    }
    
    // Size filter
    if (activeFilters.size && activeFilters.size !== 'all') {
      if (activeFilters.size === 'small' && model.parameters >= 5000000000) return false;
      if (activeFilters.size === 'medium' && (model.parameters < 5000000000 || model.parameters > 20000000000)) return false;
      if (activeFilters.size === 'large' && model.parameters <= 20000000000) return false;
    }
    
    // Price filter
    if (activeFilters.price && activeFilters.price !== 'all') {
      if (activeFilters.price === 'free' && !model.isFree) return false;
      if (activeFilters.price === 'paid' && model.isFree) return false;
    }
    
    return true;
  });
  
  return (
    <section id="models" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Model Marketplace
          </h2>
          <p className="text-lg text-gray-600">
            Discover cutting-edge AI models from leading providers and independent researchers, all in one place.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for models by name or capability..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          
          <FilterBar onFilterChange={handleFilterChange} />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredModels.length > 0 ? (
            filteredModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-gray-500 text-lg">No models match your search criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModelsSection;
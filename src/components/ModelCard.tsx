import React from 'react';
import { StarIcon, BadgeCheck, DownloadIcon } from 'lucide-react';
import Button from './Button';
import { Model } from '../types';

interface ModelCardProps {
  model: Model;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div 
        className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden"
        style={{ 
          backgroundImage: `url(${model.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {model.featured && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <BadgeCheck size={14} className="mr-1" /> Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
            {model.name}
          </h3>
          <div className="flex items-center">
            <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium text-gray-700">{model.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{model.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {model.tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
          <div>
            <span className="text-gray-800 font-semibold">${model.price}</span>
            {model.isFree && <span className="ml-2 text-green-600 text-sm font-medium">Free</span>}
          </div>
          <Button size="sm" variant="primary" className="gap-1">
            <DownloadIcon size={16} />
            Try Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
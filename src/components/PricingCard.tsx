import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: number | string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  billingPeriod?: 'monthly' | 'annually';
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  billingPeriod = 'monthly'
}) => {
  return (
    <div className={`rounded-2xl shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
      isPopular ? 'ring-2 ring-blue-500 relative z-10' : 'border border-gray-200'
    }`}>
      {isPopular && (
        <div className="bg-blue-800 text-white text-xs font-semibold py-1 text-center">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">
            {typeof price === 'number' ? `$${price}` : price}
          </span>
          {typeof price === 'number' && (
            <span className="text-gray-500 ml-2">/{billingPeriod}</span>
          )}
        </div>
        
        <Button 
          variant={isPopular ? 'primary' : 'outline'} 
          isFullWidth
          className={isPopular ? 'bg-blue-800 hover:bg-blue-700' : ''}
        >
          Get started
        </Button>
      </div>
      
      <div className="px-6 pb-6 pt-4 bg-white border-t border-gray-100">
        <p className="text-xs font-medium text-gray-700 uppercase mb-4">What's included:</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className={`flex items-start ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}
            >
              <Check 
                size={16} 
                className={`mr-2 flex-shrink-0 mt-1 ${feature.included ? 'text-blue-500' : 'text-gray-300'}`} 
              />
              <span className="text-sm">{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
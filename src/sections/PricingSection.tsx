import React, { useState } from 'react';
import PricingCard from '../components/PricingCard';

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');
  
  const priceMultiplier = billingPeriod === 'annually' ? 0.8 : 1; // 20% discount for annual
  
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for experimenting and small projects',
      price: Math.round(49 * priceMultiplier),
      features: [
        { name: 'Access to basic models', included: true },
        { name: '100k tokens per month', included: true },
        { name: 'Community support', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Custom fine-tuning', included: false },
        { name: 'Team collaboration', included: false },
        { name: 'Priority support', included: false },
        { name: 'Advanced security', included: false },
      ],
    },
    {
      name: 'Professional',
      description: 'For growing teams and production applications',
      price: Math.round(99 * priceMultiplier),
      features: [
        { name: 'Access to all models', included: true },
        { name: '500k tokens per month', included: true },
        { name: 'Community support', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Custom fine-tuning', included: true },
        { name: 'Team collaboration (up to 5)', included: true },
        { name: 'Priority support', included: false },
        { name: 'Advanced security', included: false },
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: 'For organizations with advanced needs',
      price: Math.round(249 * priceMultiplier),
      features: [
        { name: 'Access to all models', included: true },
        { name: 'Unlimited tokens', included: true },
        { name: 'Community support', included: true },
        { name: 'Advanced analytics & reporting', included: true },
        { name: 'Custom fine-tuning', included: true },
        { name: 'Unlimited team collaboration', included: true },
        { name: 'Priority 24/7 support', included: true },
        { name: 'Advanced security & compliance', included: true },
      ],
    },
  ];
  
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the perfect plan for your needs. All plans include access to our marketplace and basic features.
          </p>
          
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg max-w-xs mx-auto">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annually')}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                billingPeriod === 'annually'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Annually <span className="text-green-600 font-medium">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need a custom plan?</h3>
          <p className="text-gray-600 mb-4">
            We offer custom enterprise solutions for organizations with specific requirements.
          </p>
          <a href="#" className="inline-flex text-blue-800 font-medium hover:text-blue-700">
            Contact our sales team
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
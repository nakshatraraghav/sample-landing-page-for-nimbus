import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from './Button';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would submit to a backend
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };
  
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl py-8 px-6 md:py-12 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Stay updated with the latest models
        </h3>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter to receive updates about new models, pricing changes, and tips for maximizing your AI models.
        </p>
        
        {isSubmitted ? (
          <div className="flex items-center justify-center space-x-2 text-white bg-blue-800/30 py-3 px-4 rounded-lg text-sm max-w-md mx-auto animate-fadeIn">
            <Check size={16} className="text-green-400" />
            <span>Thanks for subscribing! Check your inbox soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 text-white placeholder-blue-200 backdrop-blur-sm border border-white/10"
            />
            <Button 
              type="submit" 
              className="bg-white text-blue-900 hover:bg-blue-50 py-3"
            >
              Subscribe
              <Send size={16} className="ml-2" />
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
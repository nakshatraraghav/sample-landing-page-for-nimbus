import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  avatarUrl
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col h-full relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 text-blue-100 opacity-30">
        <Quote size={80} />
      </div>
      
      <div className="flex-1">
        <p className="text-gray-700 italic relative z-10">"{quote}"</p>
      </div>
      
      <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
        <div className="flex-shrink-0 mr-4">
          <img 
            src={avatarUrl} 
            alt={author} 
            className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm" 
          />
        </div>
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
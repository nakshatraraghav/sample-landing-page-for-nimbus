import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "ModelHub has completely transformed our product development process. The access to high-quality models and the ease of integration has accelerated our time to market by over 60%.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechVision",
      avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a startup, we couldn't afford to train our own models. ModelHub gave us access to enterprise-grade AI at a fraction of the cost, helping us launch faster than competitors.",
      author: "Michael Zhang",
      role: "Founder",
      company: "AIStartup",
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The variety of specialized models available on ModelHub is impressive. We found exactly what we needed for our healthcare application, pre-trained and compliant with industry standards.",
      author: "Elena Rodriguez",
      role: "AI Lead",
      company: "HealthTech Innovations",
      avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Innovative Teams
          </h2>
          <p className="text-lg text-gray-600">
            See how organizations across industries are leveraging our marketplace to power their AI initiatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-8 md:space-x-12">
            <img src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Company logo" className="h-8 md:h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Company logo" className="h-8 md:h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://images.pexels.com/photos/5668860/pexels-photo-5668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Company logo" className="h-8 md:h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://images.pexels.com/photos/5668861/pexels-photo-5668861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Company logo" className="h-8 md:h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
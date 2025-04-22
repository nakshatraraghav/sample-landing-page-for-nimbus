import React, { useState, useEffect } from 'react';
import { Search, Menu, X, BrainCircuit } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <BrainCircuit size={28} className="text-blue-800" />
              <span className="font-bold text-xl text-gray-900">ModelHub</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#models" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Models
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Pricing
            </a>
            <a href="#documentation" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Docs
            </a>
            <a href="#company" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Company
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search models..."
                className="py-2 pl-10 pr-4 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 w-44 lg:w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            <Button variant="outline">Sign in</Button>
            <Button>Sign up</Button>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search models..."
                className="py-2 px-4 flex-1 focus:outline-none"
              />
              <button className="bg-gray-100 p-2">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-3">
              <a href="#models" className="text-gray-700 py-2 border-b border-gray-100">
                Models
              </a>
              <a href="#pricing" className="text-gray-700 py-2 border-b border-gray-100">
                Pricing
              </a>
              <a href="#documentation" className="text-gray-700 py-2 border-b border-gray-100">
                Documentation
              </a>
              <a href="#company" className="text-gray-700 py-2 border-b border-gray-100">
                Company
              </a>
            </nav>
            
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button variant="outline" isFullWidth>Sign in</Button>
              <Button isFullWidth>Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
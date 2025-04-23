import React from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
  BarChart,
  BrainCircuit,
} from "lucide-react";
import Button from "../components/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />

      {/* Animated circles */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 mb-6 text-sm font-medium animate-fadeInDown">
            <Sparkles size={14} className="mr-1" />
            <span>Discover the future of AI models</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl animate-fadeInUp">
            smaple for risba
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800">
              AI model
            </span>{" "}
            for your next project
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mb-8 animate-fadeInUp animation-delay-300">
            Access thousands of state-of-the-art language models, fine-tuned for
            your specific needs, all in one marketplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-600">
            <Button size="lg" className="gap-2">
              Browse Models
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Developer Documentation
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center animate-fadeInUp animation-delay-800">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Zap size={20} className="text-blue-800" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              High Performance
            </h3>
            <p className="text-gray-600 text-sm">
              Access models with state-of-the-art accuracy and lightning-fast
              inference times.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center animate-fadeInUp animation-delay-1000">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <BrainCircuit size={20} className="text-purple-800" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Specialized Models
            </h3>
            <p className="text-gray-600 text-sm">
              Find models fine-tuned for your specific domain or use case.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center animate-fadeInUp animation-delay-1200">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <BarChart size={20} className="text-teal-800" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Detailed Analytics
            </h3>
            <p className="text-gray-600 text-sm">
              Comprehensive benchmarks and performance metrics for informed
              decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

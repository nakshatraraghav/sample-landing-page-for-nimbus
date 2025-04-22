import React from "react";
import { ArrowRight, Download, Sparkles, Zap, Shield } from "lucide-react";
import Button from "../components/Button";
import NewsletterSignup from "../components/NewsletterSignup";

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to build with the latest AI models?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get started today and join the thousands of developers and
                companies using our marketplace to power their applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Create Account
                  <ArrowRight size={18} />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Download SDK
                  <Download size={18} />
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <Sparkles size={18} className="text-blue-800" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Simple Integration
                    </h3>
                    <p className="text-gray-600">
                      Our SDK makes it easy to integrate any model into your
                      application in minutes, not days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <Zap size={18} className="text-purple-800" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Performance Optimized
                    </h3>
                    <p className="text-gray-600">
                      All models are optimized for speed and efficiency,
                      reducing your infrastructure costs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                    <Shield size={18} className="text-teal-800" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Secure and Compliant
                    </h3>
                    <p className="text-gray-600">
                      Enterprise-grade security and compliance controls for
                      sensitive applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

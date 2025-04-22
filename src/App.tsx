import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import FeaturedModelsSection from "./sections/FeaturedModelsSection";
import PricingSection from "./sections/PricingSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CallToActionSection from "./sections/CallToActionSection";
import FooterSection from "./sections/FooterSection";

// Add these classes to index.css
import "./styles/animations.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedModelsSection />
        <PricingSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;

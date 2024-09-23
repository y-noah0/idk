import Cta from "./components/CTA/CTA";
import Navbar from "./components/Defaults/navbar/Navbar";
import Features from "./components/Features/Features";
import HeroSection from "./components/heroSection/HeroSection";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";

function App(){
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Features/>
      <Testimonials/>
      <Pricing/>
      <Cta/>
    </div>
  );
}
export default App;
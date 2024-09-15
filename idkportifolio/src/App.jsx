import Navbar from "./components/Defaults/navbar/Navbar";
import FAQ from "./components/Faqs/Faqs";
import { Features } from "./components/Features/Features";
import HeroSection from "./components/heroSection/HeroSection";
import Pricing from "./components/Pricing/Pricing";
import Stasts from "./components/stats/Stasts";

function App(){
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
       <Stasts/>
      <Features/>
      <Pricing/>
      <FAQ/>
     
    </div>
  );
}
export default App;
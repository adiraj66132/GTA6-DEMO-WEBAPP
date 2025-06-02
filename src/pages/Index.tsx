
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import World from "../components/World";
import Characters from "../components/Characters";
import Platforms from "../components/Platforms";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gta-dark text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <World />
      <Characters />
      <Platforms />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

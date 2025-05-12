
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gta-neon/30">
      <div className="gta-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold gradient-text">GTA VI</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-gta-neon transition-colors">Features</a>
            <a href="#world" className="text-white hover:text-gta-neon transition-colors">World</a>
            <a href="#characters" className="text-white hover:text-gta-neon transition-colors">Characters</a>
            <a href="#platforms" className="text-white hover:text-gta-neon transition-colors">Platforms</a>
            <button className="gta-button">Pre-Order</button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 flex flex-col space-y-4 items-center">
            <a href="#features" className="text-white hover:text-gta-neon transition-colors">Features</a>
            <a href="#world" className="text-white hover:text-gta-neon transition-colors">World</a>
            <a href="#characters" className="text-white hover:text-gta-neon transition-colors">Characters</a>
            <a href="#platforms" className="text-white hover:text-gta-neon transition-colors">Platforms</a>
            <button className="gta-button">Pre-Order</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

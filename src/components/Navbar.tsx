
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import PreOrderDialog from './PreOrderDialog';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black/70 backdrop-blur-sm'
    } border-b border-gta-neon/30`}>
      <div className="gta-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold gradient-text">GTA VI</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white transition-transform hover:scale-105"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-gta-neon transition-colors hover:scale-105 inline-block">Features</a>
            <a href="#world" className="text-white hover:text-gta-neon transition-colors hover:scale-105 inline-block">World</a>
            <a href="#characters" className="text-white hover:text-gta-neon transition-colors hover:scale-105 inline-block">Characters</a>
            <a href="#platforms" className="text-white hover:text-gta-neon transition-colors hover:scale-105 inline-block">Platforms</a>
            <PreOrderDialog>
              <button className="gta-button will-change-transform">Pre-Order</button>
            </PreOrderDialog>
          </div>
        </div>
        
        {/* Mobile menu with improved animation */}
        {isOpen && (
          <div className="md:hidden py-4 flex flex-col space-y-4 items-center animate-fade-in will-change-transform">
            <a href="#features" className="text-white hover:text-gta-neon transition-colors w-full text-center py-2">Features</a>
            <a href="#world" className="text-white hover:text-gta-neon transition-colors w-full text-center py-2">World</a>
            <a href="#characters" className="text-white hover:text-gta-neon transition-colors w-full text-center py-2">Characters</a>
            <a href="#platforms" className="text-white hover:text-gta-neon transition-colors w-full text-center py-2">Platforms</a>
            <PreOrderDialog>
              <button className="gta-button w-full">Pre-Order</button>
            </PreOrderDialog>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

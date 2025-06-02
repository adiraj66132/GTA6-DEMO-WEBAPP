import { useEffect, useRef } from 'react';
import PreOrderDialog from './PreOrderDialog';

const Hero = () => {
  const parallaxElementsRef = useRef<NodeListOf<Element> | null>(null);
  
  useEffect(() => {
    // Cache DOM elements for better performance
    parallaxElementsRef.current = document.querySelectorAll('.parallax');
    
    // Use throttled event listener for mouse movement
    let ticking = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallaxElements(e);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    const updateParallaxElements = (e: MouseEvent) => {
      if (!parallaxElementsRef.current) return;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      parallaxElementsRef.current.forEach((el) => {
        const element = el as HTMLElement;
        const speedX = Number(element.dataset.speedX) || 0.05;
        const speedY = Number(element.dataset.speedY) || 0.05;
        
        const moveX = (mouseX - windowWidth / 2) * speedX;
        const moveY = (mouseY - windowHeight / 2) * speedY;
        
        // Use transform with will-change for better performance
        element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const handleWatchTrailer = () => {
    window.open('https://www.youtube.com/watch?v=QdBZY2fkU-0', '_blank');
  };
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gta-dark to-gta-dark/90 z-0"></div>
      
      {/* Background elements with will-change optimization */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="parallax absolute top-10 right-10 w-96 h-96 rounded-full 
          bg-gradient-to-r from-gta-teal/20 to-gta-neon/20 blur-3xl will-change-transform"
          data-speed-x="0.02" 
          data-speed-y="0.03"
        ></div>
        <div 
          className="parallax absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full 
          bg-gradient-to-r from-gta-orange/20 to-gta-pink/20 blur-3xl will-change-transform"
          data-speed-x="0.03" 
          data-speed-y="0.02"
        ></div>
      </div>
      
      <div className="gta-container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="block">GRAND</span>
            <span className="block">THEFT</span>
            <span className="block gradient-text">AUTO VI</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-lg">
            Welcome to Leonida, where crime, power, and the neon lights of 
            Vice City await. Your criminal empire begins now.
          </p>
          <div className="flex flex-wrap gap-4">
            <PreOrderDialog>
              <button className="gta-button animate-neon-pulse">
                Pre-Order Now
              </button>
            </PreOrderDialog>
            <button 
              onClick={handleWatchTrailer}
              className="px-6 py-3 font-bold uppercase tracking-widest 
                border-2 border-gta-neon text-gta-neon
                hover:bg-gta-neon/10 rounded-md transition-all"
            >
              Watch Trailer
            </button>
          </div>
          <div className="mt-8 flex items-center">
            <div className="px-3 py-1 bg-black/70 rounded-md border border-gta-neon/30">
              <span className="text-gta-neon font-bold">MATURE 18+</span>
            </div>
            <p className="text-gray-400 text-sm ml-4">
              Strong violence, blood and gore, mature themes
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative animate-float will-change-transform">
            <img 
              src="/lovable-uploads/fa6fc2a3-4722-45db-b3b5-8bbcba67dd18.png" 
              alt="GTA VI Character" 
              className="max-w-full h-auto"
              loading="eager"
              width="600"
              height="800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

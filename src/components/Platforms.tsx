
import { useToast } from '@/hooks/use-toast';
import PreOrderDialog from './PreOrderDialog';

const Platforms = () => {
  const { toast } = useToast();

  const handleComingSoon = () => {
    toast({
      variant: "destructive",
      title: "Not Available Yet",
      description: "PC version is still in development. Stay tuned for updates!",
    });
  };

  return (
    <section id="platforms" className="gta-section bg-black relative overflow-hidden">
      {/* Background clouds with lazy loading */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/a5e1f6c3-b2fc-48ed-831d-0834c6b7dddb.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <div className="gta-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="gta-heading text-4xl mb-4">
            Available on <span className="gradient-text">Next-Gen Platforms</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience Vice City in stunning detail with cutting-edge graphics 
            and performance on the latest gaming hardware.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="bg-black/60 backdrop-blur-md p-8 rounded-lg border border-gta-neon/30
               hover:border-gta-neon/80 transition-all hover:shadow-[0_0_15px_rgba(0,255,204,0.3)]
               flex flex-col items-center">
            <img 
              src="/lovable-uploads/a1880ffb-41be-4a8a-9347-c21dbc68f292.png" 
              alt="PlayStation 5 and Xbox" 
              className="h-32 object-contain mb-6"
              loading="lazy"
              width="128"
              height="128"
            />
            <h3 className="text-2xl font-bold mb-3">Console Experience</h3>
            <ul className="space-y-3 text-center">
              <li className="text-gray-300">4K resolution at 60 FPS</li>
              <li className="text-gray-300">Ray-traced reflections</li>
              <li className="text-gray-300">Enhanced haptic feedback</li>
              <li className="text-gray-300">Ultra-fast loading times</li>
            </ul>
            <div className="mt-6">
              <PreOrderDialog>
                <button className="gta-button">Pre-Order Now</button>
              </PreOrderDialog>
            </div>
          </div>
          
          <div className="bg-black/60 backdrop-blur-md p-8 rounded-lg border border-gta-orange/30
               hover:border-gta-orange/80 transition-all hover:shadow-[0_0_15px_rgba(255,126,95,0.3)]
               flex flex-col items-center">
            <div className="h-32 flex items-center justify-center mb-6">
              <span className="text-5xl font-extrabold gradient-text">PC</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Ultimate PC Edition</h3>
            <ul className="space-y-3 text-center">
              <li className="text-gray-300">Unlocked framerates</li>
              <li className="text-gray-300">Advanced graphics settings</li>
              <li className="text-gray-300">Ultra-widescreen support</li>
              <li className="text-gray-300">Mod compatibility</li>
            </ul>
            <div className="mt-6">
              <button 
                onClick={handleComingSoon}
                className="px-6 py-3 font-bold uppercase tracking-widest 
                  border-2 border-gta-orange text-gta-orange
                  hover:bg-gta-orange/10 rounded-md transition-transform hover:scale-105"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-black/70 border border-white/10 px-6 py-3 rounded-md">
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/c6aec126-faa3-43ab-838a-0b3f78041912.png" 
                alt="Mature 18+" 
                className="h-16 object-contain"
                loading="lazy"
                width="64"
                height="64"
              />
              <div className="ml-4 text-left">
                <p className="text-sm text-gray-400">
                  Strong violence, blood, mature themes, 
                  <br />strong language, nudity, sexual content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;

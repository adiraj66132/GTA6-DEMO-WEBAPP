
import { useState } from 'react';
import { Bell, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsAnimating(true);
      
      // Start the animation sequence
      setTimeout(() => {
        setSubscribed(true);
        setEmail('');
        setIsAnimating(false);
        
        // Reset after 5 seconds
        setTimeout(() => {
          setSubscribed(false);
        }, 5000);
      }, 800); // Animation duration
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gta-dark/95 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-gta-neon via-gta-orange to-gta-pink"></div>
      
      <div className="gta-container">
        <div className="max-w-3xl mx-auto text-center">
          <Bell className="w-12 h-12 mx-auto mb-6 text-gta-neon animate-pulse" />
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated on <span className="gradient-text">GTA VI</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for exclusive content, early access opportunities, 
            and the latest news on Grand Theft Auto VI.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md bg-black border border-gta-neon/30 text-white focus:border-gta-neon focus:outline-none focus:ring-1 focus:ring-gta-neon"
              required
              disabled={isAnimating || subscribed}
            />
            <button 
              type="submit"
              disabled={isAnimating || subscribed}
              className={`relative overflow-hidden whitespace-nowrap transition-all duration-300 px-6 py-3 font-bold uppercase tracking-widest rounded-md ${
                subscribed 
                  ? 'bg-green-500 text-white' 
                  : isAnimating 
                    ? 'bg-gta-neon/80 text-gta-dark' 
                    : 'gta-button'
              }`}
            >
              <span className={`inline-flex items-center transition-all duration-500 ${
                isAnimating ? 'transform -translate-y-8 opacity-0' : 'transform translate-y-0 opacity-100'
              }`}>
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Subscribed
                  </>
                ) : (
                  'Subscribe'
                )}
              </span>
              
              {/* Animated checkmark */}
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                isAnimating ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'
              }`}>
                <Check className={`w-5 h-5 transition-all duration-300 ${
                  isAnimating ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                }`} />
              </span>
            </button>
          </form>
          
          {subscribed && (
            <div className="mt-4 flex items-center justify-center text-green-400 animate-fade-in">
              <Check className="w-5 h-5 mr-2" />
              <span>Thank you for subscribing!</span>
            </div>
          )}
          
          <div className="mt-8 text-sm text-gray-500">
            By subscribing, you agree to receive promotional emails. You can unsubscribe at any time.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

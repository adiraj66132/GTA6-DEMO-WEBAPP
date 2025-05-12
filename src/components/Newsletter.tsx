
import { useState } from 'react';
import { Bell, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // In a real app, you would submit this to your API
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
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
            />
            <button 
              type="submit"
              className="gta-button whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          {subscribed && (
            <div className="mt-4 flex items-center justify-center text-gta-neon">
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

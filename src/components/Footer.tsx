
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gta-neon/20">
      <div className="gta-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-extrabold gradient-text mb-2">GTA VI</div>
            <p className="text-sm">© {currentYear} Rockstar Games. All trademarks belong to their respective owners.</p>
            <p className="text-sm mt-1">This is a fan-made website for demonstration purposes only.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <h4 className="text-white font-bold mb-3">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gta-neon transition-colors">Pre-Order</a></li>
                <li><a href="#features" className="hover:text-gta-neon transition-colors">Features</a></li>
                <li><a href="#platforms" className="hover:text-gta-neon transition-colors">Platforms</a></li>
                <li><a href="#" className="hover:text-gta-neon transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gta-neon transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gta-neon transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gta-neon transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-gta-neon transition-colors">EULA</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-3">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gta-neon transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gta-neon transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-gta-neon transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-gta-neon transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gta-neon/10 text-center text-xs text-gray-600">
          <p>This website is not affiliated with or endorsed by Rockstar Games, Take-Two Interactive, or any related entities.</p>
          <p className="mt-1">Created for demonstration purposes only. All images and references are the property of their respective owners.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

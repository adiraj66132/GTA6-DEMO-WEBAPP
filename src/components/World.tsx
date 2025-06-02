
import { MapPin, Car, Building, Waves } from 'lucide-react';

const World = () => {
  const locations = [
    {
      name: "Vice City",
      description: "The neon-soaked metropolis returns with stunning detail. Experience the glamour and danger of this iconic city.",
      icon: Building,
      features: ["Downtown District", "Beach Boardwalk", "Industrial Zone"]
    },
    {
      name: "Leonida Keys",
      description: "Explore the tropical paradise of interconnected islands with unique ecosystems and hidden secrets.",
      icon: Waves,
      features: ["Coral Reefs", "Private Islands", "Fishing Villages"]
    },
    {
      name: "Highway System",
      description: "An extensive network of roads connecting diverse landscapes from urban sprawl to rural countryside.",
      icon: Car,
      features: ["Interstate Highways", "Scenic Routes", "Hidden Shortcuts"]
    }
  ];

  return (
    <section id="world" className="gta-section bg-gradient-to-b from-gta-dark to-black">
      <div className="gta-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Explore <span className="gradient-text">Leonida</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the most detailed and immersive open world ever created. From bustling city streets 
            to serene coastal areas, every corner of Leonida tells a story.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => {
            const Icon = location.icon;
            return (
              <div 
                key={location.name}
                className="neon-border bg-black/60 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-gta-neon mr-3" />
                  <h3 className="text-2xl font-bold text-white">{location.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{location.description}</p>
                <ul className="space-y-2">
                  {location.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-gta-teal mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gta-neon/20 to-gta-teal/20 rounded-lg p-8 border border-gta-neon/30">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Living, Breathing World</h3>
            <p className="text-gray-300 text-lg">
              Experience dynamic weather systems, realistic day-night cycles, and AI-driven NPCs 
              that react to your actions. Every decision shapes the world around you in ways 
              you've never seen before in a GTA game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default World;

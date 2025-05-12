
import { Gamepad, Map, Users, Car } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Map className="w-12 h-12 text-gta-neon" />,
      title: "Expanded World",
      description: "Experience the largest and most detailed world in GTA history, from the neon-lit streets of Vice City to the vast landscapes of Leonida."
    },
    {
      icon: <Users className="w-12 h-12 text-gta-orange" />,
      title: "Dual Protagonists",
      description: "Play as Lucia and Jason, two characters with intertwined stories in a Bonnie & Clyde-inspired criminal journey across the sun-soaked state."
    },
    {
      icon: <Gamepad className="w-12 h-12 text-gta-pink" />,
      title: "Enhanced Gameplay",
      description: "Experience next-gen mechanics with improved gunplay, driving physics, and the most responsive GTA gameplay to date."
    },
    {
      icon: <Car className="w-12 h-12 text-gta-teal" />,
      title: "Criminal Empire",
      description: "Build your empire from the ground up, manage businesses, recruit crew members, and make strategic decisions that impact your rise to power."
    }
  ];

  return (
    <section id="features" className="gta-section bg-gradient-to-b from-gta-dark to-black">
      <div className="gta-container">
        <div className="text-center mb-16">
          <h2 className="gta-heading text-4xl mb-4">
            <span className="gradient-text">Experience</span> the Next Evolution
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            GTA VI delivers the most immersive and ambitious open-world experience yet, 
            with cutting-edge technology and innovative gameplay.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group neon-border hover:scale-105 transition-transform duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="rounded-lg overflow-hidden relative">
            <img 
              src="/lovable-uploads/0f83a5d3-7256-4be3-8755-03f5327ab69e.png" 
              alt="Vice City" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-4xl md:text-6xl font-extrabold text-white text-center">
                WELCOME TO <span className="gradient-text">VICE CITY</span>
              </h3>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">A Living, Breathing World</h3>
              <p className="text-gray-400 mb-6">
                Experience a meticulously crafted world filled with colorful characters, dynamic weather systems, and countless activities. 
                From the neon-soaked nightlife to the dangerous backstreets, every corner of Vice City feels alive.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gta-neon rounded-full mr-2"></span>
                  Dynamic day/night cycle with changing NPC behaviors
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gta-orange rounded-full mr-2"></span>
                  Over 100 unique interior locations to explore
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gta-teal rounded-full mr-2"></span>
                  Reactive ecosystem and wildlife
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Unprecedented Freedom</h3>
              <p className="text-gray-400 mb-6">
                Your choices shape your criminal journey. Build alliances, betray rivals, and navigate the complex criminal 
                underworld of Vice City as you rise from street-level hustler to criminal kingpin.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gta-neon rounded-full mr-2"></span>
                  Branching storylines with multiple endings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gta-orange rounded-full mr-2"></span>
                  Character customization and progression system
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gta-teal rounded-full mr-2"></span>
                  Dynamic faction reputation system
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

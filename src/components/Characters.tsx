
import { User, Heart, Zap, Shield } from 'lucide-react';

const Characters = () => {
  const characters = [
    {
      name: "Lucia",
      role: "The Mastermind",
      description: "A cunning strategist with a troubled past, Lucia brings intelligence and determination to every heist.",
      icon: Zap,
      traits: ["Strategic Thinking", "Tech Savvy", "Resourceful"],
      background: "Former corporate executive turned criminal after being betrayed by her company."
    },
    {
      name: "Jason",
      role: "The Muscle",
      description: "Street-smart and loyal, Jason's experience in Vice City's underworld makes him an invaluable partner.",
      icon: Shield,
      traits: ["Combat Expert", "Local Connections", "Driving Skills"],
      background: "Grew up in Vice City's toughest neighborhoods, learned to survive through street smarts."
    },
    {
      name: "Supporting Cast",
      role: "The Network",
      description: "A diverse cast of allies and enemies, each with their own motivations and storylines.",
      icon: User,
      traits: ["Diverse Backgrounds", "Unique Skills", "Complex Relationships"],
      background: "From corrupt cops to rival criminals, every character has depth and purpose."
    }
  ];

  return (
    <section id="characters" className="gta-section bg-gradient-to-b from-black to-gta-dark">
      <div className="gta-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span className="gradient-text">Characters</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Follow the intertwining stories of compelling characters as they navigate the criminal 
            underworld of Leonida. Each character brings unique skills and perspectives to the narrative.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {characters.map((character, index) => {
            const Icon = character.icon;
            return (
              <div 
                key={character.name}
                className="bg-gradient-to-br from-black to-gta-dark/80 border-2 border-gta-neon/30 rounded-lg p-6 hover:border-gta-neon/60 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gta-neon to-gta-teal rounded-full flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-gta-dark" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{character.name}</h3>
                    <p className="text-gta-neon text-sm font-semibold">{character.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4">{character.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-gta-teal font-semibold mb-2">Key Traits:</h4>
                  <ul className="space-y-1">
                    {character.traits.map((trait) => (
                      <li key={trait} className="flex items-center text-sm text-gray-300">
                        <Heart className="w-3 h-3 text-gta-orange mr-2" />
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gta-neon/20">
                  <p className="text-xs text-gray-500">{character.background}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gta-purple/20 to-gta-pink/20 rounded-lg p-8 border border-gta-purple/30">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Dual Protagonist System</h3>
            <p className="text-gray-300 text-lg">
              For the first time in GTA history, experience the story through the eyes of two main characters. 
              Switch between Lucia and Jason to tackle missions from different perspectives, each with 
              unique abilities and story arcs that interweave throughout the game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;

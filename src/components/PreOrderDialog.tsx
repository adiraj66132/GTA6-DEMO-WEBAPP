
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from '@/components/ui/dialog';
import { Check, Star } from 'lucide-react';

interface PreOrderDialogProps {
  children: React.ReactNode;
}

const PreOrderDialog = ({ children }: PreOrderDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-gta-dark via-black to-gta-dark border-2 border-gta-neon/50 max-w-md mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-gta-neon/10 to-gta-teal/10 rounded-lg"></div>
        <div className="relative z-10">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-gta-neon to-gta-teal rounded-full flex items-center justify-center animate-pulse">
              <Check size={40} className="text-gta-dark" />
            </div>
            <DialogTitle className="text-2xl font-bold gradient-text">
              Pre-Order Confirmed!
            </DialogTitle>
            <DialogDescription className="text-gray-300 text-lg">
              Welcome to the criminal underworld of Leonida. Your copy of GTA VI has been reserved!
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-4">
            <div className="bg-black/60 border border-gta-neon/30 rounded-lg p-4">
              <h3 className="text-gta-neon font-bold mb-2 flex items-center">
                <Star size={16} className="mr-2" />
                What's Included:
              </h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Digital copy of GTA VI</li>
                <li>• Exclusive Vice City vehicle pack</li>
                <li>• 48-hour early access</li>
                <li>• Digital soundtrack</li>
              </ul>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">
                You'll receive a confirmation email shortly
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="gta-button w-full"
              >
                Continue to Vice City
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreOrderDialog;

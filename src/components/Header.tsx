
import React from 'react';
import { Bell, Home, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CryptoTicker from './CryptoTicker';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="w-full overflow-hidden">
        <CryptoTicker />
      </div>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-gradient font-bold text-2xl">SolanaPulse</div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10">
            <User className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button className="bg-solana-purple hover:bg-solana-purple/90 text-white">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

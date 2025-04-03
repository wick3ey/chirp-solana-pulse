
import React, { useState } from 'react';
import { Bell, Home, Search, User, Menu, X, MessageCircle, Wallet, BarChart2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CryptoTicker from './CryptoTicker';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="w-full overflow-hidden">
        <CryptoTicker />
      </div>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-gradient font-bold text-2xl">SolanaPulse</div>
          <div className="bg-solana-purple text-xs px-2 py-0.5 rounded-md text-white font-medium">BETA</div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10 relative group">
            <Home className="h-5 w-5" />
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-xs">Home</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10 relative group">
            <Search className="h-5 w-5" />
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-xs">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10 relative group">
            <Bell className="h-5 w-5" />
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-xs">Notifications</span>
            <span className="absolute top-1 right-1 h-2 w-2 bg-solana-purple rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10 relative group">
            <MessageCircle className="h-5 w-5" />
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-xs">Messages</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10 relative group">
            <BarChart2 className="h-5 w-5" />
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-xs">Analytics</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10 relative group">
            <User className="h-5 w-5" />
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-xs">Profile</span>
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button className="bg-gradient-to-r from-solana-purple to-solana-blue hover:opacity-90 text-white">
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
          <Button 
            className="md:hidden" 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-slide-up">
          <div className="flex flex-col p-4">
            <Button variant="ghost" className="justify-start" asChild>
              <a href="/" className="flex items-center">
                <Home className="h-5 w-5 mr-2" /> Home
              </a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="#" className="flex items-center">
                <Search className="h-5 w-5 mr-2" /> Search
              </a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="#" className="flex items-center">
                <Bell className="h-5 w-5 mr-2" /> Notifications
                <span className="ml-2 h-2 w-2 bg-solana-purple rounded-full"></span>
              </a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="#" className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" /> Messages
              </a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="#" className="flex items-center">
                <BarChart2 className="h-5 w-5 mr-2" /> Analytics
              </a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="#" className="flex items-center">
                <User className="h-5 w-5 mr-2" /> Profile
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

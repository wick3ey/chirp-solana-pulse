
import React from 'react';
import Header from '@/components/Header';
import Feed from '@/components/Feed';
import RightSidebar from '@/components/RightSidebar';
import { Rocket, MessageSquare, Users, Home, Search, Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1 container flex gap-6 pt-4 pb-16">
        {/* Left sidebar */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-20 card-gradient rounded-xl p-4 animate-entrance">
            <div className="text-gradient font-bold text-xl mb-3">SolanaPulse</div>
            <p className="text-sm text-muted-foreground mb-5">Join the Solana community and stay updated with the latest trends and discussions in the ecosystem.</p>
            
            <div className="mt-4 space-y-1">
              <Button variant="ghost" className="w-full justify-start hover:bg-white/10 group">
                <Home className="w-5 h-5 mr-3 text-solana-purple group-hover:text-solana-blue transition-colors" />
                <span className="group-hover:text-white transition-colors">Home</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-white/10 group">
                <Search className="w-5 h-5 mr-3 group-hover:text-solana-blue transition-colors" />
                <span className="group-hover:text-white transition-colors">Explore</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-white/10 group">
                <Bell className="w-5 h-5 mr-3 group-hover:text-solana-blue transition-colors" />
                <span className="group-hover:text-white transition-colors">Notifications</span>
                <span className="ml-auto bg-solana-purple rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-white/10 group">
                <MessageSquare className="w-5 h-5 mr-3 group-hover:text-solana-blue transition-colors" />
                <span className="group-hover:text-white transition-colors">Messages</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-white/10 group">
                <Users className="w-5 h-5 mr-3 group-hover:text-solana-blue transition-colors" />
                <span className="group-hover:text-white transition-colors">Communities</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-white/10 group">
                <Settings className="w-5 h-5 mr-3 group-hover:text-solana-blue transition-colors" />
                <span className="group-hover:text-white transition-colors">Settings</span>
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="web3-container p-4 rounded-xl animate-pulse-bg">
                <div className="flex items-center mb-3">
                  <Rocket className="w-4 h-4 text-solana-purple mr-2" />
                  <h3 className="font-medium">Get Started with Web3</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Create your web3 wallet and join the decentralized ecosystem.</p>
                <Button variant="outline" className="w-full bg-solana-purple/20 border-solana-purple/50 text-white hover:bg-solana-purple/30">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 animate-entrance" style={{animationDelay: '0.1s'}}>
          <Feed />
        </div>
        
        {/* Right sidebar */}
        <div className="hidden lg:block shrink-0 animate-entrance" style={{animationDelay: '0.2s'}}>
          <RightSidebar />
        </div>
      </main>
      
      {/* Mobile fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-lg border-t border-border md:hidden z-40">
        <div className="flex justify-around py-2">
          <Button variant="ghost" size="icon" className="text-foreground/80">
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80">
            <Bell className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80">
            <MessageSquare className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80">
            <Users className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

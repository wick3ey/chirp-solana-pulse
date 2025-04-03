
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Compass } from "lucide-react";

const ExploreHeader: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-solana-purple/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="flex flex-col space-y-4 p-4">
          <h1 className="text-4xl font-bold tracking-tight text-gradient animate-entrance">
            Explorer
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl animate-slide-up" style={{animationDelay: "100ms"}}>
            Discover the latest trends, news, and opportunities in the Solana ecosystem
          </p>
          
          <div className="relative max-w-md animate-slide-up" style={{animationDelay: "200ms"}}>
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search markets, tokens, NFTs..." 
              className="pl-10 bg-muted/50 backdrop-blur-sm border-white/10 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;

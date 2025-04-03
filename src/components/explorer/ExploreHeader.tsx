
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingUp, Newspaper, Image as ImageIcon, BarChart3, Compass } from "lucide-react";

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
      
      <Tabs defaultValue="trending" className="w-full px-4 animate-slide-up" style={{animationDelay: "300ms"}}>
        <TabsList className="w-full mb-2 bg-muted/40 p-1 space-x-1">
          <TabsTrigger value="trending" className="data-[state=active]:bg-white/10">
            <TrendingUp className="h-4 w-4 mr-2" />
            Trending
          </TabsTrigger>
          <TabsTrigger value="news" className="data-[state=active]:bg-white/10">
            <Newspaper className="h-4 w-4 mr-2" />
            News
          </TabsTrigger>
          <TabsTrigger value="nfts" className="data-[state=active]:bg-white/10">
            <ImageIcon className="h-4 w-4 mr-2" />
            NFTs
          </TabsTrigger>
          <TabsTrigger value="markets" className="data-[state=active]:bg-white/10">
            <BarChart3 className="h-4 w-4 mr-2" />
            Markets
          </TabsTrigger>
          <TabsTrigger value="discover" className="data-[state=active]:bg-white/10">
            <Compass className="h-4 w-4 mr-2" />
            Discover
          </TabsTrigger>
        </TabsList>

        {/* Tab contents will be handled by the page layout - this is just for navigation */}
        <TabsContent value="trending"></TabsContent>
        <TabsContent value="news"></TabsContent>
        <TabsContent value="nfts"></TabsContent>
        <TabsContent value="markets"></TabsContent>
        <TabsContent value="discover"></TabsContent>
      </Tabs>
    </div>
  );
};

export default ExploreHeader;

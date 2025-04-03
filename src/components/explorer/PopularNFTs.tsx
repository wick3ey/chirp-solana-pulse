
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Image as ImageIcon, 
  TrendingUp, 
  Clock, 
  Zap, 
  ChevronRight, 
  ShoppingBag, 
  BarChart 
} from "lucide-react";
import { cn } from "@/lib/utils";

type Collection = {
  id: string;
  name: string;
  image: string;
  floorPrice: number;
  volume24h: number;
  volumeChange: number;
  items: number;
  owners: number;
  isVerified: boolean;
};

const collections: Collection[] = [
  {
    id: "1",
    name: "DeGods",
    image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.degods.com/g/0.png",
    floorPrice: 35.2,
    volume24h: 1245.8,
    volumeChange: 12.4,
    items: 10000,
    owners: 4582,
    isVerified: true
  },
  {
    id: "2",
    name: "Okay Bears",
    image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://arweave.net/ixNs79Gk9RGcttckU6E-WYpVMR15zdIUZPWTfWUkKmI?ext=png",
    floorPrice: 69.5,
    volume24h: 2354.6,
    volumeChange: 8.7,
    items: 10000,
    owners: 5231,
    isVerified: true
  },
  {
    id: "3",
    name: "Claynosaurz",
    image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeihpiv6lh6ttbodft3j2rmz6otqbwdaouoawqhg2j2dujsjfb6qnaq.ipfs.nftstorage.link/",
    floorPrice: 5.8,
    volume24h: 765.2,
    volumeChange: -3.2,
    items: 4444,
    owners: 2134,
    isVerified: true
  },
  {
    id: "4",
    name: "Famous Fox Federation",
    image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://arweave.net/aU_QhLWgVpOlUjVNKLEiL0_frZMIekxc-rYzI9oF7F8?ext=png",
    floorPrice: 8.7,
    volume24h: 542.1,
    volumeChange: 5.4,
    items: 7777,
    owners: 3456,
    isVerified: true
  },
  {
    id: "5",
    name: "Solana Monkey Business",
    image: "https://i.seadn.io/gae/B47_wazXtRL0XYl0oC_L-U1KNfyIC59uf959MUmSHMXtnoiyPDGLh5S4mfohXdFVsNnYl5OcN0CYZL4UGvt9nhliM3Q1_QnUNK0?auto=format&dpr=1&w=1000",
    floorPrice: 14.5,
    volume24h: 879.3,
    volumeChange: 2.1,
    items: 5000,
    owners: 2789,
    isVerified: true
  }
];

const recentListings = [
  {
    id: "l1",
    name: "DeGods #4231",
    image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.degods.com/g/4231.png",
    price: 42.5,
    collection: "DeGods",
    listedTime: "2 mins ago"
  },
  {
    id: "l2",
    name: "Okay Bear #2142",
    image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://arweave.net/ZJeD1UjGxEyU4K4-XcXX88RoXYrqo-fYfZmcAIgj2t4?ext=png",
    price: 75.0,
    collection: "Okay Bears",
    listedTime: "5 mins ago"
  },
  {
    id: "l3",
    name: "SMB #2165",
    image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://arweave.net/U_1Ym5yQYPfu0LAf6Q5-oHYVCbNkRL9JjxMYth-fw6g?ext=png",
    price: 16.9,
    collection: "Solana Monkey Business",
    listedTime: "12 mins ago"
  }
];

const PopularNFTs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("collections");
  
  return (
    <div className="animate-fade-in" style={{animationDelay: "1000ms"}}>
      <Card className="card-gradient overflow-hidden border-white/5 mb-10">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-solana-green" />
              <CardTitle className="text-lg">NFT Market</CardTitle>
            </div>
            
            <Button variant="ghost" size="sm" className="text-xs">
              View all <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </CardHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-6">
            <TabsList className="bg-muted/40 grid w-full grid-cols-3">
              <TabsTrigger value="collections" className="data-[state=active]:bg-white/10">
                <BarChart className="h-4 w-4 mr-2" />
                Collections
              </TabsTrigger>
              <TabsTrigger value="trending" className="data-[state=active]:bg-white/10">
                <TrendingUp className="h-4 w-4 mr-2" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="new-listings" className="data-[state=active]:bg-white/10">
                <Zap className="h-4 w-4 mr-2" />
                New Listings
              </TabsTrigger>
            </TabsList>
          </div>
          
          <CardContent className="pt-4">
            <TabsContent value="collections" className="m-0">
              <div className="space-y-1">
                {collections.map((collection, index) => (
                  <div 
                    key={collection.id}
                    className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
                    style={{animationDelay: `${1100 + index * 100}ms`}}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <img 
                            src={collection.image} 
                            alt={collection.name} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                          />
                        </div>
                        {collection.isVerified && (
                          <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-0.5 border border-background">
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {collection.name}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{collection.items.toLocaleString()} items</span>
                          <span className="mx-1">•</span>
                          <span>{collection.owners.toLocaleString()} owners</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-medium">{collection.floorPrice} SOL</div>
                      <div className={cn("text-xs flex items-center justify-end", 
                        collection.volumeChange > 0 ? "text-solana-green" : "text-destructive"
                      )}>
                        {collection.volumeChange > 0 ? "+" : ""}{collection.volumeChange}%
                      </div>
                    </div>
                    
                    <div className="text-right ml-6">
                      <div className="font-medium">{collection.volume24h} SOL</div>
                      <div className="text-xs text-muted-foreground">24h Vol</div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="trending" className="m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {collections.slice(0, 3).map((collection) => (
                  <div 
                    key={collection.id}
                    className="relative overflow-hidden rounded-lg group cursor-pointer"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={collection.image} 
                        alt={collection.name} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                      <h3 className="font-bold text-lg text-white group-hover:text-solana-green transition-colors">
                        {collection.name}
                      </h3>
                      
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-sm text-white/70">
                          Floor: <span className="text-white">{collection.floorPrice} SOL</span>
                        </div>
                        
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "border border-white/20 bg-black/50 backdrop-blur", 
                            collection.volumeChange > 0 ? "text-solana-green" : "text-destructive"
                          )}
                        >
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {collection.volumeChange > 0 ? "+" : ""}{collection.volumeChange}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new-listings" className="m-0">
              <div className="space-y-3">
                {recentListings.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                      </div>
                      
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.collection}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-medium">{item.price} SOL</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.listedTime}
                      </div>
                    </div>
                    
                    <Button size="sm" variant="ghost" className="ml-4">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default PopularNFTs;


import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Flame, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const trendingAssets = [
  {
    id: "1",
    name: "Solana",
    symbol: "SOL",
    logoUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
    price: 136.42,
    change24h: 4.87,
    marketCap: "58.2B",
    volume: "2.1B",
    sparklineData: [25, 27, 28, 25, 30, 32, 35, 37, 35, 40, 42, 40, 38, 42, 45],
    tag: "trending"
  },
  {
    id: "2",
    name: "Jupiter",
    symbol: "JUP",
    logoUrl: "https://cryptologos.cc/logos/jupiter-jup-logo.png",
    price: 1.84,
    change24h: 12.35,
    marketCap: "1.8B",
    volume: "543M",
    sparklineData: [10, 12, 15, 14, 16, 18, 20, 22, 24, 22, 24, 25, 28, 30, 32],
    tag: "hot"
  },
  {
    id: "3",
    name: "Bonk",
    symbol: "BONK",
    logoUrl: "https://cryptologos.cc/logos/bonk-bonk-logo.png",
    price: 0.000022,
    change24h: 9.45,
    marketCap: "1.2B",
    volume: "324M",
    sparklineData: [5, 8, 7, 9, 8, 10, 12, 15, 14, 16, 17, 18, 17, 19, 20],
    tag: "trending"
  },
  {
    id: "4",
    name: "Raydium",
    symbol: "RAY",
    logoUrl: "https://cryptologos.cc/logos/raydium-ray-logo.png",
    price: 0.78,
    change24h: -2.34,
    marketCap: "245M",
    volume: "89M",
    sparklineData: [20, 18, 16, 15, 17, 15, 14, 13, 12, 14, 15, 13, 11, 12, 10],
    tag: "popular"
  },
  {
    id: "5",
    name: "Orca",
    symbol: "ORCA",
    logoUrl: "https://cryptologos.cc/logos/orca-orca-logo.png", 
    price: 1.24,
    change24h: 3.12,
    marketCap: "185M",
    volume: "42M",
    sparklineData: [10, 12, 11, 13, 12, 14, 13, 15, 16, 14, 15, 17, 16, 18, 19],
    tag: "popular"
  }
];

// A simple sparkline chart component
const Sparkline: React.FC<{ data: number[], color: string }> = ({ data, color }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');
  
  return (
    <svg width="100" height="40" viewBox="0 0 100 100" preserveAspectRatio="none" className="ml-auto">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const TrendingAssets: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const filteredAssets = filter === "all" 
    ? trendingAssets 
    : trendingAssets.filter(asset => asset.tag === filter);
  
  return (
    <div className="animate-fade-in" style={{animationDelay: "600ms"}}>
      <Card className="card-gradient overflow-hidden border-white/5">
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-solana-purple" />
            <CardTitle className="text-lg">Trending Assets</CardTitle>
          </div>
          
          <div className="flex gap-1">
            <Badge 
              variant={filter === "all" ? "default" : "outline"} 
              className="cursor-pointer"
              onClick={() => setFilter("all")}
            >
              All
            </Badge>
            <Badge 
              variant={filter === "trending" ? "default" : "outline"} 
              className="cursor-pointer"
              onClick={() => setFilter("trending")}
            >
              <TrendingUp className="h-3 w-3 mr-1" /> Trending
            </Badge>
            <Badge 
              variant={filter === "hot" ? "default" : "outline"} 
              className="cursor-pointer"
              onClick={() => setFilter("hot")}
            >
              <Flame className="h-3 w-3 mr-1" /> Hot
            </Badge>
            <Badge 
              variant={filter === "popular" ? "default" : "outline"} 
              className="cursor-pointer"
              onClick={() => setFilter("popular")}
            >
              <Star className="h-3 w-3 mr-1" /> Popular
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filteredAssets.map((asset, index) => (
              <div 
                key={asset.id} 
                className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors"
                style={{animationDelay: `${700 + index * 100}ms`}}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 bg-white/10 rounded-full overflow-hidden flex items-center justify-center">
                    <img src={asset.logoUrl} alt={asset.name} className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium flex items-center">
                      {asset.name} 
                      <span className="text-sm text-muted-foreground ml-1">({asset.symbol})</span>
                      
                      {asset.tag === "hot" && (
                        <Badge variant="outline" className="ml-2 bg-red-500/20 text-red-400 border-red-500/30">
                          <Flame className="h-3 w-3 mr-1" /> Hot
                        </Badge>
                      )}
                      
                      {asset.tag === "trending" && (
                        <Badge variant="outline" className="ml-2 bg-solana-purple/20 text-solana-purple border-solana-purple/30">
                          <TrendingUp className="h-3 w-3 mr-1" /> Trending
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Market Cap: ${asset.marketCap} • Vol: ${asset.volume}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Sparkline 
                    data={asset.sparklineData} 
                    color={asset.change24h > 0 ? "#14F195" : "#FF6B6B"} 
                  />
                  
                  <div>
                    <div className="font-medium text-right">${asset.price.toLocaleString()}</div>
                    <div className={cn("text-sm flex items-center justify-end", 
                      asset.change24h > 0 ? "text-solana-green" : "text-destructive")}
                    >
                      {asset.change24h > 0 ? (
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 mr-1" />
                      )}
                      {Math.abs(asset.change24h)}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingAssets;


import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Clock, ExternalLink } from "lucide-react";

const news = [
  {
    id: "1",
    title: "Solana TVL Reaches New All-Time High of $12B Amid DeFi Boom",
    source: "CryptoNews",
    timeAgo: "2 hours ago",
    tag: "DeFi",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Jupiter DEX Volume Surpasses $2B in Daily Trades as SOL Price Rallies",
    source: "BlockchainReport",
    timeAgo: "4 hours ago",
    tag: "Market",
    imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Bonk Announces New Tokenomics and Staking Program Launch",
    source: "SolanaToday",
    timeAgo: "6 hours ago",
    tag: "Memecoins",
    imageUrl: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Top Solana NFT Collections Seeing Surge in Trading Volume",
    source: "NFTInsider",
    timeAgo: "10 hours ago",
    tag: "NFTs",
    imageUrl: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Solana Blockchain Performance Sees Improvement After Latest Upgrade",
    source: "CryptoNews",
    timeAgo: "12 hours ago",
    tag: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400&auto=format&fit=crop"
  }
];

const tagColors = {
  DeFi: "bg-green-500/20 text-green-400 border-green-500/30",
  Market: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Memecoins: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  NFTs: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Technology: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
};

const NewsList: React.FC = () => {
  return (
    <div className="animate-fade-in" style={{animationDelay: "800ms"}}>
      <Card className="card-gradient overflow-hidden border-white/5">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Newspaper className="h-5 w-5 text-solana-blue" />
            <CardTitle className="text-lg">Latest News</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {news.map((item, index) => (
              <div 
                key={item.id} 
                className="group flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors hover:cursor-pointer"
                style={{animationDelay: `${900 + index * 100}ms`}}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                  />
                </div>
                
                <div className="flex flex-col flex-1">
                  <h3 className="font-medium text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="mr-2">{item.source}</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.timeAgo}
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <Badge 
                        variant="outline" 
                        className={
                          tagColors[item.tag as keyof typeof tagColors] || 
                          "bg-primary/20 text-primary-foreground border-primary/30"
                        }
                      >
                        {item.tag}
                      </Badge>
                      
                      <ExternalLink className="ml-2 h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
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

export default NewsList;

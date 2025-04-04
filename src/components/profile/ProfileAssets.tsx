
import React, { useState } from "react";
import { Profile } from "@/models/Profile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronDown, 
  ChevronUp, 
  Wallet, 
  ExternalLink, 
  LineChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  Sparkles,
  Banknote,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ProfileAssetsProps {
  profile: Profile;
}

const ProfileAssets: React.FC<ProfileAssetsProps> = ({ profile }) => {
  const [expandedAsset, setExpandedAsset] = useState<string | null>(null);
  
  const toggleAssetExpand = (assetId: string) => {
    if (expandedAsset === assetId) {
      setExpandedAsset(null);
    } else {
      setExpandedAsset(assetId);
    }
  };

  // Calculate total portfolio value
  const totalPortfolioValue = profile.assets.reduce((total, asset) => total + asset.value, 0);

  // Calculate portfolio growth
  const portfolioGrowth = profile.assets.reduce(
    (growth, asset) => growth + asset.value * (asset.percentChange24h / 100),
    0
  );
  
  const portfolioGrowthPercent = (portfolioGrowth / totalPortfolioValue) * 100;

  return (
    <Card className="overflow-hidden border-border/50 shadow-lg bg-gradient-to-br from-card to-card/90">
      <CardHeader className="pb-4 border-b border-border/30">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-md">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <span>Wallet</span>
            </CardTitle>
            <CardDescription className="mt-2">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-foreground">{profile.walletBalance.sol.toFixed(2)} SOL</span>
                <span className="text-sm text-muted-foreground">${profile.walletBalance.usd.toLocaleString()}</span>
              </div>
            </CardDescription>
          </div>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1 text-xs">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4" align="end">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-primary/10">
                    <Wallet className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-medium">Wallet Details</h4>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Address</p>
                  <p className="text-xs font-medium break-all">{profile.walletAddress}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="w-full text-xs h-8 gap-1">
                    <ExternalLink className="w-3.5 h-3.5" />
                    View on Explorer
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-muted/30 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <div className="bg-secondary/10 p-1.5 rounded-full">
                <Banknote className="w-3.5 h-3.5 text-secondary" />
              </div>
              <span className="text-xs text-muted-foreground">Portfolio Value</span>
            </div>
            <p className="text-lg font-semibold mt-1">${totalPortfolioValue.toLocaleString()}</p>
          </div>
          <div className="bg-muted/30 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <div className="bg-secondary/10 p-1.5 rounded-full">
                <BarChart3 className="w-3.5 h-3.5 text-secondary" />
              </div>
              <span className="text-xs text-muted-foreground">24h Change</span>
            </div>
            <div className="flex items-center mt-1">
              {portfolioGrowthPercent >= 0 ? (
                <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
              )}
              <p className={cn(
                "text-lg font-semibold",
                portfolioGrowthPercent >= 0 ? "text-green-500" : "text-red-500"
              )}>
                {portfolioGrowthPercent.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <Tabs defaultValue="assets" className="w-full">
          <TabsList className="w-full grid grid-cols-2 p-1 bg-background/5">
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="nfts">NFTs</TabsTrigger>
          </TabsList>

          <TabsContent value="assets" className="p-0 animate-fade-in">
            <div className="divide-y divide-border/30">
              {profile.assets.map((asset) => (
                <div key={asset.id} className="py-3 px-4 hover:bg-muted/10 transition-colors">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => toggleAssetExpand(asset.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img 
                          src={asset.iconUrl} 
                          alt={asset.name} 
                          className="w-10 h-10 rounded-full bg-muted/20 p-0.5 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://cryptologos.cc/logos/solana-sol-logo.png";
                          }}
                        />
                        {asset.percentChange24h > 3 && (
                          <div className="absolute -top-1 -right-1">
                            <div className="bg-secondary/20 p-0.5 rounded-full">
                              <Sparkles className="w-3.5 h-3.5 text-secondary" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{asset.name}</div>
                        <div className="text-xs text-muted-foreground">{asset.symbol}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-medium">{asset.amount.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">${asset.value.toLocaleString()}</div>
                      </div>
                      {expandedAsset === asset.id ? (
                        <ChevronUp className="w-4.5 h-4.5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-4.5 h-4.5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                  
                  {expandedAsset === asset.id && (
                    <div className="mt-4 bg-muted/10 p-4 rounded-xl border border-border/10 animate-fade-in">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">Price Change (24h)</div>
                          <div className="flex items-center">
                            {asset.percentChange24h >= 0 ? (
                              <ArrowUpRight className="w-3.5 h-3.5 text-green-500 mr-1" />
                            ) : (
                              <ArrowDownRight className="w-3.5 h-3.5 text-red-500 mr-1" />
                            )}
                            <span className={cn(
                              "font-medium",
                              asset.percentChange24h >= 0 ? "text-green-500" : "text-red-500"
                            )}>
                              {asset.percentChange24h >= 0 ? "+" : ""}{asset.percentChange24h.toFixed(2)}%
                            </span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">Current Price</div>
                          <div className="font-medium">${(asset.value / asset.amount).toFixed(2)}</div>
                        </div>
                      </div>
                      
                      <Separator className="my-3 bg-border/20" />
                      
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">Market Cap</div>
                          <div className="font-medium">${(asset.value * 1000).toLocaleString()}</div>
                        </div>
                        
                        <Button size="sm" variant="outline" className="text-xs h-8 gap-1">
                          <LineChart className="w-3.5 h-3.5" />
                          <span>Price Chart</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nfts" className="animate-fade-in">
            <div className="grid grid-cols-2 gap-3 p-4">
              {profile.nfts.map((nft) => (
                <div key={nft.id} className="rounded-lg overflow-hidden border border-border/20 hover:border-primary/30 transition-colors bg-gradient-to-br from-muted/20 to-muted/5">
                  <div className="aspect-square overflow-hidden bg-black/20">
                    <img 
                      src={nft.image} 
                      alt={nft.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <div className="font-medium truncate">{nft.name}</div>
                    <div className="flex justify-between items-center mt-1.5">
                      <div className="text-xs text-muted-foreground truncate max-w-[120px]">{nft.collection}</div>
                      <div className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full">
                        <img 
                          src="https://cryptologos.cc/logos/solana-sol-logo.png" 
                          alt="SOL" 
                          className="w-3 h-3"
                        />
                        <div className="text-xs font-medium">{nft.floorPrice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileAssets;


import React, { useState } from "react";
import { Profile } from "@/models/Profile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp, Wallet, ExternalLink, LineChart, ArrowUpRight, ArrowDownRight, Sparkles } from "lucide-react";
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

  return (
    <Card className="overflow-hidden border-border/50 animate-fade-in bg-gradient-to-br from-card to-card/90">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-md">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <span>Wallet</span>
            </CardTitle>
            <CardDescription className="mt-1">
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
            <PopoverContent className="w-80 p-3" align="end">
              <div className="space-y-2">
                <h4 className="font-medium">Wallet Details</h4>
                <p className="text-xs text-muted-foreground break-all">{profile.walletAddress}</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" className="w-full text-xs h-8">
                    <ExternalLink className="w-3.5 h-3.5 mr-1" /> View on Explorer
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="bg-muted/30 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground">Total Portfolio Value</p>
            <p className="text-lg font-medium">${totalPortfolioValue.toLocaleString()}</p>
          </div>
          <div className="bg-muted/30 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground">Assets</p>
            <p className="text-lg font-medium">{profile.assets.length + profile.nfts.length}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <Tabs defaultValue="assets" className="w-full">
          <TabsList className="bg-muted/30 w-full grid grid-cols-2">
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="nfts">NFTs</TabsTrigger>
          </TabsList>

          <TabsContent value="assets" className="p-0">
            <div className="divide-y divide-border/50">
              {profile.assets.map((asset) => (
                <div key={asset.id} className="py-3 px-4 hover:bg-muted/20 transition-colors">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => toggleAssetExpand(asset.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img 
                          src={asset.iconUrl} 
                          alt={asset.name} 
                          className="w-10 h-10 rounded-full bg-muted/30 p-0.5"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://cryptologos.cc/logos/solana-sol-logo.png";
                          }}
                        />
                        {asset.percentChange24h > 3 && (
                          <div className="absolute -top-1 -right-1">
                            <Sparkles className="w-4 h-4 text-secondary" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{asset.name}</p>
                        <p className="text-xs text-muted-foreground">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium">{asset.amount.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">${asset.value.toLocaleString()}</p>
                      </div>
                      {expandedAsset === asset.id ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                  
                  {expandedAsset === asset.id && (
                    <div className="mt-4 bg-muted/10 p-4 rounded-lg border border-border/30 animate-fade-in">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Price Change (24h)</p>
                          <div className="flex items-center">
                            {asset.percentChange24h >= 0 ? (
                              <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                            ) : (
                              <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                            )}
                            <p className={cn(
                              "font-medium",
                              asset.percentChange24h >= 0 ? "text-green-500" : "text-red-500"
                            )}>
                              {asset.percentChange24h >= 0 ? "+" : ""}{asset.percentChange24h.toFixed(2)}%
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Current Price</p>
                          <p className="font-medium">${(asset.value / asset.amount).toFixed(2)}</p>
                        </div>
                      </div>
                      
                      <Separator className="my-3 bg-border/30" />
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Market Cap</p>
                          <p className="font-medium">${(asset.value * 1000).toLocaleString()}</p>
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

          <TabsContent value="nfts" className="p-0">
            <div className="grid grid-cols-2 gap-3 p-3">
              {profile.nfts.map((nft) => (
                <div key={nft.id} className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-colors bg-gradient-to-br from-muted/20 to-muted/10">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={nft.image} 
                      alt={nft.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-medium truncate">{nft.name}</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs text-muted-foreground">{nft.collection}</p>
                      <div className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full">
                        <img 
                          src="https://cryptologos.cc/logos/solana-sol-logo.png" 
                          alt="SOL" 
                          className="w-3 h-3"
                        />
                        <p className="text-xs font-medium">{nft.floorPrice}</p>
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

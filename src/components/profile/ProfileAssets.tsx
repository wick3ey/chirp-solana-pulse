
import React, { useState } from "react";
import { Profile } from "@/models/Profile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp, Wallet } from "lucide-react";

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

  return (
    <Card className="overflow-hidden bg-card border-border/50">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Wallet className="w-5 h-5 text-primary" />
              Wallet
            </CardTitle>
            <CardDescription>
              Balance: {profile.walletBalance.sol.toFixed(2)} SOL (${profile.walletBalance.usd.toLocaleString()})
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="assets">
          <TabsList className="bg-muted/30 w-full grid grid-cols-2">
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="nfts">NFTs</TabsTrigger>
          </TabsList>

          <TabsContent value="assets" className="p-0">
            <div className="divide-y divide-border/50">
              {profile.assets.map((asset) => (
                <div key={asset.id} className="py-3 px-4 hover:bg-muted/20">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => toggleAssetExpand(asset.id)}
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={asset.iconUrl} 
                        alt={asset.name} 
                        className="w-8 h-8 rounded-full"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://cryptologos.cc/logos/solana-sol-logo.png";
                        }}
                      />
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
                    <div className="mt-3 pl-10 text-sm grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-muted-foreground">Price Change (24h)</p>
                        <p className={asset.percentChange24h >= 0 ? "text-green-500" : "text-red-500"}>
                          {asset.percentChange24h >= 0 ? "+" : ""}{asset.percentChange24h.toFixed(2)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Current Price</p>
                        <p>${(asset.value / asset.amount).toFixed(2)}</p>
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
                <div key={nft.id} className="rounded-lg overflow-hidden bg-muted/20 border border-border/30 hover:border-primary/30 transition-colors">
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
                      <p className="text-xs font-medium">{nft.floorPrice} SOL</p>
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

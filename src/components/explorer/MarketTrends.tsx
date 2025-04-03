
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample data - in a real app, this would come from an API
const data = [
  { name: "Jan", SOL: 40, BTC: 24 },
  { name: "Feb", SOL: 30, BTC: 25 },
  { name: "Mar", SOL: 45, BTC: 27 },
  { name: "Apr", SOL: 55, BTC: 29 },
  { name: "May", SOL: 65, BTC: 30 },
  { name: "Jun", SOL: 70, BTC: 28 },
  { name: "Jul", SOL: 60, BTC: 29 },
  { name: "Aug", SOL: 90, BTC: 32 },
  { name: "Sep", SOL: 100, BTC: 31 },
];

const marketSummary = [
  { name: "SOL", price: 134.78, change: 4.35, volume: "1.24B", market: "Bull" },
  { name: "BTC", price: 58432.15, change: 1.24, volume: "23.5B", market: "Bull" },
  { name: "ETH", price: 3098.54, change: -2.12, volume: "14.2B", market: "Bear" },
  { name: "JUP", price: 2.34, change: 12.45, volume: "689M", market: "Bull" },
  { name: "BONK", price: 0.00000234, change: 24.75, volume: "324M", market: "Bull" },
];

const MarketTrends: React.FC = () => {
  return (
    <div className="animate-fade-in" style={{animationDelay: "400ms"}}>
      <div className="flex items-center mb-2">
        <TrendingUp className="h-5 w-5 mr-2 text-solana-green" />
        <h2 className="text-xl font-semibold">Market Trends</h2>
      </div>

      <Card className="card-gradient overflow-hidden border-white/5">
        <CardHeader className="pb-3">
          <CardTitle>Market Overview</CardTitle>
          <CardDescription>24h market performance for top assets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(23, 23, 37, 0.8)",
                    borderColor: "rgba(255,255,255,0.1)",
                    borderRadius: "0.5rem",
                    color: "white"
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="SOL" 
                  stroke="#9945FF" 
                  strokeWidth={2}
                  dot={{r: 4}}
                  activeDot={{r: 6, fill: "#9945FF", strokeWidth: 0}}
                />
                <Line 
                  type="monotone" 
                  dataKey="BTC" 
                  stroke="#F7931A" 
                  strokeWidth={2} 
                  dot={{r: 4}}
                  activeDot={{r: 6, fill: "#F7931A", strokeWidth: 0}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-muted-foreground text-sm border-b border-white/5">
                    <th className="text-left pb-2">Asset</th>
                    <th className="text-right pb-2">Price</th>
                    <th className="text-right pb-2">24h Change</th>
                    <th className="text-right pb-2">Volume</th>
                    <th className="text-right pb-2">Market</th>
                  </tr>
                </thead>
                <tbody>
                  {marketSummary.map((asset, index) => (
                    <tr 
                      key={asset.name} 
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      style={{animationDelay: `${500 + index * 100}ms`}}
                    >
                      <td className="py-3 text-left font-medium">{asset.name}</td>
                      <td className="py-3 text-right">${asset.price.toLocaleString()}</td>
                      <td className={cn("py-3 text-right flex items-center justify-end", 
                        asset.change > 0 ? "text-solana-green" : "text-destructive")}
                      >
                        {asset.change > 0 ? (
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                        )}
                        {Math.abs(asset.change)}%
                      </td>
                      <td className="py-3 text-right text-muted-foreground">{asset.volume}</td>
                      <td className={cn("py-3 text-right",
                        asset.market === "Bull" ? "text-solana-green" : "text-destructive")}
                      >
                        {asset.market}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketTrends;

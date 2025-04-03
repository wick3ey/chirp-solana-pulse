
import React from 'react';
import { cryptoTokens, formatMarketCap, formatPrice } from '@/services/mockData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MarketStats: React.FC = () => {
  const topTokens = cryptoTokens.slice(0, 5);

  return (
    <div className="card-gradient rounded-xl p-4 mb-4">
      <h3 className="font-semibold text-lg mb-3">Market Stats</h3>
      <div className="space-y-3">
        {topTokens.map(token => (
          <div key={token.id} className="flex items-center justify-between hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <img src={token.logo} alt={token.name} className="w-6 h-6" />
              <div>
                <div className="font-medium">{token.name}</div>
                <div className="text-xs text-muted-foreground">{token.symbol}</div>
              </div>
            </div>
            <div className="text-right">
              <div>{formatPrice(token.price)}</div>
              <div className={`text-xs flex items-center justify-end ${token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {token.change24h >= 0 ? (
                  <ChevronUp className="w-3 h-3 mr-0.5" />
                ) : (
                  <ChevronDown className="w-3 h-3 mr-0.5" />
                )}
                {Math.abs(token.change24h).toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-border">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>SOL Market Cap</span>
          <span>{formatMarketCap(67590000000)}</span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mt-1">
          <span>SOL 24h Volume</span>
          <span>{formatMarketCap(2968000000)}</span>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;

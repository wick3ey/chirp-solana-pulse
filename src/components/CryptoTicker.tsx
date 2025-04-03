
import React from 'react';
import { cryptoTokens, formatPrice } from '@/services/mockData';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const CryptoTicker: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-background to-background/80 backdrop-blur-md py-1.5 overflow-hidden border-b border-border/30">
      <div className="container flex items-center gap-3">
        <div className="flex items-center text-xs text-primary font-semibold gap-1">
          <Sparkles className="h-3 w-3 text-solana-purple" />
          <span>MARKET:</span>
        </div>
        <div className="flex animate-ticker whitespace-nowrap overflow-hidden">
          {[...cryptoTokens, ...cryptoTokens].map((token, index) => (
            <div key={`${token.id}-${index}`} className="flex items-center px-4 py-0.5 hover:bg-white/5 rounded-md transition-colors cursor-pointer group">
              <img src={token.logo} alt={token.name} className="w-4 h-4 mr-1.5" />
              <span className="font-medium mr-1.5">{token.symbol}</span>
              <span className="text-sm mr-1.5 group-hover:text-primary transition-colors">{formatPrice(token.price)}</span>
              <span className={`text-xs flex items-center ${token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {token.change24h >= 0 ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
                {Math.abs(token.change24h).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;

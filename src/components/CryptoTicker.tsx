
import React from 'react';
import { cryptoTokens, formatPrice } from '@/services/mockData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CryptoTicker: React.FC = () => {
  return (
    <div className="w-full bg-muted/30 py-1 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...cryptoTokens, ...cryptoTokens].map((token, index) => (
          <div key={`${token.id}-${index}`} className="flex items-center px-3 py-0.5">
            <img src={token.logo} alt={token.name} className="w-4 h-4 mr-1.5" />
            <span className="font-medium mr-1">{token.symbol}</span>
            <span className="text-sm mr-1">{formatPrice(token.price)}</span>
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
  );
};

export default CryptoTicker;


import React, { useState } from 'react';
import TweetCreate from './TweetCreate';
import TweetCard from './TweetCard';
import { tweets } from '@/services/mockData';
import { Filter, Flame, TrendingUp, GalleryVertical, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

type FilterOption = 'hot' | 'trending' | 'latest' | 'media';

const Feed: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('hot');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredTweets = tweets.sort((a, b) => {
    switch(activeFilter) {
      case 'hot':
        return b.likes - a.likes;
      case 'trending':
        return b.comments - a.comments;
      case 'latest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'media':
        return b.images ? -1 : a.images ? 1 : 0;
      default:
        return 0;
    }
  });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="w-full max-w-xl">
      <div className="sticky top-16 z-10 bg-background/80 backdrop-blur-md py-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-gradient">Solana Pulse</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleFilters}
            className="relative"
          >
            <Filter className="h-5 w-5" />
            {!showFilters && 
              <span className="absolute top-0 right-0 h-2 w-2 bg-solana-purple rounded-full"></span>
            }
          </Button>
        </div>
        
        {showFilters && (
          <div className="flex gap-2 pb-3 overflow-x-auto scrollbar-none animate-fade-in">
            <Button 
              size="sm" 
              variant={activeFilter === 'hot' ? 'default' : 'outline'} 
              className={`flex gap-1 flex-shrink-0 ${activeFilter === 'hot' ? 'bg-solana-purple' : ''}`}
              onClick={() => setActiveFilter('hot')}
            >
              <Flame className="h-4 w-4" />
              Hot
            </Button>
            <Button 
              size="sm"
              variant={activeFilter === 'trending' ? 'default' : 'outline'}
              className={`flex gap-1 flex-shrink-0 ${activeFilter === 'trending' ? 'bg-solana-purple' : ''}`}
              onClick={() => setActiveFilter('trending')}
            >
              <TrendingUp className="h-4 w-4" />
              Trending
            </Button>
            <Button 
              size="sm"
              variant={activeFilter === 'latest' ? 'default' : 'outline'}
              className={`flex gap-1 flex-shrink-0 ${activeFilter === 'latest' ? 'bg-solana-purple' : ''}`}
              onClick={() => setActiveFilter('latest')}
            >
              <Clock className="h-4 w-4" />
              Latest
            </Button>
            <Button 
              size="sm"
              variant={activeFilter === 'media' ? 'default' : 'outline'}
              className={`flex gap-1 flex-shrink-0 ${activeFilter === 'media' ? 'bg-solana-purple' : ''}`}
              onClick={() => setActiveFilter('media')}
            >
              <GalleryVertical className="h-4 w-4" />
              Media
            </Button>
          </div>
        )}
        
        <div className="flex gap-1 overflow-x-auto scrollbar-none py-1">
          <Badge variant="outline" className="flex-shrink-0 bg-muted/30 hover:bg-muted/50 cursor-pointer">
            #Solana
          </Badge>
          <Badge variant="outline" className="flex-shrink-0 bg-muted/30 hover:bg-muted/50 cursor-pointer">
            #DeFi
          </Badge>
          <Badge variant="outline" className="flex-shrink-0 bg-muted/30 hover:bg-muted/50 cursor-pointer">
            #NFT
          </Badge>
          <Badge variant="outline" className="flex-shrink-0 bg-muted/30 hover:bg-muted/50 cursor-pointer">
            #Web3
          </Badge>
          <Badge variant="outline" className="flex-shrink-0 bg-muted/30 hover:bg-muted/50 cursor-pointer">
            #Crypto
          </Badge>
        </div>
      </div>
      
      <div className="space-y-2 mt-2">
        <TweetCreate />
        
        <div className="space-y-4">
          {filteredTweets.map((tweet) => (
            <div key={tweet.id} className="animate-fade-in hover-scale">
              <TweetCard tweet={tweet} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;

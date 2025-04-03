
import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';
import { Tweet, formatNumber, formatTimeAgo } from '@/services/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TweetCardProps {
  tweet: Tweet;
}

const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(tweet.likes);
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  };

  return (
    <Link to={`/profile/${tweet.user.username}`} className="block">
      <div className="card-gradient rounded-xl p-4 mb-4 hover-scale">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src={tweet.user.avatar} 
                alt={tweet.user.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold truncate max-w-[120px]">{tweet.user.name}</span>
              {tweet.user.verified && (
                <span className="flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25s2.815-.916 3.437-2.25c.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                  </svg>
                </span>
              )}
              <span className="text-muted-foreground text-sm truncate max-w-[120px]">@{tweet.user.username}</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">{formatTimeAgo(tweet.createdAt)}</span>
            </div>
            <div className="mt-1 break-words">
              {tweet.content}
            </div>
            {tweet.images && tweet.images.length > 0 && (
              <div className="mt-3 rounded-lg overflow-hidden">
                <img 
                  src={tweet.images[0]} 
                  alt="Tweet image" 
                  className="w-full h-auto object-cover max-h-80"
                  loading="lazy"
                />
              </div>
            )}
            <div className="mt-3 flex items-center justify-between text-muted-foreground">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10"
                onClick={(e) => e.stopPropagation()}
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs">{formatNumber(tweet.comments)}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-green-500 hover:bg-green-500/10"
                onClick={(e) => e.stopPropagation()}
              >
                <Repeat2 className="h-4 w-4" />
                <span className="text-xs">{formatNumber(tweet.retweets)}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center gap-1.5 ${liked ? 'text-red-500' : 'text-muted-foreground'} hover:text-red-500 hover:bg-red-500/10`}
                onClick={handleLike}
              >
                <Heart className={`h-4 w-4 ${liked ? 'fill-red-500' : ''}`} />
                <span className="text-xs">{formatNumber(likes)}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10"
                onClick={(e) => e.stopPropagation()}
              >
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TweetCard;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Image, Link, Smile, Video } from 'lucide-react';

const TweetCreate: React.FC = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      console.log('Tweet posted:', content);
      setContent('');
    }
  };

  return (
    <div className="card-gradient rounded-xl p-4 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://avatars.githubusercontent.com/u/35243667?v=4" // placeholder avatar
              alt="Your avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <textarea
              className="w-full bg-transparent border-none outline-none resize-none placeholder:text-foreground/50 min-h-[80px]"
              placeholder="What's happening in Solana?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <Button type="button" variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                  <Image className="h-5 w-5" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                  <Video className="h-5 w-5" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                  <Link className="h-5 w-5" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                  <Smile className="h-5 w-5" />
                </Button>
              </div>
              <Button 
                type="submit" 
                className="bg-solana-purple hover:bg-solana-purple/90"
                disabled={content.trim() === ''}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetCreate;


import React from 'react';
import TweetCreate from './TweetCreate';
import TweetCard from './TweetCard';
import { tweets } from '@/services/mockData';

const Feed: React.FC = () => {
  return (
    <div className="w-full max-w-xl">
      <h2 className="text-lg font-semibold mb-4">Home</h2>
      <TweetCreate />
      <div>
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

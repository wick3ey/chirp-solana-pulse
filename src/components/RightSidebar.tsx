
import React from 'react';
import { Link } from 'react-router-dom';
import MarketStats from './MarketStats';
import NewsSection from './NewsSection';
import WhoToFollow from './WhoToFollow';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getProfileByUsername } from '@/services/profileMockData';

const RightSidebar: React.FC = () => {
  const defaultProfile = getProfileByUsername("solana_chad");
  
  return (
    <div className="w-[350px] h-screen overflow-auto pb-8 pr-4 hide-scrollbar">
      <div className="sticky top-20">
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-75 pointer-events-none"></div>
          <div className="glass rounded-xl p-3 mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search SolanaPulse"
                className="w-full bg-muted/50 text-foreground rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute right-3 top-2 text-muted-foreground">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {defaultProfile && (
            <Link to={`/profile/${defaultProfile.username}`} className="glass rounded-xl p-4 mb-4 block hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarImage src={defaultProfile.profileImage} />
                  <AvatarFallback>{defaultProfile.displayName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{defaultProfile.displayName}</h3>
                  <p className="text-sm text-muted-foreground">@{defaultProfile.username}</p>
                </div>
              </div>
              <div className="mt-2 text-sm">
                <p className="line-clamp-2 text-muted-foreground">{defaultProfile.bio}</p>
              </div>
              <div className="mt-2 flex gap-4 text-xs">
                <div>
                  <span className="font-semibold">{defaultProfile.followingCount}</span>{" "}
                  <span className="text-muted-foreground">Following</span>
                </div>
                <div>
                  <span className="font-semibold">{defaultProfile.followersCount}</span>{" "}
                  <span className="text-muted-foreground">Followers</span>
                </div>
              </div>
            </Link>
          )}
          
          <MarketStats />
          <NewsSection />
          <WhoToFollow />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

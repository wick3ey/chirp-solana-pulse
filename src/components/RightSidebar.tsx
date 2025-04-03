
import React from 'react';
import MarketStats from './MarketStats';
import NewsSection from './NewsSection';
import WhoToFollow from './WhoToFollow';

const RightSidebar: React.FC = () => {
  return (
    <div className="w-[350px] h-screen overflow-auto pb-8 pr-4 scrollbar-none">
      <div className="sticky top-20">
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-75 pointer-events-none"></div>
          <div className="glass rounded-xl p-3 mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Twitter"
                className="w-full bg-muted/50 text-foreground rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute right-3 top-2 text-muted-foreground">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          <MarketStats />
          <NewsSection />
          <WhoToFollow />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;


import React from 'react';
import Header from '@/components/Header';
import Feed from '@/components/Feed';
import RightSidebar from '@/components/RightSidebar';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1 container flex gap-6 pt-6">
        <div className="hidden md:block w-64 shrink-0">
          {/* Left sidebar placeholder for future implementation */}
          <div className="sticky top-20 card-gradient rounded-xl p-4 animate-entrance">
            <div className="text-gradient font-bold text-xl mb-3">SolanaPulse</div>
            <p className="text-sm text-muted-foreground">Join the Solana community and stay updated with the latest trends and discussions in the ecosystem.</p>
            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span>Home</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span>Explore</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span>Notifications</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
                <span>Messages</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 animate-entrance" style={{animationDelay: '0.1s'}}>
          <Feed />
        </div>
        
        <div className="hidden lg:block shrink-0 animate-entrance" style={{animationDelay: '0.2s'}}>
          <RightSidebar />
        </div>
      </main>
    </div>
  );
};

export default Index;

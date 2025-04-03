
import React from 'react';
import { formatTimeAgo, news } from '@/services/mockData';

const NewsSection: React.FC = () => {
  return (
    <div className="card-gradient rounded-xl p-4 mb-4">
      <h3 className="font-semibold text-lg mb-3">Latest News</h3>
      <div className="space-y-4">
        {news.map(item => (
          <div key={item.id} className="group cursor-pointer">
            {item.image && (
              <div className="mb-2 rounded-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <h4 className="font-medium group-hover:text-primary transition-colors">{item.title}</h4>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
              <span>{item.source}</span>
              <span>•</span>
              <span>{formatTimeAgo(item.timestamp)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;

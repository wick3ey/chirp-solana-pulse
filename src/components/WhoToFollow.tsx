
import React from 'react';
import { Button } from '@/components/ui/button';

const suggestedUsers = [
  {
    id: '1',
    name: 'Magic Eden',
    username: 'MagicEden',
    avatar: 'https://pbs.twimg.com/profile_images/1697197339182989312/M8Hsu_4i_400x400.jpg',
  },
  {
    id: '2',
    name: 'DeFi Land',
    username: 'DeFi_Land',
    avatar: 'https://pbs.twimg.com/profile_images/1655913034331144192/0anzKIOo_400x400.jpg',
  },
  {
    id: '3',
    name: 'Shadow',
    username: 'shadow_app',
    avatar: 'https://pbs.twimg.com/profile_images/1603560805535383553/9lFiDYqO_400x400.jpg',
  }
];

const WhoToFollow: React.FC = () => {
  return (
    <div className="card-gradient rounded-xl p-4">
      <h3 className="font-semibold text-lg mb-3">Who to follow</h3>
      <div className="space-y-4">
        {suggestedUsers.map(user => (
          <div key={user.id} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden max-w-[120px]">
                <div className="font-medium truncate">{user.name}</div>
                <div className="text-muted-foreground text-sm truncate">@{user.username}</div>
              </div>
            </div>
            <Button className="bg-white text-black hover:bg-white/90 text-sm font-medium">
              Follow
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoToFollow;

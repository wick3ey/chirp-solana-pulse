
import React, { useState } from "react";
import { Profile } from "@/models/Profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  MoreHorizontal,
  Share2,
  Bell,
  BellOff,
  Mail,
  CheckCircle2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface ProfileHeaderProps {
  profile: Profile;
  onFollow: () => void;
  onBack: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, onFollow, onBack }) => {
  const [isFollowing, setIsFollowing] = useState(profile.isFollowing);
  const [isNotifying, setIsNotifying] = useState(false);
  
  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    onFollow();
  };

  const handleNotify = () => {
    setIsNotifying(!isNotifying);
  };

  return (
    <div className="relative">
      {/* Back button and profile info */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-background/70 p-4 flex items-center gap-6">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-muted/50">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-xl font-bold">{profile.displayName}</h1>
          <p className="text-sm text-muted-foreground">{profile.stats.posts} posts</p>
        </div>
      </div>

      {/* Header image */}
      <div className="h-64 relative overflow-hidden">
        <img
          src={profile.headerImage}
          alt="Profile header"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Edit header overlay - only visible in "edit mode" */}
        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex justify-center items-center">
          <Button variant="secondary" className="bg-black/50 text-white">
            Edit header
          </Button>
        </div>
      </div>

      {/* Profile picture and action buttons */}
      <div className="px-4 flex justify-between items-start relative">
        {/* Profile Picture */}
        <div className="relative -mt-20">
          <Avatar className="w-36 h-36 border-4 border-background rounded-full">
            <AvatarImage src={profile.profileImage} alt={profile.displayName} />
            <AvatarFallback className="bg-solana-purple text-2xl">
              {profile.displayName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          {/* Edit profile overlay - only visible in "edit mode" */}
          <div className="absolute inset-0 bg-black/30 rounded-full opacity-0 hover:opacity-100 transition-opacity flex justify-center items-center">
            <Button variant="secondary" className="bg-black/50 text-white text-sm">
              Edit
            </Button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Share2 className="mr-2 h-4 w-4" /> Share profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" /> Send message
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                Block @{profile.username}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="icon" className="rounded-full" onClick={handleNotify}>
            {isNotifying ? (
              <Bell className="h-5 w-5" />
            ) : (
              <BellOff className="h-5 w-5" />
            )}
          </Button>
          
          <Button variant={isFollowing ? "outline" : "default"} onClick={handleFollow} className="rounded-full px-6">
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

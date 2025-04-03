
import React from "react";
import { Profile } from "@/models/Profile";
import { CheckCircle2, Calendar, MapPin, Link, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

interface ProfileBioProps {
  profile: Profile;
}

const ProfileBio: React.FC<ProfileBioProps> = ({ profile }) => {
  const { toast } = useToast();

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(profile.walletAddress);
    toast({
      title: "Address copied",
      description: "Wallet address copied to clipboard",
    });
  };

  return (
    <div className="px-4 py-4">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">{profile.displayName}</h1>
        {profile.isVerified && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Verified Account</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      
      <p className="text-muted-foreground">@{profile.username}</p>

      {/* Wallet Address */}
      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
        <span className="font-mono">{`${profile.walletAddress.substring(0, 4)}...${profile.walletAddress.substring(profile.walletAddress.length - 4)}`}</span>
        <button onClick={copyWalletAddress} className="hover:text-primary">
          <Copy className="h-4 w-4" />
        </button>
      </div>
      
      {/* Bio */}
      <p className="mt-4 whitespace-pre-line">{profile.bio}</p>
      
      {/* Profile metadata */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-muted-foreground">
        {profile.location && (
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{profile.location}</span>
          </div>
        )}
        
        {profile.website && (
          <div className="flex items-center gap-1">
            <Link className="h-4 w-4" />
            <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {profile.website}
            </a>
          </div>
        )}
        
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>Joined {profile.joinedDate}</span>
        </div>
      </div>
      
      {/* Follower stats */}
      <div className="flex gap-5 mt-4 text-sm">
        <div className="flex items-center">
          <span className="font-semibold">{profile.followingCount.toLocaleString()}</span>
          <span className="text-muted-foreground ml-1">Following</span>
        </div>
        
        <div className="flex items-center">
          <span className="font-semibold">{profile.followersCount.toLocaleString()}</span>
          <span className="text-muted-foreground ml-1">Followers</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBio;

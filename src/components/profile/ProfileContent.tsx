
import React from "react";
import { Profile } from "@/models/Profile";
import ProfileAssets from "./ProfileAssets";
import TweetCard from "@/components/TweetCard";
import { tweets } from "@/services/mockData";

interface ProfileContentProps {
  profile: Profile;
  activeTab: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ profile, activeTab }) => {
  // Filter tweets by the current user's username
  const userTweets = tweets.filter(
    tweet => {
      if (activeTab === "posts") {
        // Since isRetweet doesn't exist, we'll just show all tweets from the user
        return tweet.user.username === profile.username;
      } else if (activeTab === "replies") {
        // Since inReplyTo doesn't exist, we'll just show tweets with comments
        return tweet.user.username === profile.username && tweet.comments > 0;
      } else if (activeTab === "media") {
        return tweet.user.username === profile.username && tweet.images && tweet.images.length > 0;
      } else if (activeTab === "likes") {
        // Just showing some tweets in the likes tab for demonstration
        return tweet.likes > 50;
      }
      return false;
    }
  );

  const renderNoContent = () => (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h3 className="text-xl font-bold mb-2">No {activeTab} yet</h3>
      <p className="text-muted-foreground max-w-xs">
        When {profile.displayName} {activeTab === "likes" ? "likes" : "posts"} something, you'll see it here.
      </p>
    </div>
  );

  // If the wallet tab is selected, show wallet content
  if (activeTab === "wallet") {
    return (
      <div className="px-4 py-6">
        <ProfileAssets profile={profile} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-6 mt-4 px-4 pb-20">
      {/* Left column: Tweets */}
      <div className="col-span-12 md:col-span-8">
        {userTweets.length > 0 ? (
          <div className="space-y-4">
            {userTweets.map(tweet => (
              <TweetCard key={tweet.id} tweet={tweet} />
            ))}
          </div>
        ) : (
          renderNoContent()
        )}
      </div>
      
      {/* Right column: Assets and other info */}
      <div className="hidden md:block md:col-span-4">
        <div className="space-y-4 sticky top-20">
          <ProfileAssets profile={profile} />
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;

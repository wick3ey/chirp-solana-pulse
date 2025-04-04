
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProfileByUsername } from "@/services/profileMockData";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileBio from "@/components/profile/ProfileBio";
import ProfileTabs from "@/components/profile/ProfileTabs";
import ProfileContent from "@/components/profile/ProfileContent";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { ProfileTab } from "@/models/Profile";

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const profile = getProfileByUsername(username || "");
  const [activeTab, setActiveTab] = useState("posts");
  const { toast } = useToast();
  const navigate = useNavigate();

  // Define profile tabs including the new Wallet tab
  const profileTabs: ProfileTab[] = [
    { id: "1", label: "Posts", value: "posts" },
    { id: "2", label: "Replies", value: "replies" },
    { id: "3", label: "Media", value: "media" },
    { id: "4", label: "Likes", value: "likes" },
    { id: "5", label: "Wallet", value: "wallet" }
  ];

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Profile not found</h1>
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-3"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    );
  }

  const handleFollow = () => {
    toast({
      title: profile.isFollowing ? "Unfollowed" : "Followed",
      description: profile.isFollowing 
        ? `You unfollowed ${profile.displayName}` 
        : `You are now following ${profile.displayName}`,
    });
  };

  return (
    <Layout>
      <div className="w-full">
        <ProfileHeader 
          profile={profile} 
          onFollow={handleFollow} 
          onBack={() => navigate("/")}
        />
        <ProfileBio profile={profile} />
        <ProfileTabs 
          tabs={profileTabs}
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />
        <ProfileContent profile={profile} activeTab={activeTab} />
      </div>
    </Layout>
  );
};

export default ProfilePage;

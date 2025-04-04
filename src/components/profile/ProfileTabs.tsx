
import React from "react";
import { ProfileTab } from "@/models/Profile";
import { cn } from "@/lib/utils";

interface ProfileTabsProps {
  tabs: ProfileTab[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="border-b border-border mt-2">
      <div className="flex overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.value)}
            className={cn(
              "px-4 py-3 font-medium text-sm transition-colors relative whitespace-nowrap",
              activeTab === tab.value
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
            )}
          >
            {tab.label}
            {activeTab === tab.value && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabs;

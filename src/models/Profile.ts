
export interface Profile {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  headerImage: string;
  profileImage: string;
  followersCount: number;
  followingCount: number;
  isFollowing: boolean;
  isVerified: boolean;
  isNftProfilePicture?: boolean; // Added this flag to identify NFT profile pictures
  walletAddress: string;
  walletBalance: {
    sol: number;
    usd: number;
  };
  assets: Asset[];
  nfts: NFT[];
  joinedDate: string;
  location?: string;
  website?: string;
  stats: {
    posts: number;
    likes: number;
    media: number;
  };
}

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  value: number;
  iconUrl: string;
  percentChange24h: number;
}

export interface NFT {
  id: string;
  name: string;
  image: string;
  collection: string;
  floorPrice: number;
}

export interface ProfileTab {
  id: string;
  label: string;
  value: string;
}

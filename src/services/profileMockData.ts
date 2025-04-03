
import { Profile, ProfileTab } from "@/models/Profile";

export const mockProfiles: Profile[] = [
  {
    id: "1",
    username: "solana_chad",
    displayName: "Solana Chad",
    bio: "Building the future of finance on Solana | NFT collector | DeFi enthusiast | Not financial advice",
    headerImage: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1200&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop",
    followersCount: 15782,
    followingCount: 892,
    isFollowing: false,
    isVerified: true,
    walletAddress: "8ZnfRxSdYYyG1PtGpFtwjtd1zGGfGzxpvrkNyjgQhd7K",
    walletBalance: {
      sol: 284.35,
      usd: 18736.42
    },
    assets: [
      {
        id: "1",
        name: "Solana",
        symbol: "SOL",
        amount: 284.35,
        value: 18736.42,
        iconUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
        percentChange24h: 3.45
      },
      {
        id: "2",
        name: "Bonk",
        symbol: "BONK",
        amount: 24500000,
        value: 1250.34,
        iconUrl: "https://cryptologos.cc/logos/bonk-bonk-logo.png",
        percentChange24h: 12.87
      },
      {
        id: "3",
        name: "Jupiter",
        symbol: "JUP",
        amount: 1456,
        value: 3678.22,
        iconUrl: "https://cryptologos.cc/logos/jupiter-jup-logo.png",
        percentChange24h: -1.24
      }
    ],
    nfts: [
      {
        id: "nft1",
        name: "Solana Monkey #4293",
        image: "https://i.seadn.io/gae/B47_wazXtRL0XYl0oC_L-U1KNfyIC59uf959MUmSHMXtnoiyPDGLh5S4mfohXdFVsNnYl5OcN0CYZL4UGvt9nhliM3Q1_QnUNK0?auto=format&dpr=1&w=1000",
        collection: "Solana Monkey Business",
        floorPrice: 14.5
      },
      {
        id: "nft2",
        name: "Claynosaurz #1243",
        image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeihpiv6lh6ttbodft3j2rmz6otqbwdaouoawqhg2j2dujsjfb6qnaq.ipfs.nftstorage.link/",
        collection: "Claynosaurz",
        floorPrice: 5.8
      },
      {
        id: "nft3",
        name: "DeGods #6138",
        image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.degods.com/g/6138.png",
        collection: "DeGods",
        floorPrice: 35.2
      },
      {
        id: "nft4",
        name: "Okay Bear #1892",
        image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://arweave.net/ixNs79Gk9RGcttckU6E-WYpVMR15zdIUZPWTfWUkKmI?ext=png",
        collection: "Okay Bears",
        floorPrice: 69.5
      }
    ],
    joinedDate: "May 2021",
    location: "Solana Beach, CA",
    website: "solana.com",
    stats: {
      posts: 1247,
      likes: 8765,
      media: 342
    }
  },
  {
    id: "2",
    username: "defi_queen",
    displayName: "DeFi Queen ✨",
    bio: "DeFi researcher | Yield farmer | Teaching women about crypto | Tips: donramon.sol",
    headerImage: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?q=80&w=400&auto=format&fit=crop",
    followersCount: 8543,
    followingCount: 456,
    isFollowing: true,
    isVerified: false,
    walletAddress: "7ZnfRxSdYYyG1PtGpFtujjtd1zGGfGzxpvrkNyjgQhd7K",
    walletBalance: {
      sol: 124.75,
      usd: 8296.53
    },
    assets: [
      {
        id: "1",
        name: "Solana",
        symbol: "SOL",
        amount: 124.75,
        value: 8296.53,
        iconUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
        percentChange24h: 3.45
      },
      {
        id: "4",
        name: "Raydium",
        symbol: "RAY",
        amount: 2450,
        value: 3678.23,
        iconUrl: "https://cryptologos.cc/logos/raydium-ray-logo.png",
        percentChange24h: -2.34
      }
    ],
    nfts: [
      {
        id: "nft5",
        name: "Famous Fox #3452",
        image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://arweave.net/aU_QhLWgVpOlUjVNKLEiL0_frZMIekxc-rYzI9oF7F8?ext=png",
        collection: "Famous Fox Federation",
        floorPrice: 8.7
      },
      {
        id: "nft6",
        name: "Degen Ape #6552",
        image: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://arweave.net/uAEJZOIWkI5Hn6EZ_5QZfSvF7OLjHWMJ5YYO-HBegIk?ext=png",
        collection: "Degenerate Ape Academy",
        floorPrice: 12.3
      }
    ],
    joinedDate: "August 2021",
    location: "New York, NY",
    website: "defi-insights.xyz",
    stats: {
      posts: 576,
      likes: 4291,
      media: 186
    }
  }
];

export const getProfileByUsername = (username: string): Profile | undefined => {
  return mockProfiles.find(profile => profile.username === username);
};

export const profileTabs: ProfileTab[] = [
  { id: "posts", label: "Posts", value: "posts" },
  { id: "replies", label: "Replies", value: "replies" },
  { id: "media", label: "Media", value: "media" },
  { id: "likes", label: "Likes", value: "likes" }
];

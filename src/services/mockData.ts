
import { formatDistanceToNow } from "date-fns";

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
}

export interface Tweet {
  id: string;
  content: string;
  createdAt: Date;
  user: User;
  likes: number;
  comments: number;
  retweets: number;
  images?: string[];
}

export interface CryptoToken {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  logo: string;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  timestamp: Date;
  image?: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Solana",
    username: "solana",
    avatar: "https://pbs.twimg.com/profile_images/1759196333254897664/ez0QdBGP_400x400.jpg",
    verified: true,
  },
  {
    id: "2",
    name: "Anatoly Yakovenko",
    username: "aeyakovenko",
    avatar: "https://pbs.twimg.com/profile_images/1639950141144211456/_R-RbceI_400x400.jpg",
    verified: true,
  },
  {
    id: "3",
    name: "Raj Gokal",
    username: "rajgokal",
    avatar: "https://pbs.twimg.com/profile_images/1512530758265667595/ZkGkfkR5_400x400.jpg",
    verified: true,
  },
  {
    id: "4",
    name: "Jupiter Exchange",
    username: "JupiterExchange",
    avatar: "https://pbs.twimg.com/profile_images/1698680106551021568/KN0YQUCa_400x400.jpg",
    verified: true,
  },
  {
    id: "5",
    name: "SolanaFloor",
    username: "SolanaFloor",
    avatar: "https://pbs.twimg.com/profile_images/1506284436543516675/imtDLlyF_400x400.jpg",
    verified: true,
  },
];

export const tweets: Tweet[] = [
  {
    id: "1",
    content: "Solana has achieved a new ATH in network performance with over 65,000 TPS! This is what true scalability looks like. #Solana #Crypto #Web3",
    createdAt: new Date(Date.now() - 25 * 60 * 1000),
    user: users[0],
    likes: 3245,
    comments: 521,
    retweets: 1024,
    images: ["https://pbs.twimg.com/media/GEVTRrDaIAArSJG?format=jpg&name=medium"]
  },
  {
    id: "2",
    content: "Just shipped a major update to the Solana validator nodes. Improved stability and even better performance coming to the network. Excited for what this enables for developers. #BuildOnSolana",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    user: users[1],
    likes: 1523,
    comments: 245,
    retweets: 412,
  },
  {
    id: "3",
    content: "The ecosystem growth we're seeing on Solana is incredible. New apps launching every day, growing user adoption, and innovation happening at every layer. This is what a thriving blockchain ecosystem looks like.",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    user: users[2],
    likes: 982,
    comments: 143,
    retweets: 265,
  },
  {
    id: "4",
    content: "Excited to announce Jupiter V3 is now live! Bringing even better swap execution, more supported tokens, and deeper liquidity to everyone building on Solana. Check it out! jupit.er",
    createdAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
    user: users[3],
    likes: 1872,
    comments: 327,
    retweets: 584,
    images: ["https://pbs.twimg.com/media/F-jMQQmaAAARjE2?format=jpg&name=medium"]
  },
  {
    id: "5",
    content: "NFT trading volume on Solana hit $1.2B this month, up 63% from last month. The Solana NFT ecosystem continues to thrive even in this market! #SolanaNFTs",
    createdAt: new Date(Date.now() - 9 * 60 * 60 * 1000),
    user: users[4],
    likes: 742,
    comments: 94,
    retweets: 201,
  },
];

export const cryptoTokens: CryptoToken[] = [
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 147.25,
    change24h: 5.23,
    volume24h: 2968000000,
    marketCap: 67590000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 69321.12,
    change24h: 2.78,
    volume24h: 38560000000,
    marketCap: 1365000000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 3352.84,
    change24h: 1.92,
    volume24h: 18720000000,
    marketCap: 402700000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  {
    id: "bonk",
    name: "Bonk",
    symbol: "BONK",
    price: 0.00001823,
    change24h: 12.45,
    volume24h: 495000000,
    marketCap: 1120000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/23095.png"
  },
  {
    id: "jupiter",
    name: "Jupiter",
    symbol: "JUP",
    price: 0.915,
    change24h: 3.67,
    volume24h: 278000000,
    marketCap: 1235000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/24928.png"
  },
  {
    id: "orca",
    name: "Orca",
    symbol: "ORCA",
    price: 1.23,
    change24h: -2.14,
    volume24h: 86000000,
    marketCap: 261000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/11165.png"
  },
  {
    id: "pyth",
    name: "Pyth Network",
    symbol: "PYTH",
    price: 0.465,
    change24h: 7.32,
    volume24h: 154000000,
    marketCap: 725000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/22451.png"
  },
  {
    id: "mango",
    name: "Mango",
    symbol: "MNGO",
    price: 0.0851,
    change24h: 4.25,
    volume24h: 23500000,
    marketCap: 85100000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/10307.png"
  },
  {
    id: "raydium",
    name: "Raydium",
    symbol: "RAY",
    price: 1.97,
    change24h: -0.87,
    volume24h: 65000000,
    marketCap: 492000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/8526.png"
  },
  {
    id: "serum",
    name: "Serum",
    symbol: "SRM",
    price: 0.126,
    change24h: 1.35,
    volume24h: 42000000,
    marketCap: 126000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6187.png"
  },
  {
    id: "render",
    name: "Render",
    symbol: "RNDR",
    price: 7.82,
    change24h: 6.19,
    volume24h: 289000000,
    marketCap: 2960000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5690.png"
  },
  {
    id: "jito",
    name: "Jito",
    symbol: "JTO",
    price: 2.43,
    change24h: 3.15,
    volume24h: 76500000,
    marketCap: 364500000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/28772.png"
  },
  {
    id: "helium",
    name: "Helium",
    symbol: "HNT",
    price: 5.24,
    change24h: -1.23,
    volume24h: 38900000,
    marketCap: 837000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5665.png"
  },
  {
    id: "drift",
    name: "Drift Protocol",
    symbol: "DRIFT",
    price: 1.87,
    change24h: 8.43,
    volume24h: 42700000,
    marketCap: 224000000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/28249.png"
  },
  {
    id: "samo",
    name: "Samoyedcoin",
    symbol: "SAMO",
    price: 0.0106,
    change24h: 5.47,
    volume24h: 26300000,
    marketCap: 47700000,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/9721.png"
  }
];

export const news: NewsItem[] = [
  {
    id: "1",
    title: "Solana NFT Sales Hit All-Time Highs Despite Market Downturn",
    source: "CryptoNews",
    url: "#",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=3332&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Jupiter DEX Reaches $100 Billion in Total Trading Volume",
    source: "BlockchainInsider",
    url: "#",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000)
  },
  {
    id: "3",
    title: "Solana DeFi TVL Breaks $3 Billion Again as Rally Continues",
    source: "DeFiPulse",
    url: "#",
    timestamp: new Date(Date.now() - 7 * 60 * 60 * 1000)
  },
  {
    id: "4",
    title: "Major Bank Announces Support for Solana Blockchain Payments",
    source: "FinancialTimes",
    url: "#",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000)
  },
  {
    id: "5",
    title: "New Solana-Based Social Media Platform Attracts 500K Users in First Week",
    source: "TechCrunch",
    url: "#",
    timestamp: new Date(Date.now() - 15 * 60 * 60 * 1000)
  }
];

export const formatTimeAgo = (date: Date): string => {
  return formatDistanceToNow(date, { addSuffix: true });
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const formatPrice = (price: number): string => {
  if (price < 0.0001) {
    return '$' + price.toFixed(8);
  } else if (price < 0.01) {
    return '$' + price.toFixed(6);
  } else if (price < 1) {
    return '$' + price.toFixed(4);
  } else if (price < 10) {
    return '$' + price.toFixed(3);
  } else if (price < 1000) {
    return '$' + price.toFixed(2);
  } else {
    return '$' + price.toLocaleString('en-US', { maximumFractionDigits: 0 });
  }
};

export const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1000000000) {
    return '$' + (marketCap / 1000000000).toFixed(1) + 'B';
  }
  return '$' + (marketCap / 1000000).toFixed(1) + 'M';
};

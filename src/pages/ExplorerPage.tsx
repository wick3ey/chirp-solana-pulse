
import React from "react";
import Layout from "@/components/Layout";
import ExploreHeader from "@/components/explorer/ExploreHeader";
import MarketTrends from "@/components/explorer/MarketTrends";
import NewsList from "@/components/explorer/NewsList";
import TrendingAssets from "@/components/explorer/TrendingAssets";
import PopularNFTs from "@/components/explorer/PopularNFTs";

const ExplorerPage = () => {
  return (
    <Layout>
      <div className="w-full h-full overflow-auto pb-16">
        <ExploreHeader />
        <div className="space-y-6 px-4">
          <MarketTrends />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrendingAssets />
            <NewsList />
          </div>
          <PopularNFTs />
        </div>
      </div>
    </Layout>
  );
};

export default ExplorerPage;

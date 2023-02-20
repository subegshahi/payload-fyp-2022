import React from "react";
import { Header, SearchResultFilter, SearchResultCard } from "../imports";

export const SearchResult = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#09203f] to-[#537895]">
      <Header />

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-1 flex-col px-5">
        <SearchResultCard />
        {/* <SearchResultFilter /> */}
      </div>
    </div>
  );
};

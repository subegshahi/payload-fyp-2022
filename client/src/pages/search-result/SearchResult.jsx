import React from "react";
import {
  Header,
  SearchResultFilter,
  SearchResultCard,
  SearchResultHeader,
} from "../imports";

export const SearchResult = () => {
  return (
    <>
      <div className="bg-[#114c79]">
        <Header />

        <div className="mx-auto flex h-80 max-w-xl flex-col justify-center px-5">
          <SearchResultHeader />
        </div>
      </div>

      <main className="mx-auto mt-10 w-full max-w-7xl px-5">
        <div className="flex gap-5">
          <div className="mt-5 hidden w-1/3 lg:block">
            <SearchResultFilter />
          </div>

          <div className="w-full">
            <div className="mt-5">
              <SearchResultCard />
            </div>

            <div className="mt-5">
              <SearchResultCard />
            </div>

            <div className="mt-5">
              <SearchResultCard />
            </div>

            <div className="mt-5">
              <SearchResultCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

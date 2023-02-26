import React from "react";
import { Header, HeroComponent } from "../../imports/components";

export const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#09203f] to-[#537895]">
      <Header />

      <main className="mx-auto flex max-w-7xl flex-1 items-center justify-center px-5">
        <HeroComponent />
      </main>
    </div>
  );
};

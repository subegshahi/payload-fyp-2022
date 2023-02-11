import React from "react";

export const Admin = () => {
  return (
    <div class="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
      <div>
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="w-full object-cover"
          alt=""
        />
      </div>

      <div class="absolute inset-0 z-10 bg-gradient-to-t from-black " />

      <div class="absolute inset-x-0 bottom-0 z-20 p-4">
        <p class="mb-1 text-sm text-white text-opacity-80">
          Andrea Felsted • <time>18 Nov 2022</time>
        </p>
        <h3 class="text-xl font-medium text-white">Migrating to Sailboat UI</h3>
        <p class="mt-1 text-white text-opacity-80">
          Sailboat UI is a modern UI component library for Tailwind CSS. Get
          started with 150+ open source components.
        </p>
      </div>
    </div>
  );
};

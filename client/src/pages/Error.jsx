import React from "react";
import { Link } from "react-router-dom";
import { RiEmotionSadLine } from "react-icons/ri";

export const Error = () => {
  return (
    <section>
      <div className="mx-auto flex h-screen w-full max-w-7xl items-center justify-center p-5">
        <div className="flex flex-col">
          <div className="-ml-5">
            <RiEmotionSadLine size={200} />
          </div>

          <div className="mt-5">
            <p className="text-7xl font-bold text-brand-500">404</p>
            <p className="mt-5 text-5xl font-bold">Page not found</p>
            <p className="mt-5 text-lg  text-gray-600">
              Sorry, we couldn't find the page you're looking for.
            </p>

            <Link
              className="mt-5 inline-block w-full rounded-md bg-brand-500 px-4 py-2 text-center font-medium text-white hover:bg-brand-400"
              to="/"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

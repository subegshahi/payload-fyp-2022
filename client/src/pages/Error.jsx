import React from "react";
import { Link } from "react-router-dom";
import { RiEmotionSadLine } from "react-icons/ri";

export const Error = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto p-5 h-screen w-full flex justify-center items-center">
        <div className="flex flex-col">
          <div className="-ml-5">
            <RiEmotionSadLine size={200} />
          </div>

          <div className="mt-5">
            <p className="font-bold text-7xl text-emerald-700">404</p>
            <p className="mt-5 font-bold text-5xl">Page not found</p>
            <p className="mt-5 text-lg  text-gray-600">
              Sorry, we couldn't find the page you're looking for.
            </p>

            <Link
              className="inline-block text-white font-medium bg-emerald-700 px-4 py-2 rounded-md text-center mt-5 w-full hover:bg-emerald-600"
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

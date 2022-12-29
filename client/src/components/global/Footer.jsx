import React from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div className="mx-auto mt-10 max-w-7xl border-t-2 border-gray-200 px-5">
        <div className="my-6 flex flex-col items-center justify-between gap-5 sm:flex-row ">
          <p className="text-lg text-gray-500">
            &#169; 2022 Payload. All rights reserved
          </p>

          <div className="flex gap-5">
            <AiFillGithub className="text-gray-500" size={"30"} />
            <AiOutlineInstagram className="text-gray-500" size={"30"} />
            <AiOutlineTwitter className="text-gray-500" size={"30"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

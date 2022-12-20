import React from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto border-t-2 border-gray-200 px-5 mt-10">
        <div className="flex flex-col gap-5 items-center justify-between my-6 sm:flex-row ">
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

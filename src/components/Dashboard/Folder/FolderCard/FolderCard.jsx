// Dependencies
import React from "react";

import profileImage from "../../../../assets/img/profile.png";

const FolderCard = ({ bg_color, bg_logo, svg_logo, title, files, date }) => {
  return (
    <div className={`rounded-xl ${bg_color} mt-4 p-4 w-60`}>
      <div className="flex flex-row justify-between">
        <div className={`p-2 rounded-lg ${bg_logo} text-white`}>{svg_logo}</div>
        <div>
          <a href="#" className="text-white">
            :
          </a>
        </div>
      </div>
      <h1 className="text-white font-semibold text-sm mt-4">{title}</h1>
      <div className="inline-flex mt-2">
        <img
          src={profileImage}
          className="relative w-6 h-6 rounded-full z-30"
          alt=""
        />
        <img
          src={profileImage}
          className="relative -left-2 w-6 h-6 rounded-full z-20"
          alt=""
        />
        <img
          src={profileImage}
          className="relative -left-4 w-6 h-6 rounded-full z-10"
          alt=""
        />
        <div className="relative -left-6 w-6 h-6 rounded-full z-20 bg-white text-center text-xs p-1 ">
          +4
        </div>
      </div>
      <div className="flex flex-row mt-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
        <span className="text-sm ml-2">{files} Files</span>
      </div>
      <div className="flex flex-row mt-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-xs ml-2">Created on {date}</span>
      </div>
    </div>
  );
};

export default FolderCard;

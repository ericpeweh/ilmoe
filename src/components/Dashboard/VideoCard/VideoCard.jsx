// Dependencies
import React from "react";

import image from "../../../assets/img/logo.png";
import profileImage from "../../../assets/img/profile.png";

const VideoCard = ({ title, ratings, reviews }) => {
  return (
    <div className="rounded-xl bg-white w-full mt-3 p-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <img
            src={image}
            className="w-24 h-20 rounded-lg bg-sky-pastel"
            alt="cover"
          />
          <div className="ml-2">
            <h1>{title}</h1>
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs">
                {ratings} ratings &middot; {reviews} reviews
              </p>
            </div>
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
              <div className="relative -left-6 w-6 h-6 rounded-full z-20 bg-purple-pastel text-white text-center text-sm">
                +
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="px-3 font-semibold">
          :
        </a>
      </div>
    </div>
  );
};

export default VideoCard;

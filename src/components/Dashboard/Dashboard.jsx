import React from "react";

import Courses from "./Courses/Courses";
import Folder from "./Folder/Folder";
import Navbar from "./Navbar/Navbar";
import VideoCard from "./VideoCard/VideoCard";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={`w-full bg-yellow-pastel ${styles}`}>
      <div className="flex h-screen">
        <Navbar />
        <div className="flex flex-row">
          <Courses />
          <Folder />
        </div>
        <div className="bg-yellow-pastel  overflow-y-auto">
          <div className="p-8">
            <div className="flex flex-row justify-end items-center">
              <span className="text-ocean-pastel">
                25 December 2021, Saturday
              </span>
              <a
                href="#"
                className="p-2 rounded-lg bg-purple-pastel ml-6 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-purple-pastel ml-2 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-red-pastel w-96 h-48 mt-12 flex items-center justify-center text-white rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-between items-center mt-4">
              <div className="inline-flex">
                <h1 className="font-semibold text-2xl">My Videos</h1>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 mt-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-ocean-pastel text-md">
                view all videos
              </a>
            </div>
            <div>
              <VideoCard
                title="Human-Centered Design"
                ratings="663"
                reviews="72"
              />
              <VideoCard
                title="Input and Interaction"
                ratings="526"
                reviews="92"
              />
              <VideoCard
                title="E-Learning and Digital Cultures"
                ratings="1,167"
                reviews="156"
              />
              <VideoCard
                title="Eng - Vocabulary Test"
                ratings="758"
                reviews="103"
              />
              <VideoCard
                title="Social Communication"
                ratings="687"
                reviews="123"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

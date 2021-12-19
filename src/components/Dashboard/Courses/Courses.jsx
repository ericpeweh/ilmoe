// Dependencies
import React from "react";

import profileImage from "../../../assets/img/profile.png";

import CoursesCard from "./CoursesCard/CoursesCard";

const Courses = () => {
  return (
    <div className="bg-gray-200 relative -left-3 p-8 overflow-y-auto rounded-l-2xl">
      <div className="inline-flex w-full justify-between items-center">
        <div className="inline-flex">
          <h1 className="text-2xl font-semibold">My Courses</h1>
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
        <img
          src={profileImage}
          className="rounded-2xl w-10 h-10 justify-self-end"
          alt="profile"
        />
      </div>
      <div>
        <a href="#" className="text-blue-700">
          view all courses
        </a>
      </div>
      <div className="grid grid-cols-4 mt-6 p-4 bg-white rounded-xl gap-8 text-center">
        <a href="#" className="border-b-2 border-red-600 w-20">
          All Courses
        </a>
        <a href="#">Current</a>
        <a href="#">Archieved</a>
        <a href="#">Upcoming</a>
      </div>
      <div className="my-4 text-sm uppercase text-gray-600">Design</div>
      <div className="grid gap-y-3">
        <CoursesCard
          title="UX Design"
          date="Wednesday, February 02, 2022"
          rating="9.2"
          bg_color="bg-ocean-pastel"
          img_color="bg-yellow-pastel"
          font_color="text-white"
        />
        <CoursesCard
          title="Website Design"
          date="Thursday, February 03, 2022"
          rating="8.5"
          bg_color="bg-white"
          img_color="bg-red-600"
          font_color="text-black"
        />
        <CoursesCard
          title="Service Design"
          date="Friday, February 04, 2022"
          rating="5.2"
          bg_color="bg-white"
          img_color="bg-red-600"
          font_color="text-black"
        />
      </div>

      <div className="mt-8 mb-4 text-sm uppercase text-gray-600">
        Other Courses
      </div>
      <div className="grid gap-y-3">
        <CoursesCard
          title="UX Design"
          date="Wednesday, February 02, 2022"
          rating="9.2"
          bg_color="bg-purple-pastel"
          img_color="bg-yellow-pastel"
          font_color="text-white"
        />
        <CoursesCard
          title="Website Design"
          date="Thursday, February 03, 2022"
          rating="8.5"
          bg_color="bg-white"
          img_color="bg-red-600"
          font_color="text-black"
        />
        <CoursesCard
          title="Service Design"
          date="Friday, February 04, 2022"
          rating="5.2"
          bg_color="bg-white"
          img_color="bg-red-600"
          font_color="text-black"
        />
      </div>
    </div>
  );
};

export default Courses;

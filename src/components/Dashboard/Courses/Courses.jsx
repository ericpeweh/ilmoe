// Dependencies
import React from "react";

import profileImage from "../../../assets/img/profile.png";

import CoursesCard from "./CoursesCard/CoursesCard";

import styles from "./Courses.module.css";

const Courses = () => {
	return (
		<div
			className={`bg-slate-200 relative -left-3 p-8 overflow-y-auto rounded-l-2xl ${styles.courses}`}
		>
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
					className="rounded-2xl w-10 h-10 justify-self-end border-2 border-slate-300"
					alt="profile"
				/>
			</div>
			<div>
				<a href="#" className="text-ocean-pastel">
					View all courses
				</a>
			</div>
			<div
				className={`grid grid-cols-4 mt-6 p-4 bg-white rounded-xl gap-8 text-center ${styles.categories}`}
			>
				<a href="#" className="border-b-2 border-red-pastel w-20">
					All Courses
				</a>
				<a href="#">Current</a>
				<a href="#">Archieved</a>
				<a href="#">Upcoming</a>
			</div>
			<div className="my-4 text-sm uppercase font-semibold text-slate-800">Design</div>
			<div className="grid gap-y-3">
				<CoursesCard
					title="UX Design"
					date="Wednesday, February 02, 2022"
					rating="9.2"
					bg_color="bg-ocean-pastel"
					img_color="bg-sky-pastel"
					font_color="text-white"
					selected
					logo={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M13 7H7v6h6V7z" />
							<path
								fillRule="evenodd"
								d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
								clipRule="evenodd"
							/>
						</svg>
					}
				/>
				<CoursesCard
					title="Website Design"
					date="Thursday, February 03, 2022"
					rating="8.5"
					bg_color="bg-white"
					img_color="bg-sky-pastel"
					font_color="text-black"
					logo={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
					}
				/>
				<CoursesCard
					title="Service Design"
					date="Friday, February 04, 2022"
					rating="5.2"
					bg_color="bg-white"
					img_color="bg-sky-pastel"
					font_color="text-black"
					logo={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					}
				/>
			</div>

			<div className="mt-8 mb-4 text-sm uppercase font-semibold text-slate-800">Other Courses</div>
			<div className="grid gap-y-3">
				<CoursesCard
					title="UX Design"
					date="Wednesday, February 02, 2022"
					rating="9.2"
					bg_color="bg-white"
					img_color="bg-sky-pastel"
					font_color="text-black"
					logo={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M13 7H7v6h6V7z" />
							<path
								fillRule="evenodd"
								d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
								clipRule="evenodd"
							/>
						</svg>
					}
				/>
				<CoursesCard
					title="Website Design"
					date="Thursday, February 03, 2022"
					rating="8.5"
					bg_color="bg-white"
					img_color="bg-sky-pastel"
					font_color="text-black"
					logo={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
					}
				/>
				<CoursesCard
					title="Service Design"
					date="Friday, February 04, 2022"
					rating="5.2"
					bg_color="bg-white"
					img_color="bg-sky-pastel"
					font_color="text-black"
					logo={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					}
				/>
			</div>
		</div>
	);
};

export default Courses;

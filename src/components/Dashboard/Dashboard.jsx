import React from "react";

import Courses from "./Courses/Courses";
import Folder from "./Folder/Folder";
import Navbar from "./Navbar/Navbar";
import VideoCard from "./VideoCard/VideoCard";

import styles from "./Dashboard.module.css";

// Images
import course1 from "../../assets/img/course1.webp";
import course2 from "../../assets/img/course2.webp";
import course3 from "../../assets/img/course3.webp";
import course4 from "../../assets/img/course4.webp";
import course5 from "../../assets/img/course5.webp";

const Dashboard = () => {
	return (
		<div className={`w-full bg-white`}>
			<div className={`flex h-screen ${styles.dashboard}`}>
				<Navbar />
				<div className="flex flex-row">
					<Courses />
					<Folder />
				</div>
				<div className="bg-white overflow-y-auto flex-1">
					<div className="p-8">
						<div className="flex flex-row justify-end items-center">
							<span className="text-ocean-pastel">Saturday, 25 December 2021</span>
							<a href="#" className="p-2 rounded-lg bg-ocean-pastel ml-6 text-white">
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
							<a href="#" className="p-2 rounded-lg bg-ocean-pastel ml-2 text-white ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 "
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
						{/* VIDEO PLAYER */}
						<div
							className={`mt-4 flex items-center justify-center text-white rounded-xl w-full h-[22rem] cursor-pointer drop-shadow-md border-2 border-sky-pastel ${styles.videoPlayer}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-32 w-32"
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
						{/* VIDEOS */}
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
								View all videos
							</a>
						</div>
						<div>
							<VideoCard title="Human-Centered Design" ratings="663" reviews="72" image={course1} />
							<VideoCard title="Input and Interaction" ratings="526" reviews="92" image={course2} />
							<VideoCard
								title="E-Learning and Digital Cultures"
								ratings="1,167"
								reviews="156"
								image={course3}
							/>
							<VideoCard
								title="Eng - Vocabulary Test"
								ratings="758"
								reviews="103"
								image={course4}
							/>
							<VideoCard title="Social Communication" ratings="687" reviews="123" image={course5} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

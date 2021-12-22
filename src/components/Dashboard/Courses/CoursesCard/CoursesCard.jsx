import React from "react";
import styles from "./CoursesCard.module.css";

const CoursesCard = ({ title, date, rating, bg_color, font_color, img_color, logo, selected }) => {
	return (
		<a href="#" className={`inline-flex p-2 justify-between rounded-lg ${bg_color} drop-shadow-xl`}>
			<div className="inline-flex items-center">
				<div className={`${img_color} rounded-lg p-4`}>{logo}</div>
				<div className="ml-4 flex-none w-44">
					<h1 className={`text-xl font-semibold ${font_color} truncate`}>{title}</h1>
					<span className={`${selected ? "text-white" : "text-gray-700"} text-sm truncate`}>
						{date}
					</span>
				</div>
				<div className={`ml-8 inline-flex items-center ${styles.rating}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-yellow-pastel"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
					<span className={`${font_color} font-semibold ml-1`}>{rating}</span>
				</div>
			</div>
			<div className={`ml-10 ${font_color}`}>
				<a href="#">
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</a>
			</div>
		</a>
	);
};

export default CoursesCard;

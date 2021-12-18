// Dependencies
import React from "react";

// Styles
import styles from "./TrendingCard.module.css";

const TrendingCard = ({ title, img, topics, data }) => {
	return (
		<div
			className={`${styles.card} mx-8 p-5 py-6 bg-white rounded-lg min-w-[20rem] flex-1 drop-shadow-lg relative overflow-hidden `}
		>
			<h3 className="text-xl text-gray-600 font-bold text-center">{title}</h3>
			<img src={img} alt={title} className="h-[9rem] block m-auto my-8" />
			<ul>
				{topics.map(topic => (
					<li className="text-center py-1 w-100 bg-slate-200 drop-shadow rounded-lg my-2 text-gray-700">
						{topic}
					</li>
				))}
			</ul>
			<div
				className={`absolute top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center ${styles.cardInfo}`}
			>
				<button
					className={`${styles.cardInfoItem} w-[70%] flex flex-row justify-between bg-purple-pastel rounded-lg py-4 px-3 items-center my-2`}
				>
					<p className="text-2xl font-extrabold">{data[0]}+</p>
					<p className="text-xl font-bold">Courses </p>
				</button>
				<button
					className={`${styles.cardInfoItem} w-[70%] flex flex-row justify-between bg-sky-pastel rounded-lg py-4 px-3 items-center my-2`}
				>
					<p className="text-2xl font-extrabold">{data[1]}+</p>
					<p className="text-xl font-bold">Instructors</p>
				</button>
				<button
					className={`${styles.cardInfoItem} w-[70%] flex flex-row justify-between bg-yellow-pastel rounded-lg py-4 px-3 items-center my-2`}
				>
					<p className="text-2xl font-extrabold">{data[2]}+</p>
					<p className="text-xl font-bold">Favorites</p>
				</button>
				<div className={` flex flex-row justify-center rounded-lg px-3 ${styles.moreButton}`}>
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
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default TrendingCard;

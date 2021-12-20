// Dependencies
import React from "react";

// Components
import TrendingCard from "./TrendingCard/TrendingCard";

// Styles
import styles from "./Trending.module.css";

// Images
import MathImage from "../../../assets/img/math.svg";
import ScienceImage from "../../../assets/img/science.svg";
import ArtImage from "../../../assets/img/art.svg";

const MathTopics = ["Arithmetic", "Geometry", "Algebra", "Trigonometry"];
const ScienceTopics = ["Physics", "Chemistry", "Biology", "Research"];
const DesignTopics = ["Design Pattern", "Web Design", "Painting", "Digital Art"];

const Trending = React.forwardRef((props, ref) => {
	return (
		<section className={`flex flex-col justify-center ${styles.trending} relative pb-8`} ref={ref}>
			<div className="absolute top-[-5rem] left-0" id="trending"></div>
			<h2 className="font-bold text-white text-4xl text-center pt-16 mb-3">Trending Subject</h2>
			<div
				className={`flex flex-row justify-center items-center p-8 h-100 ${styles.cardsContainer}`}
			>
				<TrendingCard title="Math" img={MathImage} topics={MathTopics} data={[4500, 200, "150K"]} />
				<TrendingCard
					title="Science"
					img={ScienceImage}
					topics={ScienceTopics}
					data={[2500, 125, "95K"]}
				/>
				<TrendingCard
					title="Design"
					img={ArtImage}
					topics={DesignTopics}
					data={[3500, 250, "180K"]}
				/>
			</div>
		</section>
	);
});

export default Trending;

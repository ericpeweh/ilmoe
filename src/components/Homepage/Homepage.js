// Dependencies
import React from "react";

// Components
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Trending from "./Trending/Trending";
import Pricing from "./Pricing/Pricing";

const Homepage = () => {
	return (
		<div className="w-full">
			<Navbar />
			<Header />
			<Trending />
			<Pricing />
		</div>
	);
};

export default Homepage;

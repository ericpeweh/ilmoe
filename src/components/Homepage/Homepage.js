// Dependencies
import React, { useEffect, useRef, useState } from "react";

// Components
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Trending from "./Trending/Trending";
import Pricing from "./Pricing/Pricing";
import LiveChat from "./LiveChat/LiveChat";
import Footer from "./Footer/Footer";
import FloatingMenu from "./FloatingMenu/FloatingMenu";

const Homepage = () => {
	const [currentNav, setCurrentNav] = useState("header");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const headerRef = useRef();
	const trendingRef = useRef();
	const pricingRef = useRef();
	const footerRef = useRef();

	useEffect(() => {
		const changeBackgroundColor = () => {
			if (window.scrollY < trendingRef.current.offsetTop - 150) {
				setCurrentNav("header");
			} else if (window.scrollY < pricingRef.current.offsetTop - 150) {
				setCurrentNav("trending");
			} else if (window.scrollY + 500 > footerRef.current.offsetTop) {
				setCurrentNav("contacts");
			} else if (window.scrollY < footerRef.current.offsetTop - 150) {
				setCurrentNav("pricing");
			}
		};

		window.addEventListener("scroll", changeBackgroundColor);

		return () => {
			window.removeEventListener("scroll", changeBackgroundColor);
		};
	}, []);

	return (
		<div className="w-full">
			<Navbar currentNav={currentNav} onPressMenu={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			<FloatingMenu currentNav={currentNav} isMenuOpen={isMenuOpen} />
			<Header ref={headerRef} />
			<Trending ref={trendingRef} />
			<Pricing ref={pricingRef} />
			<LiveChat />
			<Footer ref={footerRef} />
		</div>
	);
};

export default Homepage;

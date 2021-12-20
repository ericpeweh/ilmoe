// Dependencies
import React from "react";
import { useNavigate } from "react-router-dom";

// Styles
import styles from "./FloatingMenu.module.css";

const FloatingMenu = ({ currentNav, isMenuOpen }) => {
	const navigate = useNavigate();

	return (
		<div
			className={`fixed top-0 left-0 h-screen w-screen z-[9] ${styles.floatingMenu} ${
				!isMenuOpen ? styles.hidden : styles.shown
			}`}
		>
			<ul className="flex flex-col justify-center items-center w-full h-full mt-4">
				<li
					className={`my-4 px-5 cursor-pointer hover:text-red-pastel text-lg transition-all text-5xl text-white ${
						currentNav === "header" ? "font-bold text-red-pastel" : ""
					}`}
				>
					<a href="#header">Home</a>
				</li>
				<li
					className={`my-4 px-5 cursor-pointer hover:text-red-pastel text-lg transition-all text-5xl text-white ${
						currentNav === "trending" ? "font-bold text-red-pastel" : ""
					}`}
				>
					<a href="#trending">Subjects</a>
				</li>
				<li
					className={`my-4 px-5 cursor-pointer hover:text-red-pastel text-lg transition-all text-5xl text-white ${
						currentNav === "pricing" ? "font-bold text-red-pastel" : ""
					}`}
				>
					<a href="#pricing">Pricing</a>
				</li>
				<li
					className={`my-4 px-5 cursor-pointer hover:text-red-pastel text-lg transition-all text-5xl text-white ${
						currentNav === "contacts" ? "font-bold text-red-pastel" : ""
					}`}
				>
					<a href="#contacts">Contacts</a>
				</li>
				<button
					className="text-3xl px-12 py-2 bg-ocean-pastel rounded-lg text-white font-bold mt-8"
					onClick={() => navigate("/dashboard")}
				>
					Sign In
				</button>
			</ul>
		</div>
	);
};

export default FloatingMenu;

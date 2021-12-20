// Dependencies
import React from "react";
import { useNavigate } from "react-router-dom";

// Images
import logo from "../../../assets/img/logo.png";

// Styles
import styles from "./Navbar.module.css";

const Navbar = ({ currentNav, onPressMenu, isMenuOpen }) => {
	const navigate = useNavigate();

	const menuOpenHandler = () => {
		onPressMenu(true);
	};

	const menuCloseHandler = () => {
		onPressMenu(false);
	};

	return (
		<nav
			className={`w-screen bg-white fixed top-0 left-0 flex flex-row justify-between items-center py-4 px-12 bg-slate-100 z-50 drop-shadow h-[12vh] ${styles.navbar}`}
		>
			<a href="#header">
				<img src={logo} alt="logo" className="w-28" />
			</a>
			<ul className={`flex flex-row justify-around items-center ${styles.navLinks}`}>
				<li
					className={`px-5 cursor-pointer hover:text-purple-pastel text-lg transition-all ${
						currentNav === "header" ? "font-bold text-purple-pastel" : ""
					}`}
				>
					<a href="#header">Home</a>
				</li>
				<li
					className={`px-5 cursor-pointer hover:text-purple-pastel text-lg transition-all ${
						currentNav === "trending" ? "font-bold text-purple-pastel" : ""
					}`}
				>
					<a href="#trending">Subjects</a>
				</li>
				<li
					className={`px-5 cursor-pointer hover:text-purple-pastel text-lg transition-all ${
						currentNav === "pricing" ? "font-bold text-purple-pastel" : ""
					}`}
				>
					<a href="#pricing">Pricing</a>
				</li>
				<li
					className={`px-5 cursor-pointer hover:text-purple-pastel text-lg transition-all ${
						currentNav === "contacts" ? "font-bold text-purple-pastel" : ""
					}`}
				>
					<a href="#contacts">Contacts</a>
				</li>
			</ul>
			<button
				className={`px-6 py-3 bg-ocean-pastel rounded-lg text-white text-md hover:bg-purple-pastel transition-all hover:scale-105 ${styles.signInButton}`}
				onClick={() => navigate("/dashboard")}
			>
				Sign In
			</button>
			{!isMenuOpen ? (
				<button
					onClick={menuOpenHandler}
					className={`scale-105 rotate-180 transition-all duration-200 ${styles.mobileIcon}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10 cursor-pointer  text-slate-500"
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
				</button>
			) : (
				<button
					onClick={menuCloseHandler}
					className={`scale-105 transition-all duration-200 rotate-360 active:bg-white ${styles.mobileIcon}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			)}
		</nav>
	);
};

export default Navbar;

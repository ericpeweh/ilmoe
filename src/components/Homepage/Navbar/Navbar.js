// Dependencies
import React from "react";

// Images
import logo from "../../../assets/img/logo.png";

const Navbar = () => {
	return (
		<div className="w-screen bg-white fixed top-0 left-0 flex flex-row justify-between items-center py-4 px-6 bg-slate-100 z-50 drop-shadow h-[12vh]">
			<div>
				<img src={logo} alt="logo" className="w-28" />
			</div>
			<ul className="flex flex-row justify-around items-center">
				<li className="px-5 cursor-pointer">Home</li>
				<li className="px-5 cursor-pointer">About</li>
				<li className="px-5 cursor-pointer">Pricing</li>
				<li className="px-5 cursor-pointer">Contact</li>
			</ul>
			<button className="px-6 py-3 mr-2 bg-ocean-pastel rounded-lg text-white text-md">
				Sign In
			</button>
		</div>
	);
};

export default Navbar;

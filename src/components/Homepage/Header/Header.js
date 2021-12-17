// Dependencies
import React from "react";

// Images
import headerImage from "../../../assets/img/header.svg";

// Styles
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={`pt-[3rem] h-screen flex flex-row justify-between p-8 ${styles.header}`}>
			<div className="flex-[4_4_0%]">
				<p className="text-sm pt-24 pb-4 text-purple-pastel">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 inline mr-2 text-purple-pastel"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
					</svg>
					Best interactive learning website
				</p>
				<h1 className="text-5xl w-50 font-extrabold">
					A fun learning, <span className="text-ocean-pastel">anytime</span> and{" "}
					<span className="text-red-pastel">anywhere</span>
				</h1>
				<p className="text-sm w-[70%] text-gray-500 mt-5">
					Interactive learning platform that provides various features to provide a better learning
					experience.
				</p>
				<div className="relative mt-5 w-[80%]">
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Subject you want to learn?"
						className="border-[1px] border-gray-500 px-4 py-2 text-sm rounded-lg w-[100%]"
					/>
					<button className="absolute top-[50%] translate-y-[-50%] right-0 flex items-center py-[0.7rem] px-3 bg-ocean-pastel rounded-lg text-sm text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 inline mr-1"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							/>
						</svg>
						Search
					</button>
				</div>
			</div>
			<div className="flex-[5_5_0%] self-center">
				<img src={headerImage} alt="hero" className="m-auto w-[100%] mt-2" />
			</div>
			<div className="flex-[2_2_0%] mt-28">
				<div className="flex flex-col justify-center ml-5 w-[80%] ml-12">
					<div className="flex flex-row mt-8">
						<div className="flex flex-col justify-between font-bold text-lg">
							01<div className="h-[5px] bg-purple-pastel w-[100%] rounded-lg mb-1"></div>
						</div>
						<p className="ml-4 text-sm">
							Easy <br />
							configuration
						</p>
					</div>
					<div className="flex flex-row mt-8">
						<div className="flex flex-col justify-between font-bold text-lg">
							02<div className="h-[5px] bg-purple-pastel w-[100%] rounded-lg mb-1"></div>
						</div>
						<p className="ml-4 text-sm">
							Super <br />
							interactive
						</p>
					</div>
					<div className="flex flex-row mt-8">
						<div className="flex flex-col justify-between font-bold text-lg">
							03<div className="h-[5px] bg-purple-pastel w-[100%] rounded-lg mb-1"></div>
						</div>
						<p className="ml-4 text-sm">
							Affordable <br />
							price
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
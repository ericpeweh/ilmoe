// Dependencies
import React from "react";

// Images
import badge from "../../../assets/img/badge.png";

const About = () => {
	return (
		<section className="h-[100%] p-10">
			<h2 className="font-bold text-gray-700 text-4xl text-center pt-8 mb-3 block mb-6">
				Pricing & Plan
			</h2>
			<div className="h-[10rem] flex flex-col justify-center items-center">
				<p className="w-[40%] text-center ">
					Sign in in less than 40 seconds. Try out our 14 days risk free trial. Upgrade at anytime,
					no additional costs. Easy setup.
				</p>
				<div className="flex flex-row justify-between items-center mt-8">
					<button className="mr-2 bg-purple-pastel py-4 px-8 rounded-lg text-xl text-white">
						Start Free Trial
					</button>
					<button className="ml-2 bg-ocean-pastel py-4 px-8 rounded-lg text-xl text-white">
						Custom Plan
					</button>
				</div>
			</div>
			<hr className="mt-6 mb-4" />
			<div className="flex flex-row items-center justify-around">
				<div className="py-5 px-8 bg-sky-pastel w-full mb-8 rounded-lg m-4 ">
					<h4 className="text-center text-2xl font-bold text-gray-600 my-4">Basic</h4>
					<p className="text-center">
						All our core features for affordable price. No extra configuration.
					</p>
					<p className="relative text-center my-4">
						<span className="absolute font-bold">$</span>
						<span className="text-7xl font-bold ml-2">9</span>
						<span>/month</span>
					</p>
					<button className="py-3 px-4 w-full rounded-lg my-2 text-lg bg-ocean-pastel text-white">
						Get Started
					</button>
				</div>
				<div className="py-5 px-8 bg-sky-pastel w-full mb-8 rounded-lg m-4 relative">
					<h4 className="text-center text-2xl font-bold text-gray-600 my-4">Standard</h4>
					<p className="text-center">All core features & special custom configuration included.</p>
					<p className="relative text-center my-4">
						<span className="absolute font-bold">$</span>
						<span className="text-7xl font-bold ml-2">15</span>
						<span>/month</span>
					</p>
					<button className="py-3 px-4 w-full rounded-lg my-2 text-lg bg-ocean-pastel text-white">
						Get Started
					</button>
					<img
						src={badge}
						alt="best seller"
						className="absolute top-[-0.6rem] right-[-1rem]"
						width={80}
					/>
				</div>
				<div className="py-5 px-8 bg-sky-pastel w-full mb-8 rounded-lg m-4 ">
					<h4 className="text-center text-2xl font-bold text-gray-600 my-4">Premium</h4>
					<p className="text-center">
						Included unlimited access to all courses. Full configuration.
					</p>
					<p className="relative text-center my-4">
						<span className="absolute font-bold">$</span>
						<span className="text-7xl font-bold ml-2">25</span>
						<span>/month</span>
					</p>
					<button className="py-3 px-4 w-full rounded-lg my-2 text-lg bg-ocean-pastel text-white">
						Get Started
					</button>
				</div>
				<div className="py-5 px-8 bg-sky-pastel w-full mb-8 rounded-lg m-4 ">
					<h4 className="text-center text-2xl font-bold text-gray-600 my-4">School</h4>
					<p className="text-center">
						Included custom courses, classroom, scores, exam, statistics.
					</p>
					<p className="relative text-center my-4">
						<span className="absolute font-bold">$</span>
						<span className="text-7xl font-bold ml-2">59</span>
						<span>/month</span>
					</p>
					<button className="py-3 px-4 w-full rounded-lg my-2 text-lg bg-ocean-pastel text-white">
						Get Started
					</button>
				</div>
			</div>
		</section>
	);
};

export default About;

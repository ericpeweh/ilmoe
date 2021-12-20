// Dependencies
import React from "react";

// Images
import logo from "../../../assets/img/logo.png";
import WaIcon from "./Icons/WaIcon";
import MailIcon from "./Icons/MailIcon";
import PhoneIcon from "./Icons/PhoneIcon";

// Styles
import styles from "./Footer.module.css";

const Footer = React.forwardRef((props, ref) => {
	return (
		<footer className="bg-zinc-800 text-white" ref={ref} id="contacts">
			<div className={`grid grid-cols-5 flex-wrap justify-around p-12 ${styles.container}`}>
				<div className={`flex flex-1 flex-col mr-4 ${styles.address}`}>
					<img src={logo} alt="logo" width={120} className="block" />
					<h4 className="p-2 text-lg font-bold">ILMOE HQ</h4>
					<p className="p-2 pt-0">
						Jl. Merdeka Barat No.374, Tengah, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat
						78116
					</p>
				</div>
				<div className={`flex flex-1 flex-col mx-4 ${styles.campaign}`}>
					<h4 className="text-lg font-bold">Our Campaign</h4>
					<ul>
						<li className="cursor-pointer hover:text-purple-pastel mt-8"> Bebas Tanpa Corona</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2"> Indonesia Bisa!</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2"> Beasiswa Nasional</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2"> Negeri Cerdas</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2"> Diskon Natal 2021</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2"> Mimpi Tiada Batas</li>
					</ul>
				</div>
				<div className={`flex flex-1 flex-col mx-4 ${styles.products}`}>
					<h4 className="text-lg font-bold">Products</h4>
					<ul>
						<li className="cursor-pointer hover:text-purple-pastel mt-8">Primary School Bundle</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2">
							Junior High School Bundle
						</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2">
							Senior High School Bundle
						</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2"> Creativity Bundle</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2">Computer Bundle</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2">Science & Math</li>
					</ul>
				</div>
				<div className={`flex flex-1 flex-col mx-4 ${styles.pricing}`}>
					<h4 className="text-lg font-bold">Pricing</h4>
					<ul>
						<li className="cursor-pointer hover:text-purple-pastel mt-8">Basic Plan</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2">Standard Plan</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2">Premium Plan</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2"> School Plan</li>
						<li className="cursor-pointer hover:text-purple-pastel mt-2">Custom Plan</li>
					</ul>
				</div>
				<div className={`flex flex-1 flex-col ml-4 ${styles.contacts}`}>
					<h4 className="text-lg font-bold">Contacts</h4>
					<div className="flex flex-col mt-4">
						<div className="flex flex-row items-center">
							<WaIcon />
							<p className="ml-2 hover:text-purple-pastel hover:underline underline-offset-4 cursor-pointer">
								0812 5005 4005
							</p>
						</div>
						<div className="flex flex-row items-center mt-4">
							<MailIcon />
							<p className="ml-2  hover:text-purple-pastel hover:underline underline-offset-4 cursor-pointer">
								csinfo@ilmoe.com
							</p>
						</div>
						<div className="flex flex-row items-center mt-4">
							<PhoneIcon />
							<p className="ml-2  hover:text-purple-pastel hover:underline underline-offset-4 cursor-pointer">
								(0561) 735555
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
});

export default Footer;

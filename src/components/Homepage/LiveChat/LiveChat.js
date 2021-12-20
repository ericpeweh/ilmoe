// Dependencies
import React, { useState } from "react";

// Images
import cs from "../../../assets/img/cs.png";
import sticker from "../../../assets/img/sticker.svg";

// Styles
import styles from "./LiveChat.module.css";

const LiveChat = () => {
	const [showChat, setShowChat] = useState(false);
	const [chat, setChat] = useState("");

	const showChatHandler = () => {
		setShowChat(true);
	};

	const closeChatHandler = () => {
		setShowChat(false);
	};

	const chatChangeHandler = e => {
		setChat(e.target.value);
	};

	return (
		<>
			{showChat && (
				<div
					className={`fixed bottom-[2rem] right-[2rem] w-[25vw] h-[70vh] bg-white rounded-lg drop-shadow-lg overflow-hidden min-w-[25rem] z-[100] ${styles.liveChat}`}
				>
					{/* HEADER */}
					<div className="flex flex-row justify-start items-center p-4 bg-ocean-pastel relative">
						<img src={cs} alt="customer service" className="rounded-full border-4" width={60} />
						<div className="ml-4 ">
							<h4 className="text-white font-bold text-xl">Amanda</h4>
							<p className="text-white text-sm">Customer Service</p>
						</div>
						<div className="absolute top-[0.5rem] right-[0.5rem]" onClick={closeChatHandler}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-white cursor-pointer"
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
						</div>
					</div>

					{/* CHAT BUBBLE*/}
					<div className="p-4 flex flex-col">
						<p className="rounded-lg bg-slate-200 self-start p-2 px-3 mb-2 relative pr-16">
							Hello, i'm Amanda
							<span className="absolute bottom-0 right-0 text-xs pb-1 pr-2">15:01</span>
						</p>
						<p className="rounded-lg bg-slate-200 self-start p-2 px-3 mb-2 pr-16 relative">
							How can i help you ?
							<span className="absolute bottom-0 right-0 text-xs pb-1 pr-2">15:02</span>
						</p>
						<div className="relative w-[50%]">
							<img src={sticker} alt="welcome" className="w-[80%] mt-8" />
							<span className="absolute bottom-0 right-0 text-xs pb-1 pr-2">15:02</span>
						</div>
					</div>

					{/* INPUT */}
					<div className="absolute bottom-0 left-0 p-2 w-full bg-slate-200 ">
						<div className="flex flex-row items-center justify-between w-full ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 block m-1 cursor-pointer text-slate-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 block mx-2 my-1 cursor-pointer text-slate-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
								/>
							</svg>
							<input
								type="text"
								className="border-2 rounded-lg block flex-1 p-1 px-2"
								value={chat}
								onChange={chatChangeHandler}
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`h-8 w-8 rotate-90 block mx-2 my-1 ${
									chat === ""
										? "cursor-not-allowed text-slate-400"
										: "cursor-pointer text-ocean-pastel"
								}`}
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
							</svg>
						</div>
					</div>
				</div>
			)}

			{/* FLOATING BUTTON */}
			<div
				className={`fixed bottom-[2rem] right-[2rem] rounded-full bg-ocean-pastel p-4 drop-shadow-xl cursor-pointer ${styles.floatButton}`}
				onClick={showChatHandler}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-12 w-12 text-white"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					/>
				</svg>
			</div>
		</>
	);
};

export default LiveChat;

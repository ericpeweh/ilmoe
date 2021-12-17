module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				"red-pastel": "#FFA5D8",
				"yellow-pastel": "#F6F2A0",
				"ocean-pastel": "#5784BB",
				"sky-pastel": "#B6D8F3",
				"purple-pastel": "#BE9DDF",
				white: "#ffffff"
			},
			fontFamily: {
				regular: ["cyntho-next-regular", "sans-serif"],
				bold: ["cyntho-next-bold", "sans-serif"],
				extrabold: ["cyntho-next-extra-bold", "sans-serif"],
				thin: ["cyntho-next-thin", "sans-serif"]
			}
		}
	},
	plugins: []
};

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ["DM Mono", "var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["DM Mono", "var(--font-calsans)"],
				body: ["DM Mono", "monospace"], // Ensuring all text defaults to DM Mono
			},
			typography: {
				DEFAULT: {
					css: {
						fontFamily: "DM Mono, monospace", // Ensures typography plugin uses DM Mono
						"code::before": { content: '""' },
						"code::after": { content: '""' },
					},
				},
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": { opacity: "0%" },
					"75%": { opacity: "0%" },
					"100%": { opacity: "100%" },
				},
				"fade-left": {
					"0%": { transform: "translateX(100%)", opacity: "0%" },
					"30%": { transform: "translateX(0%)", opacity: "100%" },
					"100%": { opacity: "0%" },
				},
				"fade-right": {
					"0%": { transform: "translateX(-100%)", opacity: "0%" },
					"30%": { transform: "translateX(0%)", opacity: "100%" },
					"100%": { opacity: "0%" },
				},
				title: {
					"0%": { "line-height": "0%", "letter-spacing": "0.25em", opacity: "0" },
					"25%": { "line-height": "0%", opacity: "0%" },
					"80%": { opacity: "100%" },
					"100%": { "line-height": "100%", opacity: "100%" },
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};

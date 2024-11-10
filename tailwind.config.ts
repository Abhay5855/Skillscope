import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(22 163 74 / 1)',
				secondary: '#6941C6',
				border: '#707d86',
				focus: '#7A59D8',
				hover: '#5B36B0',
				text: '#F9F5FF',
			},

			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
			backgroundColor: {
				btn: '#f4f2ee',
				preview: '#f4f2ee',
				btnHover: 'rgb(21 128 61 / 1)',
			},

			borderColor: {
				border: '#e6e6e6',
				preview: '#e1dedc',
			},

			borderRadius: {
				b1: '0.8rem',
			},

			boxShadow: {
				custom: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
			},
		},
	},
	plugins: [],
};
export default config;

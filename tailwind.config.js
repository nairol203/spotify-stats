/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			screens: {
				xl: '1120px',
				'2xl': '1650px',
			},
			colors: {
				primary: '#C21010',
				secondary: '#E64848',
				tertiary: '#fff',
				background: '#fff',
				card: '#f2f2f2',
				hover: '#e9e9e9',
				dark: {
					tertiary: '#545556',
					background: '#0f0f0f',
					card: '#272727',
					hover: '#646464',
				},
			},
		},
	},
	plugins: [],
};

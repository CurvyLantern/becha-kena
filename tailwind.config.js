/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			flex: new Array(10).fill(0).reduce((p, c, i) => {
				p[i + 1] = '' + (i + 1);
				return p;
			}, {}),
			colors: {
				accent: 'rgb(105, 63, 245)',
			},
		},
	},
	plugins: [],
};

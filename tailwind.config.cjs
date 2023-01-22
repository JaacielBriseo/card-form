/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'active-input': 'linear-gradient(to bottom right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))',
				Mobile: 'url(images/bg-main-mobile.png)',
			},
			colors: {
				White: 'hsl(0, 0%, 100%)',
				LightGrayishViolet: 'hsl(270, 3%, 87%)',
				DarkGrayishViolet: 'hsl(279, 6%, 55%)',
				VeryDarkViolet: 'hsl(278, 68%, 11%)',
				Error: 'hsl(0, 100%, 66%)',
				ActivePurple: 'hsl(249, 99%, 64%)',
			},
			fontSize: {
				BodySize: '18px',
			},
			fontFamily: {
				Grotesk: ['Space Grotesk', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

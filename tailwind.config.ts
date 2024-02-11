import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	plugins: [],
	theme: {
		extend: {
			colors: {
				accent: '#9C8B58',
				black: '#0B1017',
				primary: '#2C3E57',
				sub: '#5979A5',
			},
		},
	},
}
export default config

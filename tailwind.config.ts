import lineClamp from '@tailwindcss/line-clamp'
import type { Config } from 'tailwindcss'
import colors, { yellow } from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const primary: string = '#5FC5FF'

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/screens/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/entities/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx,scss}',
	],
	theme: {
		colors: {
			primary,
			white: colors.white,
			black: colors.black,
			yellow: '#EEFB61',
			gray: {
				100: '#F6F6F6',
				200: '#E4E4E4',
				300: '#C0C0C0',
				400: '#808080',
				500: '#4A4A4A',
			},
		},
		screens: {
			laptop: { max: '1599px' },
			tablet: { max: '999px' },
			mobile: { max: '639px' },
		},
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)'],
			},
			spacing: {
				600: '600px',
				550: '550px',
				500: '500px',
				440: '440px',
				340: '340px',
				300: '300px',
				270: '270px',
				200: '200px',
				150: '150px',
				120: '120px',
				100: '100px',
				80: '80px',
				75: '75px',
				60: '60px',
				50: '50px',
				40: '40px',
				35: '35px',
				34: '34px',
				30: '30px',
				25: '25px',
				24: '24px',
				20: '20px',
				18: '18px',
				15: '15px',
				10: '10px',
				8: '8px',
				5: '5px',
				4: '4px',
				3: '3px',
			},
			borderRadius: {
				circle: '50%',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
		},
	},
	plugins: [
		lineClamp,
		plugin(({ addComponents, addUtilities, theme }) => {
			addUtilities({
				'.H1': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: '64px',
					lineHeight: '120%',
					textTransform: 'uppercase',
				},
				'.H1-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: '36px',
					lineHeight: '120%',
					textTransform: 'uppercase',
				},
				'.H2': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: '48px',
					lineHeight: '120%',
					textTransform: 'uppercase',
				},
				'.H2-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: '28px',
					lineHeight: '120%',
					textTransform: 'uppercase',
				},
				'.H3': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.medium'),
					fontSize: '36px',
					lineHeight: '120%',
					textTransform: 'uppercase',
				},
				'.H3-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.medium'),
					fontSize: '20px',
					lineHeight: '120%',
					textTransform: 'uppercase',
				},
				'.H4': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.semibold'),
					fontSize: '24px',
					lineHeight: '120%',
				},
				'.H4-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.semibold'),
					fontSize: '18px',
					lineHeight: '120%',
				},
				'.T1': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: '40px',
					lineHeight: '100%',
				},
				'.T1-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: '24px',
					lineHeight: '100%',
				},
				'.T2': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.regular'),
					fontSize: '16px',
					lineHeight: '140%',
				},
				'.T2-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.regular'),
					fontSize: '14px',
					lineHeight: '140%',
				},
				'.T3': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.semibold'),
					fontSize: '16px',
					lineHeight: '140%',
					letterSpacing: '0.07em',
					// textTransform: 'lowercase',
				},
				'.T3-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.semibold'),
					fontSize: '14px',
					lineHeight: '140%',
					letterSpacing: '0.07em',
					// textTransform: 'lowercase',
				},
				'.T4': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.medium'),
					fontSize: '14px',
					lineHeight: '100%',
					textTransform: 'uppercase',
				},
				'.T4-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.medium'),
					fontSize: '12px',
					lineHeight: '140%',
					textTransform: 'uppercase',
				},
				'.T5': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.light'),
					fontSize: '14px',
					lineHeight: '100%',
				},
				'.T5-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.light'),
					fontSize: '12px',
					lineHeight: '100%',
				},
				'.section': {
					width: '1200px',
					margin: '0 auto',
				},
				'.section-laptop': {
					width: 'auto',
					margin: '0 20px',
				},
				'.section-mobile': {
					width: 'auto',
					margin: '0 10px',
				},
				'.img-object-cover': {
					objectFit: 'cover',
					objectPosition: 'center',
				},
				'.img-object-contain': {
					objectFit: 'contain',
					objectPosition: 'center',
				},
			}),
				addComponents({
					'.link': {
						display: 'block',
						color: primary,
						borderColor: primary,
						'&:hover': {
							color: theme('colors.gray.400'),
							borderColor: theme('colors.gray.400'),
						},
						'&:active': {
							color: theme('colors.gray.500'),
							borderColor: theme('colors.gray.500'),
						},
					},
					'.link-white': {
						display: 'block',
						color: theme('colors.white'),
						borderColor: theme('colors.white'),
						'&:hover': {
							color: theme('colors.gray.300'),
							borderColor: theme('colors.gray.300'),
						},
						'&:active': {
							color: theme('colors.gray.200'),
							borderColor: theme('colors.gray.200'),
						},
					},
					'.button': {
						width: 'fit-content',
						padding: '15px 30px',
						textAlign: 'center',
						backgroundColor: primary,
						color: theme('colors.white'),
						'&:not(:disabled):hover': {
							backgroundColor: theme('colors.gray.400'),
						},
						'&:not(:disabled):active': {
							backgroundColor: theme('colors.gray.500'),
						},
					},
					'.button-white': {
						width: 'fit-content',
						padding: '15px 30px',
						backgroundColor: theme('colors.white'),
						color: theme('colors.black'),
						'&:not(:disabled):hover': {
							backgroundColor: theme('colors.gray.200'),
						},
						'&:not(:disabled):active': {
							color: theme('colors.white'),
							backgroundColor: theme('colors.gray.500'),
						},
					},
				})
		}),
	],
}
export default config

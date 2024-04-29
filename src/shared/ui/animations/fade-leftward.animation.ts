import { Variants } from 'framer-motion'

export const getFadeLeftWardAnimation = (x: number = -20): Variants => ({
	hidden: {
		opacity: 0,
		x: x,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
		},
	},
})

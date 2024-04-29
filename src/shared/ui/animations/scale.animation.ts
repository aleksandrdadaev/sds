import { Variants } from 'framer-motion'

export const scaleAnimation: Variants = {
	hidden: {
		scale: 0,
	},
	show: {
		scale: 1,
		transition: {
			duration: 0.3,
		},
	},
}

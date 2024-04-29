import { Variants } from 'framer-motion'

export const fadeAnimation: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
}

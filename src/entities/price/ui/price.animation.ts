import { Variants } from 'framer-motion'

export const priceAnimation: Variants = {
	hidden: {
		y: -20,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
}

import { Variants } from 'framer-motion'

export const blueLineAnimation: Variants = {
	hidden: {
		y: '-100%',
	},
	show: {
		y: 0,
		transition: {
			duration: 0.3,
		},
	},
}

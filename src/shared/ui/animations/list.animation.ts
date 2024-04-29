import { Variants } from 'framer-motion'

export const listAnimation: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.3,
		},
	},
}

export const clearListAnimation: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0,
		},
	},
}

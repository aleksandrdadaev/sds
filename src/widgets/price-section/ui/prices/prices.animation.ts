import { Variants } from 'framer-motion'

export const pricesAnimation: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.3,
		},
	},
}

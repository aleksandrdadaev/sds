import { Variants } from 'framer-motion'

export const sectionAnimation: Variants = {
	hidden: {},
	show: {
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.3,
		},
	},
}

export const innerSectionAnimation: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

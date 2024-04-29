import { Variants } from 'framer-motion'

export const headerVariants: Variants = {
	hidden: {
		opacity: 0,
		height: 0,
		transition: {
			when: 'afterChildren',
		},
	},
	show: {
		opacity: 1,
		height: 'auto',
		transition: {
			when: 'beforeChildren',
		},
	},
}

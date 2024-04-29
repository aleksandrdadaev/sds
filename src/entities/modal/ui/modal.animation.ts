import { Variants } from 'framer-motion'

export const modalAnimation: Variants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			when: 'afterChildren',
		},
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
			when: 'beforeChildren',
		},
	},
}

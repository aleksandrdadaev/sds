import { Variants } from 'framer-motion'

export const getArrowAnimation = (isMobile: boolean = true): Variants => {
	return isMobile
		? {
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
		: {
				hidden: {
					x: '-100%',
				},
				show: {
					x: 0,
					transition: {
						duration: 0.3,
					},
				},
			}
}

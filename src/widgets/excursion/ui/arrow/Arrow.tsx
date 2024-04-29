import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import arrowIcon from '@/shared/assets/icons/arrow-right.svg'
import { useResize } from '@/shared/lib/hooks/useResize'

import styles from './Arrow.module.scss'
import { getArrowAnimation } from './arrow.animation'

const Arrow: FC = () => {
	const { isMobile, width } = useResize()

	return width ? (
		<motion.div
			className={styles.wrapper}
			variants={getArrowAnimation(isMobile)}
		>
			<div className={styles.img}>
				<Image src={arrowIcon} alt='' fill />
			</div>
			<span className={styles.stick} />
		</motion.div>
	) : (
		<></>
	)
}

export default Arrow

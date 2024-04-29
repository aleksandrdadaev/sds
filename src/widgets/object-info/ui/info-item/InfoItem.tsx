import { motion } from 'framer-motion'
import { FC } from 'react'

import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'

import { IInfoItem } from '../../model/types/info-item-props.type'

import styles from './InfoItem.module.scss'

const InfoItem: FC<IInfoItem> = ({ span, value }) => {
	return (
		<motion.article className={styles.wrapper} variants={sectionAnimation}>
			<motion.span
				className={styles.span}
				variants={getFadeLeftWardAnimation()}
			>
				{span}
			</motion.span>
			<motion.span className={styles.value} variants={fadeAnimation}>
				{value ? value : '-'}
			</motion.span>
		</motion.article>
	)
}

export default InfoItem

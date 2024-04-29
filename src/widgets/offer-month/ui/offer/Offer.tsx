'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { useResize } from '@/shared/lib/hooks/useResize'
import { goToAnchor } from '@/shared/lib/utils/go-to-anchor.util'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import { innerSectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'
import BlockTitle from '@/shared/ui/block-title/BlockTitle'

import { offerText, offerTitle } from '../../config/offer.config'

import styles from './Offer.module.scss'

const Offer: FC = () => {
	const { isMobile, isTablet } = useResize()
	return (
		<motion.div className={styles.wrapper} variants={innerSectionAnimation}>
			<div className={styles.content}>
				<BlockTitle variants={getFadeLeftWardAnimation()}>
					{offerTitle}
				</BlockTitle>
				<motion.p className={styles.text} variants={getFadeLeftWardAnimation()}>
					{offerText}
				</motion.p>
			</div>
			<motion.button
				variants={fadeAnimation}
				onClick={() => goToAnchor('application-form', isTablet || isMobile)}
				className={styles.anchor}
			>
				Подробнее
			</motion.button>
		</motion.div>
	)
}

export default Offer

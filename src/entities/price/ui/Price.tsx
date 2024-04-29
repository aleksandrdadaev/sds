'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { getNumberOfAny } from '@/shared/lib/utils/get-number-of-any'
import { getPrice } from '@/shared/lib/utils/price.util'
import { IPrice } from '@/shared/model/types/price.type'
import { blueLineAnimation } from '@/shared/ui/animations/blue-line.animation'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import {
	clearListAnimation,
	listAnimation,
} from '@/shared/ui/animations/list.animation'
import BlockTitle from '@/shared/ui/block-title/BlockTitle'

import styles from './Price.module.scss'
import { priceAnimation } from './price.animation'

export const Price: FC<{ info: IPrice }> = ({ info }) => {
	return (
		<motion.article className={styles.wrapper} variants={listAnimation}>
			<motion.span className={styles.blueLine} variants={blueLineAnimation} />
			<motion.div variants={clearListAnimation}>
				<motion.span
					className={styles.term}
					variants={getFadeLeftWardAnimation()}
				>
					Срок строительства —{' '}
					{`${getNumberOfAny('месяц', info.months, '', 'а', 'ев')}`}
				</motion.span>
				<div className={styles.content}>
					<BlockTitle variants={getFadeLeftWardAnimation()}>
						{info.name}
					</BlockTitle>
					<div className={styles.priceWrapper}>
						<motion.span variants={fadeAnimation}>от</motion.span>
						<motion.span className={styles.price} variants={priceAnimation}>
							{getPrice(info.price)}
						</motion.span>
						<motion.span variants={fadeAnimation}>за м²</motion.span>
					</div>
				</div>
			</motion.div>
		</motion.article>
	)
}

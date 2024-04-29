'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { blueLineAnimation } from '@/shared/ui/animations/blue-line.animation'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { listAnimation } from '@/shared/ui/animations/list.animation'
import BlockTitle from '@/shared/ui/block-title/BlockTitle'

import { IBlueLineBlock } from '../model/types/blue-line-block.type'

import styles from './BlueLineBlock.module.scss'

export const BlueLineBlock: FC<{ info: IBlueLineBlock }> = ({
	info: { text, title },
}) => {
	return (
		<motion.article className={styles.wrapper} variants={listAnimation}>
			<motion.span className={styles.blueLine} variants={blueLineAnimation} />
			<motion.div
				className={styles.content}
				variants={getFadeLeftWardAnimation()}
			>
				<BlockTitle>{title}</BlockTitle>
				<p className={styles.text}>{text}</p>
			</motion.div>
		</motion.article>
	)
}

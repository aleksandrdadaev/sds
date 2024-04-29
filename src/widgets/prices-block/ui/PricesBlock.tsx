'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { Price } from '@/entities/price'

import { prices } from '@/shared/config/prices.config'
import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { listAnimation } from '@/shared/ui/animations/list.animation'
import { innerSectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'

import styles from './PricesBlock.module.scss'

export const PricesBlock: FC = () => {
	return (
		<motion.section
			className={styles.wrapper}
			variants={innerSectionAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<motion.div className={styles.prices} variants={listAnimation}>
				{prices.map(price => (
					<Price info={price} key={price.name} />
				))}
			</motion.div>
			<motion.div className={styles.img} variants={fadeScaleAnimation}>
				<Image src={'/price.png'} alt='Цены' fill />
			</motion.div>
		</motion.section>
	)
}

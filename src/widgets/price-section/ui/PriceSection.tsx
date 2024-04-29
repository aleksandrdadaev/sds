'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './PriceSection.module.scss'
import Prices from './prices/Prices'

export const PriceSection: FC = () => {
	return (
		<motion.section
			className={styles.wrapper}
			variants={sectionAnimation}
			initial='hidden'
			whileInView={'show'}
			viewport={{ once: true }}
		>
			<SubTitle variants={getFadeLeftWardAnimation(-50)}>
				Цена за м² и сроки строительства
			</SubTitle>
			<motion.div className={styles.img} variants={fadeScaleAnimation}>
				<Image
					src={'/price.png'}
					alt='Цены'
					fill
					className='img-object-cover'
				/>
			</motion.div>
			<Prices />
		</motion.section>
	)
}

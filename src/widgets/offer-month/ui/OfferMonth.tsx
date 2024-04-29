'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import { Element } from 'react-scroll'

import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './OfferMonth.module.scss'
import Offer from './offer/Offer'
import Slider from './slider/Slider'

export const OfferMonth: FC = () => {
	return (
		<Element name='events'>
			<section className={styles.wrapper}>
				<SubTitle
					variants={getFadeLeftWardAnimation(-50)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					Предложение месяца
				</SubTitle>
				<motion.div
					className={styles.content}
					variants={sectionAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<Slider />
					<Offer />
				</motion.div>
			</section>
		</Element>
	)
}

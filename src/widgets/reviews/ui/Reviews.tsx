'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'
import { Element } from 'react-scroll'

import { FeedBack } from '@/entities/feed-bak'

import { instagram } from '@/shared/config/instagram.config'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'
import { MotionLink } from '@/shared/ui/motion-link'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import { reviews } from '../config/reviews.config'

import styles from './Reviews.module.scss'

export const Reviews: FC = () => {
	return (
		<section>
			<Element name='reviews' className={styles.wrapper}>
				<SubTitle
					variants={getFadeLeftWardAnimation(-50)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					отзывы
				</SubTitle>
				<motion.div
					className={styles.reviews}
					variants={sectionAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					{reviews.map(review => (
						<FeedBack feedBack={review} key={review.id} />
					))}
				</motion.div>
				<MotionLink
					href={instagram}
					className={styles.instLink}
					target='_blank'
					variants={fadeAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					Показать другие отзывы
				</MotionLink>
			</Element>
		</section>
	)
}

'use client'

import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { Element } from 'react-scroll'

import { useGetAllFeedBacks } from '@/features/get-all-feedbacks'

import { FeedBack } from '@/entities/feed-bak'

import { instagram } from '@/shared/config/instagram.config'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'
import Loader from '@/shared/ui/loader/Loader'
import { MotionLink } from '@/shared/ui/motion-link'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './Reviews.module.scss'

export const Reviews: FC = () => {
	const [pageSize, setPageSize] = useState<number>(4)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const {
		isError,
		isLoading,
		isSuccess,
		count = 0,
		feedbacks = [],
	} = useGetAllFeedBacks({ pageNumber, pageSize })
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
				{isLoading && <Loader classname={styles.loader} />}
				{isSuccess && count === 0 && (
					<span className={styles.span}>Отзывы появятся позже</span>
				)}
				{isSuccess && count > 0 && (
					<motion.div
						className={styles.reviews}
						variants={sectionAnimation}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						{feedbacks.map(review => (
							<FeedBack feedBack={review} key={review.id} />
						))}
					</motion.div>
				)}
				{isError && (
					<span className={styles.span}>Не удалось загрузить отзывы</span>
				)}

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

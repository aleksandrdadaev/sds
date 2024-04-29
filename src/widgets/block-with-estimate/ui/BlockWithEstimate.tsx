'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { listAnimation } from '@/shared/ui/animations/list.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './BlockWithEstimate.module.scss'
import FormWithEstimate from './form-with-estimate/FormWithEstimate'

export const BlockWithEstimate: FC = () => {
	return (
		<motion.section
			className={styles.wrapper}
			variants={sectionAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<motion.div className={styles.header} variants={listAnimation}>
				<SubTitle variants={getFadeLeftWardAnimation(-50)}>
					У вас уже есть проект или смета?
				</SubTitle>
				<motion.p className={styles.text} variants={getFadeLeftWardAnimation()}>
					Понравился проект на другом сайте, но не устроила цена. Прикрепите
					готовый документ или ссылку на проект и мы рассчитаем его стоимость.
					Возможно, мы предложим более низкую цену.
				</motion.p>
			</motion.div>
			<motion.div className={styles.img} variants={fadeScaleAnimation}>
				<Image
					src={'/estimate.jpeg'}
					alt='У вас уже есть проект или смета?'
					fill
					className='img-object-cover'
				/>
			</motion.div>
			<FormWithEstimate />
		</motion.section>
	)
}

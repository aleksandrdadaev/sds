'use client'

import { FC } from 'react'

import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import { reasons } from '../config/reasons.config'

import styles from './WhyChooseUs.module.scss'
import ReasonBlock from './reason-block/ReasonBlock'

export const WhyChooseUs: FC = () => {
	return (
		<section className={styles.wrapper}>
			<SubTitle
				variants={getFadeLeftWardAnimation(-50)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				почему выбирают нас
			</SubTitle>
			<div className={styles.list}>
				{reasons.map(reasonBlock => (
					<ReasonBlock reasonBlock={reasonBlock} key={reasonBlock.image} />
				))}
			</div>
		</section>
	)
}

'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { description } from '@/shared/config/meta/meta-calculator.config'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import {
	innerSectionAnimation,
	sectionAnimation,
} from '@/shared/ui/animations/section-wrapper.animation'
import stylesButton from '@/shared/ui/button/Button.module.scss'
import { MotionLink } from '@/shared/ui/motion-link'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './CalcBlock.module.scss'

export const CalcBlock: FC = () => {
	return (
		<section className={styles.wrapper}>
			<SubTitle
				variants={getFadeLeftWardAnimation(-50)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				Рассчитай свою мечту
			</SubTitle>

			<motion.div
				className={styles.content}
				variants={sectionAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<motion.div className={styles.img} variants={fadeScaleAnimation}>
					<Image src={'/calculator.jpg'} alt='Рассчитай свою мечту' fill />
				</motion.div>
				<motion.div className={styles.info} variants={innerSectionAnimation}>
					<motion.p
						className={styles.text}
						variants={getFadeLeftWardAnimation()}
					>
						{description}
					</motion.p>
					<MotionLink
						href={'/calc'}
						className={clsx(styles.button, stylesButton.wrapper)}
						variants={fadeAnimation}
					>
						Рассчитать стоимость
					</MotionLink>
				</motion.div>
			</motion.div>
		</section>
	)
}

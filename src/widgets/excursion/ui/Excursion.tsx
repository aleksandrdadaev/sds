'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './Excursion.module.scss'
import Arrow from './arrow/Arrow'
import Content from './content/Content'
import Videos from './videos/Videos'

export const Excursion: FC = () => {
	return (
		<motion.section
			className={styles.wrapper}
			variants={sectionAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<SubTitle variants={getFadeLeftWardAnimation(-50)}>
				запись на экскурсию строящегося объекта
			</SubTitle>
			<Videos />
			<motion.div
				className={styles.content}
				variants={sectionAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<Arrow />
				<Content />
			</motion.div>
		</motion.section>
	)
}

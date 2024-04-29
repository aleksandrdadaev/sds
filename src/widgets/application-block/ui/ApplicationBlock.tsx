'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import { Element } from 'react-scroll'

import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'

import styles from './ApplicationBlock.module.scss'
import Form from './form/Form'
import Text from './text/Text'

export const ApplicationBlock: FC = () => {
	return (
		<section>
			<Element name='application-form' className={styles.wrapper}>
				<motion.div
					className={styles.content}
					variants={sectionAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<Text />
					<motion.div className={styles.img} variants={fadeScaleAnimation}>
						<Image src={'/application.png'} alt='Заявка' fill />
					</motion.div>
					<Form />
				</motion.div>
			</Element>
		</section>
	)
}

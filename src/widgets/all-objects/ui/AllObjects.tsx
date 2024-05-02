'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { Object } from '@/entities/object'

import { instagram } from '@/shared/config/instagram.config'
import { IObject } from '@/shared/model/types/object.type'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'
import stylesButton from '@/shared/ui/button/Button.module.scss'
import { MotionLink } from '@/shared/ui/motion-link'

import styles from './AllObjects.module.scss'

export const AllObjects: FC<{ objects: IObject[] }> = ({ objects }) => {
	return (
		<section className={styles.wrapper}>
			{objects.length === 0 ? (
				<span className={styles.span}>Объекты появятся позже</span>
			) : (
				<motion.div
					className={styles.list}
					variants={sectionAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					{objects.map(object => (
						<Object object={object} key={object.id} alt />
					))}
				</motion.div>
			)}

			<MotionLink
				href={instagram}
				target='_blank'
				className={stylesButton.wrapper}
				variants={fadeAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				Больше работ у нас в Instagram
			</MotionLink>
		</section>
	)
}

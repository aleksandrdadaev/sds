'use client'

import { motion } from 'framer-motion'
import { FC, useState } from 'react'

import { innerSectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'

import styles from './ObjectSlider.module.scss'
import Slider from './slider/Slider'
import Thumbs from './thumbs/Thumbs'

export const ObjectSlider: FC<{ slides: string[] }> = ({ slides }) => {
	const [thumbs, setThumbs] = useState<any>(null)

	return (
		<motion.section
			className={styles.wrapper}
			variants={innerSectionAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<Slider slides={slides} thumbs={thumbs} />
			<Thumbs slides={slides} setThumbs={setThumbs} />
		</motion.section>
	)
}

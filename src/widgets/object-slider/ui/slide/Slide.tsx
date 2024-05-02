'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'
import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'

import { ISlide } from '../../model/types/slide-props.type'

import styles from './Slide.module.scss'
import './slide.scss'

const Slide: FC<ISlide> = ({ src, thumb }) => {
	return (
		<motion.div
			className={clsx(styles.wrapper, {
				[styles.thumb]: thumb,
			})}
			variants={fadeScaleAnimation}
		>
			<Image src={getImageUrl(src)} alt='' fill />
		</motion.div>
	)
}

export default Slide

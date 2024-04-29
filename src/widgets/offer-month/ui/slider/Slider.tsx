'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/virtual'
import { Autoplay, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'

import { slides } from '../../config/slider.config'

import styles from './Slider.module.scss'

const Slider: FC = () => {
	return (
		<motion.div className={styles.wrapper} variants={fadeScaleAnimation}>
			<Swiper
				className={styles.slider}
				modules={[Virtual, Autoplay]}
				speed={1000}
				loop
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				allowTouchMove={false}
				virtual
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={slide} virtualIndex={index}>
						<Image
							src={slide}
							alt='Предложение месяца'
							fill
							className={styles.img}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</motion.div>
	)
}

export default Slider

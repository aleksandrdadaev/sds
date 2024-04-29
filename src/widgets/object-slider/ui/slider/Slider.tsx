import { motion } from 'framer-motion'
import { FC } from 'react'
import 'swiper/css/bundle'
import { EffectFade, Thumbs, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Slide from '../slide/Slide'

import styles from './Slider.module.scss'

const Slider: FC<{ slides: string[]; thumbs: any }> = ({ slides, thumbs }) => {
	return (
		<Swiper
			modules={[Virtual, Thumbs, EffectFade]}
			thumbs={{ swiper: thumbs }}
			effect='fade'
			speed={500}
			loop
			className={styles.wrapper}
		>
			{slides.map((slide, index) => (
				<SwiperSlide key={index} virtualIndex={index}>
					<Slide src={slide} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider

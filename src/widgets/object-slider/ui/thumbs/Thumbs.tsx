import { Dispatch, FC } from 'react'
import 'swiper/css/bundle'
import { Grid, Thumbs as ThumbsModule, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { getThumbGridLayout } from '../../lib/uitls/get-thumb-grid-layout.util'
import Slide from '../slide/Slide'

import styles from './Thumbs.module.scss'

const Thumbs: FC<{ slides: string[]; setThumbs: Dispatch<any> }> = ({
	setThumbs,
	slides,
}) => {
	return (
		<Swiper
			modules={[ThumbsModule, Virtual, Grid]}
			onSwiper={setThumbs}
			className={styles.wrapper}
			{...getThumbGridLayout(slides.length, 5, 5, 4, 2)}
		>
			{slides.map((slide, index) => (
				<SwiperSlide key={index} virtualIndex={index}>
					<Slide src={slide} thumb />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Thumbs

import { SwiperOptions } from 'swiper/types'

export const getThumbGridLayout = (
	rowsCount: number,
	desktop: number,
	laptop: number,
	tablet: number,
	mobile: number
): SwiperOptions => ({
	spaceBetween: 10,
	slidesPerView: desktop,
	grid: {
		fill: 'row',
		rows: Math.ceil(rowsCount / desktop),
	},
	breakpoints: {
		1000: {
			slidesPerView: laptop,
			spaceBetween: 10,
			grid: {
				rows: Math.ceil(rowsCount / laptop),
			},
		},
		640: {
			slidesPerView: tablet,
			spaceBetween: 5,
			grid: {
				rows: Math.ceil(rowsCount / tablet),
			},
		},
		320: {
			slidesPerView: mobile,
			spaceBetween: 5,
			grid: {
				rows: Math.ceil(rowsCount / mobile),
			},
		},
	},
})

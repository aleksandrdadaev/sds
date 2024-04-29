import { scroller } from 'react-scroll'

export const goToAnchor = (anchor: string, mobile?: boolean) => {
	setTimeout(() => {
		scroller.scrollTo(anchor, {
			smooth: true,
			isDynamic: true,
			offset: mobile ? -56 : -120,
		})
	}, 250)
}

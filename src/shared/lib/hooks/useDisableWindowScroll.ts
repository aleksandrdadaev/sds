import { useEffect } from 'react'

export const useDisableWindowScroll = (state: any) => {
	useEffect(() => {
		if (state) {
			document.body.style.height = '100vh'
			document.body.style.overflowY = 'hidden'
			document.body.style.paddingRight = '17px'
		} else {
			document.body.style.height = 'auto'
			document.body.style.overflowY = 'auto'
			document.body.style.paddingRight = '0px'
		}
	}, [state])
}

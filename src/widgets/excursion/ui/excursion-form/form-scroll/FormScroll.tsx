import { FC, PropsWithChildren } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'

import styles from './FormScroll.module.scss'

const FormScroll: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Scrollbar
			noScrollX
			wrapperProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.wrapper} />
					)
				},
			}}
			scrollerProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.scroller} />
					)
				},
			}}
			trackYProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.trackY} />
					)
				},
			}}
			thumbYProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.thumbY} />
					)
				},
			}}
			contentProps={{
				renderer: ({ elementRef, ...restProps }) => {
					return (
						<div {...restProps} ref={elementRef} className={styles.content} />
					)
				},
			}}
		>
			{children}
		</Scrollbar>
	)
}

export default FormScroll

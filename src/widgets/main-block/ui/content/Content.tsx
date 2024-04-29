'use client'

import { FC } from 'react'

import { useResize } from '@/shared/lib/hooks/useResize'
import { goToAnchor } from '@/shared/lib/utils/go-to-anchor.util'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import Button from '@/shared/ui/button/Button'
import Title from '@/shared/ui/title/Title'

import styles from './Content.module.scss'

const Content: FC = () => {
	const { isMobile, isTablet } = useResize()

	return (
		<div className={styles.wrapper}>
			<Title
				alt
				variants={getFadeLeftWardAnimation(-100)}
				initial='hidden'
				animate='show'
			>
				Мы построим дом вашей мечты
			</Title>
			<Button
				onClick={() => goToAnchor('application-form', isTablet || isMobile)}
				variants={fadeAnimation}
				initial='hidden'
				animate='show'
			>
				Оставить заявку
			</Button>
		</div>
	)
}

export default Content

'use client'

import Link from 'next/link'
import { FC } from 'react'

import { instagram } from '@/shared/config/instagram.config'
import { objects } from '@/shared/config/objects.config'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import stylesButton from '@/shared/ui/button/Button.module.scss'
import Loader from '@/shared/ui/loader/Loader'
import { MotionLink } from '@/shared/ui/motion-link'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './RecentObjects.module.scss'
import List from './list/List'

export const RecentObjects: FC = () => {
	return (
		<section className={styles.wrapper}>
			<SubTitle
				variants={getFadeLeftWardAnimation(-50)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				недавние объекты
			</SubTitle>
			{false && <Loader classname={styles.loader} />}
			<List objects={objects} />
			<MotionLink
				href={instagram}
				target='_blank'
				className={stylesButton.wrapper}
				variants={fadeAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				Больше работ у нас в Instagram
			</MotionLink>
		</section>
	)
}

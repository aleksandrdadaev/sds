'use client'

import { FC, useState } from 'react'

import { useGetObjects } from '@/features/get-objects'

import { instagram } from '@/shared/config/instagram.config'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import stylesButton from '@/shared/ui/button/Button.module.scss'
import Loader from '@/shared/ui/loader/Loader'
import { MotionLink } from '@/shared/ui/motion-link'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './RecentObjects.module.scss'
import List from './list/List'

export const RecentObjects: FC = () => {
	const [pageSize, setPageSize] = useState<number>(4)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const {
		isError,
		isLoading,
		isSuccess,
		count = 0,
		subjects = [],
	} = useGetObjects({ pageSize, pageNumber, isCompleted: true })

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
			{isLoading && <Loader classname={styles.loader} />}
			{isSuccess && count === 0 && (
				<span className={styles.span}>Объекты появятся позже</span>
			)}{' '}
			{isSuccess && count > 0 && <List objects={subjects} />}
			{isError && (
				<span className={styles.span}>Не удалось загрузить объекты</span>
			)}
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

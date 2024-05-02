'use client'

import { FC, useState } from 'react'

import { useGetObjects } from '@/features/get-objects'

import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import Loader from '@/shared/ui/loader/Loader'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ObjectsUnderConstruction.module.scss'
import List from './list/List'

export const ObjectsUnderConstruction: FC = () => {
	const [pageSize, setPageSize] = useState<number>(2)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const {
		isError,
		isLoading,
		isSuccess,
		count = 0,
		subjects = [],
	} = useGetObjects({ pageSize, pageNumber, isCompleted: false })
	return (
		<section className={styles.wrapper}>
			<SubTitle
				variants={getFadeLeftWardAnimation(-50)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				строящиеся объекты прямо сейчас
			</SubTitle>
			{isLoading && <Loader classname={styles.loader} />}
			{isSuccess && count === 0 && (
				<span className={styles.span}>Объекты появятся позже</span>
			)}
			{isSuccess && count > 0 && <List objects={subjects} />}
			{isError && (
				<span className={styles.span}>Не удалось загрузить объекты</span>
			)}
		</section>
	)
}

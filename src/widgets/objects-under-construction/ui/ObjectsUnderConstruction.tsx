'use client'

import { FC } from 'react'

import { objects } from '@/shared/config/objects.config'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import Loader from '@/shared/ui/loader/Loader'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ObjectsUnderConstruction.module.scss'
import List from './list/List'

export const ObjectsUnderConstruction: FC = () => {
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
			{false && <Loader classname={styles.loader} />}
			<List objects={objects} />
		</section>
	)
}

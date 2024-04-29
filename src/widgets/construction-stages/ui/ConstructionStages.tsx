'use client'

import { FC } from 'react'

import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import { stages } from '../config/construction-stages.config'

import styles from './ConstructionStages.module.scss'
import StagesBlock from './stages-block/StagesBlock'

export const ConstructionStages: FC = () => {
	return (
		<section className={styles.wrapper}>
			<SubTitle
				variants={getFadeLeftWardAnimation(-50)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				ЭТАПЫ СТРОИТЕЛЬСТВА ДОМА ВАШЕЙ МЕЧТЫ
			</SubTitle>
			<div className={styles.content}>
				<StagesBlock type='img' src='/stages.jpg' stages={stages.slice(0, 2)} />
				<StagesBlock type='video' src='/stages.mp4' stages={stages.slice(-3)} />
			</div>
		</section>
	)
}

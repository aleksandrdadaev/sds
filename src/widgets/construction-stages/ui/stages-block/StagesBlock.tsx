import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { BlueLineBlock } from '@/entities/blue-line-block'

import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { listAnimation } from '@/shared/ui/animations/list.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'

import { IStagesBlock } from '../../model/types/stages-block.type'

import styles from './StagesBlock.module.scss'

const StagesBlock: FC<IStagesBlock> = ({ src, type, stages }) => {
	return (
		<motion.div
			className={clsx(styles.wrapper, {
				[styles.videoType]: type === 'video',
			})}
			variants={sectionAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<motion.div className={styles.media} variants={fadeScaleAnimation}>
				{type === 'img' && <Image src={src} alt='Этапы Строительства' fill />}
				{type === 'video' && (
					<video autoPlay loop muted>
						<source src={src} type='video/mp4' />
					</video>
				)}
			</motion.div>

			<motion.div className={styles.stages} variants={listAnimation}>
				{stages.map(stage => (
					<BlueLineBlock info={stage} key={stage.title} />
				))}
			</motion.div>
		</motion.div>
	)
}

export default StagesBlock

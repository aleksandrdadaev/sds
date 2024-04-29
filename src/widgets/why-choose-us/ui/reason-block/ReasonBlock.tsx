import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { BlueLineBlock } from '@/entities/blue-line-block'

import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { listAnimation } from '@/shared/ui/animations/list.animation'
import { sectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'

import { IReasonBlock } from '../../model/types/reason-block.type'

import styles from './ReasonBlock.module.scss'

const ReasonBlock: FC<{ reasonBlock: IReasonBlock }> = ({
	reasonBlock: { image, reasons },
}) => {
	return (
		<motion.div
			className={styles.wrapper}
			variants={sectionAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<motion.div className={styles.img} variants={fadeScaleAnimation}>
				<Image src={image} alt={reasons[0].title} fill />
			</motion.div>
			<motion.div className={styles.reasons} variants={listAnimation}>
				{reasons.map(reason => (
					<BlueLineBlock info={reason} key={reason.title} />
				))}
			</motion.div>
		</motion.div>
	)
}

export default ReasonBlock

import { motion } from 'framer-motion'
import { FC } from 'react'

import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { listAnimation } from '@/shared/ui/animations/list.animation'

import { videos } from '../../config/video.config'

import styles from './Videos.module.scss'

const Videos: FC = () => {
	return (
		<motion.div className={styles.wrapper} variants={listAnimation}>
			{videos.map(video => (
				<motion.div
					className={styles.video}
					key={video}
					variants={fadeScaleAnimation}
				>
					<video controls>
						<source src={video} type='video/mp4' />
					</video>
				</motion.div>
			))}
		</motion.div>
	)
}

export default Videos

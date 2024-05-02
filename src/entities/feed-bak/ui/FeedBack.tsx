import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'
import { IFeedBack } from '@/shared/model/types/feedback.type'
import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'

import styles from './FeedBack.module.scss'

export const FeedBack: FC<{ feedBack: IFeedBack }> = ({
	feedBack: { photoPath },
}) => {
	return (
		<article className={styles.wrapper}>
			<motion.div className={styles.img} variants={fadeScaleAnimation}>
				<Image src={getImageUrl(photoPath)} alt='Отзыв' fill />
			</motion.div>
		</article>
	)
}

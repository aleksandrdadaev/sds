'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'
import { IObject } from '@/shared/model/types/object.type'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import { listAnimation } from '@/shared/ui/animations/list.animation'
import { innerSectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'
import BlockTitle from '@/shared/ui/block-title/BlockTitle'
import { MotionLink } from '@/shared/ui/motion-link'

import styles from './Object.module.scss'

export const Object: FC<{ object: IObject; alt?: boolean }> = ({
	object: { slug, name, photoPathes, description },
	alt,
}) => {
	return (
		<motion.article
			className={clsx(styles.wrapper, {
				[styles.alt]: alt,
			})}
			variants={listAnimation}
		>
			<motion.div
				className={clsx(styles.img, {
					[styles.alt]: alt,
				})}
				variants={fadeScaleAnimation}
			>
				<Image src={getImageUrl(photoPathes[0])} alt='' fill />
			</motion.div>
			<motion.div className={styles.info} variants={innerSectionAnimation}>
				<BlockTitle variants={getFadeLeftWardAnimation()}>{name}</BlockTitle>
				<motion.p
					className={clsx(styles.text, {
						[styles.alt]: alt,
					})}
					variants={getFadeLeftWardAnimation()}
				>
					{description}
				</motion.p>
				<MotionLink
					href={`/our-works/${slug}`}
					className={clsx(styles.href, {
						[styles.alt]: alt,
					})}
					variants={fadeAnimation}
				>
					Смотреть
				</MotionLink>
			</motion.div>
		</motion.article>
	)
}

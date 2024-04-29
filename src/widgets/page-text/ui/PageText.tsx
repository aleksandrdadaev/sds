'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { listAnimation } from '@/shared/ui/animations/list.animation'
import Title from '@/shared/ui/title/Title'

import { IPageText } from '../model/types/page-text.type'

import styles from './PageText.module.scss'

export const PageText: FC<IPageText> = ({ text, title, alt, classname }) => {
	return (
		<motion.section
			className={clsx(styles.wrapper, {
				[styles.alt]: alt,
				[`${classname}`]: classname,
			})}
			variants={listAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<Title variants={getFadeLeftWardAnimation(-50)}>{title}</Title>
			<motion.p
				className={clsx(styles.text, {
					[styles.alt]: alt,
				})}
				variants={alt ? {} : getFadeLeftWardAnimation()}
			>
				{text}
			</motion.p>
		</motion.section>
	)
}

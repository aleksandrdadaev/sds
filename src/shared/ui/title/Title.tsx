'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { ITitle } from '@/shared/model/types/title.type'

import styles from './Title.module.scss'

const Title = forwardRef<HTMLHeadingElement, ITitle>(
	({ children, alt, ...rest }, forwardRef: any) => {
		return (
			<motion.h1
				ref={forwardRef}
				{...rest}
				className={clsx(styles.title, {
					[styles.alt]: alt,
				})}
			>
				{children}
			</motion.h1>
		)
	}
)

export default Title

'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { ITitle } from '@/shared/model/types/title.type'

import styles from './BlockTitle.module.scss'

const BlockTitle = forwardRef<HTMLHeadingElement, ITitle>(
	({ children, ...rest }, forwardRef: any) => {
		return (
			<motion.h3 ref={forwardRef} className={styles.blockTitle} {...rest}>
				{children}
			</motion.h3>
		)
	}
)

export default BlockTitle

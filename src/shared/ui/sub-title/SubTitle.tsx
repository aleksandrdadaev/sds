'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { ITitle } from '@/shared/model/types/title.type'

import styles from './SubTitle.module.scss'

const SubTitle = forwardRef<HTMLHeadingElement, ITitle>(
	({ children, ...rest }, forwardRef: any) => {
		return (
			<motion.h2 ref={forwardRef} className={styles.subtitle} {...rest}>
				{children}
			</motion.h2>
		)
	}
)
export default SubTitle

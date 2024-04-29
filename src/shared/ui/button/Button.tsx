'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { forwardRef } from 'react'

import loader from '@/shared/assets/loader.svg'
import whiteLoader from '@/shared/assets/white-loader.svg'
import { IButton } from '@/shared/model/types/button.type'

import styles from './Button.module.scss'

const Button = forwardRef<HTMLButtonElement, IButton>(
	({ children, className, isLoading, white, ...rest }, forwardRef: any) => {
		return (
			<motion.button
				ref={forwardRef}
				className={clsx(className, styles.wrapper, {
					[styles.buttonLoading]: isLoading,
					[styles.white]: white,
				})}
				disabled={isLoading}
				{...rest}
			>
				{isLoading ? (
					<Image
						src={white ? loader : whiteLoader}
						alt=''
						width={40}
						height={40}
						className={styles.loader}
						draggable={false}
					/>
				) : (
					children
				)}
			</motion.button>
		)
	}
)

export default Button

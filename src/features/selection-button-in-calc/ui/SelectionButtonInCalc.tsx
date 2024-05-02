'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'
import { getPrice } from '@/shared/lib/utils/price.util'
import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'

import { ISelectionButtonInCalc } from '../model/types/selection-button-in-calc.type'

import styles from './SelectionButtonInCalc.module.scss'

export const SelectionButtonInCalc: FC<ISelectionButtonInCalc> = ({
	checked,
	element,
	setValue,
	unit = 'М²',
}) => {
	return (
		<motion.button
			className={styles.wrapper}
			onClick={() => setValue(element)}
			variants={fadeScaleAnimation}
		>
			<div className={styles.head}>
				<div className={styles.img}>
					<Image
						src={getImageUrl(element.photoPath)}
						alt={element.name}
						fill
						draggable={false}
					/>
				</div>
				<span className={styles.price}>
					{getPrice(element.price)}
					{unit && ` / ${unit}`}
				</span>
				<AnimatePresence>
					{checked && (
						<motion.span
							className={styles.border}
							variants={fadeScaleAnimation}
							initial='hidden'
							animate='show'
							exit='hidden'
						/>
					)}
				</AnimatePresence>
			</div>
			<h3 className={styles.name}>{element.name}</h3>
		</motion.button>
	)
}

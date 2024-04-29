'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

import closeIcon from '@/shared/assets/icons/close-modal.svg'
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside'
import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'

import { IModal } from '../model/types/modal.type'

import styles from './Modal.module.scss'
import { modalAnimation } from './modal.animation'

export const Modal: FC<PropsWithChildren<IModal>> = ({
	children,
	callback,
	classes,
	contains,
}) => {
	const ref = useClickOutside({
		callback,
		contains,
	})

	return (
		<motion.section
			className={styles.wrapper}
			variants={modalAnimation}
			initial='hidden'
			animate='show'
			exit='hidden'
		>
			<motion.div
				className={clsx(styles.modal, classes)}
				ref={ref as any}
				variants={fadeScaleAnimation}
			>
				<button className={styles.close} onClick={callback}>
					<Image src={closeIcon} alt='Закрыть' fill />
				</button>
				{children}
			</motion.div>
		</motion.section>
	)
}

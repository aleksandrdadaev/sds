'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FC, useState } from 'react'

import { Modal } from '@/entities/modal'

import { useDisableWindowScroll } from '@/shared/lib/hooks/useDisableWindowScroll'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { innerSectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'

import ExcursionForm from '../excursion-form/ExcursionForm'

import styles from './Content.module.scss'

const Content: FC = () => {
	const [open, setOpen] = useState<boolean>(false)

	useDisableWindowScroll(open)

	return (
		<motion.div className={styles.wrapper} variants={innerSectionAnimation}>
			<motion.p className={styles.text} variants={getFadeLeftWardAnimation()}>
				Вы можете посетить наши строящиеся объекты, пообщаться с прорабом и
				строителями, где будет возможность оценить качество строительства и
				материалов, увидеть все своими глазами
			</motion.p>
			<motion.button
				className={styles.button}
				onClick={() => setOpen(true)}
				variants={getFadeLeftWardAnimation()}
			>
				Подробнее
			</motion.button>
			<AnimatePresence>
				{open && (
					<Modal callback={() => setOpen(false)} contains>
						<ExcursionForm />
					</Modal>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

export default Content

import { motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

import { SelectionButtonInCalc } from '@/features/selection-button-in-calc'

import { getPrice } from '@/shared/lib/utils/price.util'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { listAnimation } from '@/shared/ui/animations/list.animation'
import Loader from '@/shared/ui/loader/Loader'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import { ICalcBlockWrapperProps } from '../../model/types/calc-block-wrappe-props.type'

import styles from './CalcBlockWrapper.module.scss'

const CalcBlockWrapper: FC<PropsWithChildren<ICalcBlockWrapperProps>> = ({
	title,
	span,
	unit,
	isLoading,
	isError,
	isSuccess,
	elements,
	currentElement,
	setCurrentElement,
	price,
	children,
}) => {
	return (
		<div className={styles.wrapper}>
			<SubTitle
				variants={getFadeLeftWardAnimation(-50)}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: true }}
			>
				{title}
			</SubTitle>
			<div className={styles.inputs}>{children}</div>
			{isLoading && <Loader classname={styles.loader} />}
			{isSuccess && elements.length === 0 && (
				<span className={styles.span}>{span} появятся позже</span>
			)}
			{isSuccess && elements.length > 0 && (
				<motion.div
					className={styles.inputs}
					variants={listAnimation}
					initial='hidden'
					animate='show'
				>
					{elements.map(element => (
						<SelectionButtonInCalc
							element={element}
							checked={currentElement === element}
							setValue={setCurrentElement}
							unit={unit}
						/>
					))}
				</motion.div>
			)}
			{isError && (
				<span className={styles.span}>
					Не удалось загрузить {span.toLowerCase()}
				</span>
			)}
			<span className={styles.total}>≈ {getPrice(Math.round(price))}</span>
		</div>
	)
}

export default CalcBlockWrapper

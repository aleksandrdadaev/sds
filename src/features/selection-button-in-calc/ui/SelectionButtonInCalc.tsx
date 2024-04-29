'use client'

import Image from 'next/image'
import { FC } from 'react'

import { getNumber } from '@/shared/lib/utils/get-number.util'

import { ISelectionButtonInCalc } from '../model/types/selection-button-in-calc.type'

import styles from './SelectionButtonInCalc.module.scss'

export const SelectionButtonInCalc: FC<ISelectionButtonInCalc> = ({
	checked,
	element,
	setValue,
}) => {
	return (
		<button className={styles.wrapper} onClick={() => setValue(element)}>
			<div className={styles.head}>
				<div className={styles.img}>
					<Image
						src={element.photoPath}
						alt={element.name}
						fill
						draggable={false}
					/>
				</div>
				<span className={styles.price}>{getNumber(element.price)}</span>
				{checked && <span className={styles.border} />}
			</div>
			<h3 className={styles.name}>{element.name}</h3>
		</button>
	)
}

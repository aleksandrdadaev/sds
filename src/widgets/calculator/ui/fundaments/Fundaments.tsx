'use client'

import { FC, useState } from 'react'

import { MetreInput } from '@/features/metre-input'
import { SelectionButtonInCalc } from '@/features/selection-button-in-calc'

import { ICalcElement } from '@/shared/model/types/calc-element.type'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import { calcElements } from '../../config/calc-elements.config'
import styles from '../Block.module.scss'

const Fundaments: FC = () => {
	const [length, setLength] = useState<number>(0)
	const [width, setWidth] = useState<number>(0)
	const [fundament, setFundament] = useState<ICalcElement>(calcElements[0])
	console.log(fundament)
	return (
		<div className={styles.wrapper}>
			<SubTitle>фундаменты</SubTitle>
			<div className={styles.inputs}>
				<MetreInput
					label='Длина'
					placeholder='100 М'
					value={length}
					onChange={setLength as any}
				/>
				<MetreInput
					label='Ширина'
					placeholder='100 М'
					value={width}
					onChange={setWidth as any}
				/>
			</div>
			<div className={styles.inputs}>
				{calcElements.map(element => (
					<SelectionButtonInCalc
						element={element}
						checked={fundament === element}
						setValue={setFundament}
					/>
				))}
			</div>
		</div>
	)
}

export default Fundaments

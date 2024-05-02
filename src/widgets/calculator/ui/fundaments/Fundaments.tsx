import { FC } from 'react'

import { MetreInput } from '@/features/metre-input'

import { useFundaments } from '../../lib/hooks/useFundaments'
import { ICalcBlockProps } from '../../model/types/calc-block-props.type'
import CalcBlockWrapper from '../calc-block-wrapper/CalcBlockWrapper'

const Fundaments: FC<ICalcBlockProps> = ({ price, setPrice }) => {
	const {
		length,
		width,
		setLength,
		setWidth,
		currentElement,
		setCurrentElement,
		elements,
		isError,
		isLoading,
		isSuccess,
	} = useFundaments({
		setPrice,
	})

	return (
		<CalcBlockWrapper
			title='фундаменты'
			span='Фундаменты'
			price={price}
			currentElement={currentElement}
			setCurrentElement={setCurrentElement}
			elements={elements}
			isError={isError}
			isLoading={isLoading}
			isSuccess={isSuccess}
		>
			<MetreInput label='Длина' value={length} onChange={setLength as any} />
			<MetreInput label='Ширина' value={width} onChange={setWidth as any} />
		</CalcBlockWrapper>
	)
}

export default Fundaments

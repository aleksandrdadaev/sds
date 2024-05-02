import { FC } from 'react'

import { MetreInput } from '@/features/metre-input'

import { useFloorSlab } from '../../lib/hooks/useFloorSlab'
import { useMonolithicBelt } from '../../lib/hooks/useMonolithicBelt'
import { ICalcBlockProps } from '../../model/types/calc-block-props.type'
import CalcBlockWrapper from '../calc-block-wrapper/CalcBlockWrapper'

const MonolithicBelt: FC<ICalcBlockProps> = ({ price, setPrice }) => {
	const {
		currentElement,
		elements,
		isError,
		isLoading,
		isSuccess,
		length,
		setCurrentElement,
		setLength,
		setWidth,
		width,
	} = useMonolithicBelt({ setPrice })

	return (
		<CalcBlockWrapper
			title='монолитный пояс'
			span='Монолитные пояса'
			price={price}
			unit='пог. м'
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

export default MonolithicBelt

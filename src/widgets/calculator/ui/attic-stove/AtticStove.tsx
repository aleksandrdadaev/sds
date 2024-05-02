import { FC } from 'react'

import { MetreInput } from '@/features/metre-input'

import { useAtticStove } from '../../lib/hooks/useAtticStove'
import { useFloorSlab } from '../../lib/hooks/useFloorSlab'
import { ICalcBlockProps } from '../../model/types/calc-block-props.type'
import CalcBlockWrapper from '../calc-block-wrapper/CalcBlockWrapper'

const AtticStove: FC<ICalcBlockProps> = ({ price, setPrice }) => {
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
	} = useAtticStove({ setPrice })

	return (
		<CalcBlockWrapper
			title='чердачная плита'
			span='Чердачные плиты'
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

export default AtticStove

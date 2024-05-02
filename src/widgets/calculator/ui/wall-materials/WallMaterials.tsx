import { FC } from 'react'

import { MetreInput } from '@/features/metre-input'

import { useWallMaterials } from '../../lib/hooks/useWallMaterials'
import { ICalcBlockProps } from '../../model/types/calc-block-props.type'
import CalcBlockWrapper from '../calc-block-wrapper/CalcBlockWrapper'

const WallMaterials: FC<ICalcBlockProps> = ({ price, setPrice }) => {
	const {
		currentElement,
		elements,
		isError,
		isLoading,
		isSuccess,
		height,
		setHeight,
		length,
		setCurrentElement,
		setLength,
		setWidth,
		width,
	} = useWallMaterials({ setPrice })

	return (
		<CalcBlockWrapper
			title='строительные материалы стен'
			span='Материалы стен'
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
			<MetreInput label='Высота' value={height} onChange={setHeight as any} />
		</CalcBlockWrapper>
	)
}

export default WallMaterials

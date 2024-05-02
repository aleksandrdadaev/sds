import { FC } from 'react'

import Input from '@/shared/ui/form-elements/input/Input'

import { useLadder } from '../../lib/hooks/useLadder'
import { ICalcBlockProps } from '../../model/types/calc-block-props.type'
import CalcBlockWrapper from '../calc-block-wrapper/CalcBlockWrapper'

const Ladder: FC<ICalcBlockProps> = ({ price, setPrice }) => {
	const {
		currentElement,
		elements,
		isError,
		isLoading,
		isSuccess,
		count,
		setCount,
		setCurrentElement,
	} = useLadder({ setPrice })
	return (
		<CalcBlockWrapper
			title='лестница'
			span='Лестницы'
			price={price}
			unit=''
			currentElement={currentElement}
			setCurrentElement={setCurrentElement}
			elements={elements}
			isError={isError}
			isLoading={isLoading}
			isSuccess={isSuccess}
		>
			<Input
				label='Количество'
				value={count}
				min={0}
				onChange={e => setCount(Number(e.target.value))}
				type='number'
			/>
		</CalcBlockWrapper>
	)
}

export default Ladder

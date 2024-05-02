import { useEffect, useState } from 'react'

import { useGetCalcElementsByType } from '@/features/get-calc-elements-by-type'

import {
	CalcElementEnum,
	ICalcElement,
} from '@/shared/model/types/calc-element.type'

import { ICalcBlockProps } from '../../model/types/calc-block-props.type'

export const useLadder = ({ setPrice }: Omit<ICalcBlockProps, 'price'>) => {
	const [count, setCount] = useState<number>(0)
	const [currentElement, setCurrentElement] = useState<ICalcElement | null>(
		null
	)

	const {
		elements = [],
		isError,
		isLoading,
		isSuccess,
	} = useGetCalcElementsByType(CalcElementEnum.ladder)

	useEffect(() => setCurrentElement(elements[0] || null), [isSuccess, elements])

	useEffect(() => {
		if (currentElement) setPrice(count * currentElement.price)
	}, [count, currentElement])

	return {
		count,
		setCount,
		currentElement,
		setCurrentElement,
		isError,
		isLoading,
		isSuccess,
		elements,
	}
}

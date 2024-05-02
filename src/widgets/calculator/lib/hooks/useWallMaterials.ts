import { useEffect, useState } from 'react'

import { useGetCalcElementsByType } from '@/features/get-calc-elements-by-type'

import {
	CalcElementEnum,
	ICalcElement,
} from '@/shared/model/types/calc-element.type'

import { ICalcBlockProps } from '../../model/types/calc-block-props.type'

export const useWallMaterials = ({
	setPrice,
}: Omit<ICalcBlockProps, 'price'>) => {
	const [length, setLength] = useState<number>(0)
	const [width, setWidth] = useState<number>(0)
	const [height, setHeight] = useState<number>(3)
	const [currentElement, setCurrentElement] = useState<ICalcElement | null>(
		null
	)

	const {
		elements = [],
		isError,
		isLoading,
		isSuccess,
	} = useGetCalcElementsByType(CalcElementEnum.wallMaterials)

	useEffect(() => setCurrentElement(elements[0] || null), [isSuccess, elements])

	useEffect(() => {
		if (currentElement) setPrice(length * width * height * currentElement.price)
	}, [length, width, height, currentElement])

	return {
		width,
		setWidth,
		length,
		setLength,
		height,
		setHeight,
		currentElement,
		setCurrentElement,
		isError,
		isLoading,
		isSuccess,
		elements,
	}
}

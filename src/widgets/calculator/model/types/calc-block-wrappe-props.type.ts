import { Dispatch, SetStateAction } from 'react'

import { ICalcElement } from '@/shared/model/types/calc-element.type'

export interface ICalcBlockWrapperProps {
	title: string
	span: string
	unit?: string
	isLoading: boolean
	isSuccess: boolean
	isError: boolean
	currentElement: ICalcElement | null
	setCurrentElement: Dispatch<SetStateAction<ICalcElement | null>>
	price: number
	elements: ICalcElement[]
}

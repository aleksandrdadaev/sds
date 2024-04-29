import { Dispatch, SetStateAction } from 'react'

import { ICalcElement } from '@/shared/model/types/calc-element.type'

export interface ISelectionButtonInCalc {
	element: ICalcElement
	checked: boolean
	setValue: Dispatch<SetStateAction<ICalcElement>>
}

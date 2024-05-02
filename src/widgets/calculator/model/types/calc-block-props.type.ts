import { Dispatch, SetStateAction } from 'react'

export interface ICalcBlockProps {
	price: number
	setPrice: Dispatch<SetStateAction<number>>
}

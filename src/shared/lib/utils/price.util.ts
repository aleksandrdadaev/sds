import { getNumber } from './get-number.util'

export const getPrice = (number: number | unknown): string =>
	getNumber(number) + ' ₽'

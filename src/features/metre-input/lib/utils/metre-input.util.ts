import { KeyboardEvent, MouseEvent } from 'react'

const regex = /[\D]/g

export const replaceValue = (value: string): number => {
	const transformValue: string = value.slice(0, -2) + value.slice(-1)
	return Number(transformValue.replace(regex, ''))
}

export const setCursor = (
	e: MouseEvent<HTMLInputElement, MouseEvent> | KeyboardEvent<HTMLInputElement>
) =>
	e.currentTarget.setSelectionRange(
		e.currentTarget.value.length,
		e.currentTarget.value.length
	)

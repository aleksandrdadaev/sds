import { KeyboardEvent, MouseEvent } from 'react'

export const setCursor = (
	e: MouseEvent<HTMLInputElement, MouseEvent> | KeyboardEvent<HTMLInputElement>
) =>
	e.currentTarget.setSelectionRange(
		e.currentTarget.value.length - 2,
		e.currentTarget.value.length - 2
	)

const regex = /[^\.\d]/g

export const changeValue = (newValue: string) => {
	const value = newValue.replace(regex, '')
	return value.indexOf('.') === -1
		? Number(value)
		: value.split('.').length - 1 > 1
			? Number(value.slice(0, -1))
			: value
}

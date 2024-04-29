export const phoneInputMask: string = '+7 (___) ___-__-__'

export const replacementPhoneInput = { _: /\d/ }

const regexPhoneInput = /\+|\_|\-|\(|\)|\s/g

export const phoneIsRequired = (value: string) =>
	value.replace(regexPhoneInput, '').length > 1 || 'Введите номер телефона'

export const phoneIsValid = (value: string) =>
	value.replace(regexPhoneInput, '').length === 11 ||
	'Некорректный номер телефона'

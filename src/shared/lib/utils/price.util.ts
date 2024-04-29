export const getPrice = (number: number | unknown): string => {
	let price: string = ''
	let reverseArray = String(number).split('').reverse()
	reverseArray.forEach((value, index) =>
		(index + 1) % 3 === 0 ? (price += `${value} `) : (price += String(value))
	)
	return price.split('').reverse().join('') + ' ₽'
}

export const createPhoneNumber = (number: string) => {
	let phone: string = ''
	const array = number.split('')
	array.forEach((value, index, arr) =>
		(index + 1) % 2 === 0 && index !== arr.length - 1
			? (phone += `${value} `)
			: (phone += value)
	)
	return phone.split(' ').join('-')
}

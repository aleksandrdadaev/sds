export const transformDate = (date?: string): string =>
	date?.split('-').reverse().join('-') || ''

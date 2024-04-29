export const checkIsMobile = (index: number): boolean => (index + 1) % 2 !== 0

export const checkIsDefault = (index: number): boolean =>
	(index + 1) % 2 === 0 && (index + 1) % 4 !== 0

export const apiUrl: string = `${process.env.SERVER_URL}/api`

export const getObjectUrl = (url?: string): string => `/object${url}`

export const getFeedBackUrl = (url?: string): string => `/feedback${url}`

export const getApplicationUrl = (url?: string): string =>
	`/application/send${url}`

export const getCalcElementUrl = (url?: string): string =>
	`/building-item${url}`

export const getImageUrl = (image: string): string => `/uploads/${image}`

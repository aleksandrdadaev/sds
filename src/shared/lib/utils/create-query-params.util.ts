import { IAnyObject } from '@/shared/model/types/any-object.type'

export const createQueryParams = (obj: IAnyObject): string => {
	const queryParams: string[] = []
	for (let key in obj) {
		obj[key] !== undefined && queryParams.push(`${key}=${obj[key]}`)
	}
	return queryParams.join('&')
}

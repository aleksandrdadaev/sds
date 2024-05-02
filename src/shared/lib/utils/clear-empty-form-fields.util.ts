import { IAnyObject } from '@/shared/model/types/any-object.type'

export const clearEmptyFormFields = (data: IAnyObject) => {
	delete data.agreement
	for (let key in data) !data[key] && delete data[key]
	return data
}

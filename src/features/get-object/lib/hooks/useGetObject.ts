import { ObjectService } from '@/shared/api/services/object.service'
import { IObject } from '@/shared/model/types/object.type'

export const useGetObject = async (slug: string): Promise<IObject> =>
	(await ObjectService.getBySlug(slug)).data.data

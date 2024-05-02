import { ObjectService } from '@/shared/api/services/object.service'
import { IObject } from '@/shared/model/types/object.type'

export const useGetAllObjects = async (): Promise<IObject[]> =>
	(await ObjectService.getAll()).data.data.subjects

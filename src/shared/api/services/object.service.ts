import { AxiosResponse } from 'axios'

import { getObjectUrl } from '@/shared/config/api.config'
import {
	IObjectResponse,
	IObjectsResponse,
} from '@/shared/model/types/object.type'

import { $api } from '../instance-axios.api'

export const ObjectService = {
	getAll: async (): Promise<AxiosResponse<IObjectsResponse>> =>
		$api.get<IObjectsResponse>(getObjectUrl('/getAll')),
	get: async (queryParams: string): Promise<AxiosResponse<IObjectsResponse>> =>
		$api.get<IObjectsResponse>(getObjectUrl(`/get?${queryParams}`)),
	getBySlug: async (slug: string): Promise<AxiosResponse<IObjectResponse>> =>
		$api.get<IObjectResponse>(getObjectUrl(`/getBySlug/${slug}`)),
}

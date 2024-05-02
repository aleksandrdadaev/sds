import { AxiosResponse } from 'axios'

import { getFeedBackUrl } from '@/shared/config/api.config'
import { IFeedBacksResponse } from '@/shared/model/types/feedback.type'

import { $api } from '../instance-axios.api'

export const FeedBackService = {
	getAll: async (
		queryParams: string
	): Promise<AxiosResponse<IFeedBacksResponse>> =>
		$api.get<IFeedBacksResponse>(getFeedBackUrl(`/getAll?${queryParams}`)),
}

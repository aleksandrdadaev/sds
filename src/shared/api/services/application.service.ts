import { AxiosResponse } from 'axios'

import { getApplicationUrl } from '@/shared/config/api.config'
import { IEstimateForm } from '@/shared/model/types/form/etimate-form.type'
import { IExcursionForm } from '@/shared/model/types/form/excursion-form.type'
import { IFormResponse } from '@/shared/model/types/form/form-elements.type'
import { IUsualForm } from '@/shared/model/types/form/usual-form.type'

import { $api } from '../instance-axios.api'

export const ApplicationService = {
	sendUsual: async (
		data: Omit<IUsualForm, 'agreement'>
	): Promise<AxiosResponse<IFormResponse>> =>
		$api.post<IFormResponse>(getApplicationUrl('/usualApplication'), data),
	sendEstimation: async (
		data: FormData
	): Promise<AxiosResponse<IFormResponse>> =>
		$api.post<IFormResponse>(
			getApplicationUrl('/applicationWithEstimation'),
			data,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		),
	sendOnTour: async (
		data: Omit<IExcursionForm, 'agreement'>
	): Promise<AxiosResponse<IFormResponse>> =>
		$api.post<IFormResponse>(getApplicationUrl('/applicationOnTour'), data),
}

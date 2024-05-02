import { AxiosResponse } from 'axios'

import { getCalcElementUrl } from '@/shared/config/api.config'
import {
	CalcElementEnum,
	ICalcElementsResponse,
} from '@/shared/model/types/calc-element.type'

import { $api } from '../instance-axios.api'

export const CalculatorService = {
	getByType: async (
		type: CalcElementEnum
	): Promise<AxiosResponse<ICalcElementsResponse>> =>
		$api.get<ICalcElementsResponse>(getCalcElementUrl(`/getByType/${type}`)),
}

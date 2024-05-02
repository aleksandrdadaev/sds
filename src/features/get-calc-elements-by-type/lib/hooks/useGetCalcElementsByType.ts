import { useQuery } from '@tanstack/react-query'

import { CalculatorService } from '@/shared/api/services/calculator.service'
import { CalcElementEnum } from '@/shared/model/types/calc-element.type'

export const useGetCalcElementsByType = (type: CalcElementEnum) => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryKey: ['get calc elements', type],
		queryFn: () => CalculatorService.getByType(type),
		select: data => data.data.data,
	})

	return {
		elements: data,
		isError,
		isLoading,
		isSuccess,
	}
}

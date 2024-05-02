import { useQuery } from '@tanstack/react-query'

import { FeedBackService } from '@/shared/api/services/feedback.service'
import { createQueryParams } from '@/shared/lib/utils/create-query-params.util'

import { IGetAllFeedBacksProps } from '../../model/types/get-all-feedbacks-props.type'

export const useGetAllFeedBacks = (props: IGetAllFeedBacksProps) => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryKey: ['get all feedbacks', createQueryParams(props)],
		queryFn: () => FeedBackService.getAll(createQueryParams(props)),
		select: data => data.data.data,
	})

	return {
		...data,
		isError,
		isLoading,
		isSuccess,
	}
}

import { useQuery } from '@tanstack/react-query'

import { ObjectService } from '@/shared/api/services/object.service'
import { createQueryParams } from '@/shared/lib/utils/create-query-params.util'

import { IGetObjectsProps } from '../../model/types/get-objects-props.type'

export const useGetObjects = (props: IGetObjectsProps) => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryKey: ['get objects', createQueryParams(props)],
		queryFn: () => ObjectService.get(createQueryParams(props)),
		select: data => data.data.data,
	})

	return {
		...data,
		isError,
		isLoading,
		isSuccess,
	}
}

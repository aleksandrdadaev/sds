import { SubmitHandler, useForm } from 'react-hook-form'

import { useSendEstimateApplication } from '@/features/send-estimate-application'

import { useResize } from '@/shared/lib/hooks/useResize'
import { IEstimateForm } from '@/shared/model/types/form/etimate-form.type'

export const useApplicationForm = () => {
	const { isLaptop, isMobile, isTablet } = useResize()

	const { isPending, mutate } = useSendEstimateApplication()

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<IEstimateForm>({
		mode: 'onSubmit',
		disabled: isPending,
		defaultValues: {
			files: [],
		},
	})

	const onSubmit: SubmitHandler<IEstimateForm> = data => {
		mutate(data, {
			onSettled: () =>
				reset({
					agreement: false,
					comment: '',
					files: [],
					phoneNumber: '',
				}),
		})
	}

	return {
		handleSubmit,
		onSubmit,
		register,
		errors,
		isLaptop,
		isMobile,
		isPending,
		control,
		isTablet,
	}
}

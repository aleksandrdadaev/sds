import { SubmitHandler, useForm } from 'react-hook-form'

import { useSendApplicationTour } from '@/features/send-application-tour'

import { useResize } from '@/shared/lib/hooks/useResize'
import { IExcursionForm } from '@/shared/model/types/form/excursion-form.type'

export const useApplicationForm = () => {
	const { isMobile } = useResize()

	const { isPending, mutate } = useSendApplicationTour()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IExcursionForm>({
		mode: 'onSubmit',
		disabled: isPending,
	})

	const onSubmit: SubmitHandler<IExcursionForm> = data =>
		mutate(data, {
			onSettled: () =>
				reset({
					agreement: false,
					comment: '',
					name: '',
					date: '',
					time: '',
					phoneNumber: '',
				}),
		})

	return {
		handleSubmit,
		onSubmit,
		register,
		errors,
		isMobile,
		isPending,
	}
}

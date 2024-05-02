import { SubmitHandler, useForm } from 'react-hook-form'

import { useSendUsualApplication } from '@/features/send-usual-application'

import { useResize } from '@/shared/lib/hooks/useResize'
import { IUsualForm } from '@/shared/model/types/form/usual-form.type'

export const useApplicationForm = () => {
	const { isLaptop, isMobile } = useResize()

	const { isPending, mutate } = useSendUsualApplication()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IUsualForm>({ mode: 'onSubmit', disabled: isPending })

	const onSubmit: SubmitHandler<IUsualForm> = data => {
		mutate(data, {
			onSettled: () =>
				reset({
					agreement: false,
					comment: '',
					name: '',
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
	}
}

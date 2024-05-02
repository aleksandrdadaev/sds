import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { ApplicationService } from '@/shared/api/services/application.service'
import { clearEmptyFormFields } from '@/shared/lib/utils/clear-empty-form-fields.util'
import { transformDate } from '@/shared/lib/utils/transform-date.util'
import { IExcursionForm } from '@/shared/model/types/form/excursion-form.type'

export const useSendApplicationTour = () => {
	const { isPending, mutate } = useMutation({
		mutationKey: ['send application tour'],
		mutationFn: (data: IExcursionForm) => {
			if (data.date) data = { ...data, date: transformDate(data.date) }
			return ApplicationService.sendOnTour(
				clearEmptyFormFields(data) as IExcursionForm
			)
		},
		onSuccess: () => toast.success('Заявка успешно отправлена!'),
		onError: () =>
			toast.error('При отправке заявки произошла ошибка, попробуйте позже.'),
	})

	return {
		isPending,
		mutate,
	}
}

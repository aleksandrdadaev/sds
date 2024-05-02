import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { ApplicationService } from '@/shared/api/services/application.service'
import { clearEmptyFormFields } from '@/shared/lib/utils/clear-empty-form-fields.util'
import { IEstimateForm } from '@/shared/model/types/form/etimate-form.type'

export const useSendEstimateApplication = () => {
	const { isPending, mutate } = useMutation({
		mutationKey: ['send estimate application'],
		mutationFn: (data: IEstimateForm) => {
			const final = clearEmptyFormFields(data) as IEstimateForm
			const formData = new FormData()
			for (let key in final) {
				if (key === 'files') final[key].map(file => formData.append(key, file))
				else formData.append(key, (final as any)[key])
			}
			return ApplicationService.sendEstimation(formData)
		},
		onSuccess: () => toast.success('Заявка успешно отправлена!'),
		onError: () => {
			toast.error('При отправке заявки произошла ошибка, попробуйте позже.')
		},
	})

	return {
		isPending,
		mutate,
	}
}

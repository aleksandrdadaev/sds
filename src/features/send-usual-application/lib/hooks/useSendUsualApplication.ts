import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { ApplicationService } from '@/shared/api/services/application.service'
import { clearEmptyFormFields } from '@/shared/lib/utils/clear-empty-form-fields.util'
import { IUsualForm } from '@/shared/model/types/form/usual-form.type'

export const useSendUsualApplication = () => {
	const { isPending, mutate } = useMutation({
		mutationKey: ['send usual application'],
		mutationFn: (data: IUsualForm) =>
			ApplicationService.sendUsual(clearEmptyFormFields(data) as IUsualForm),
		onSuccess: () => toast.success('Заявка успешно отправлена!'),
		onError: () =>
			toast.error('При отправке заявки произошла ошибка, попробуйте позже.'),
	})

	return {
		isPending,
		mutate,
	}
}

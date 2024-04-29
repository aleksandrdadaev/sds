'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormAgreementCheckBox } from '@/features/form-agreement-check-box'
import {
	PhoneInput,
	phoneIsRequired,
	phoneIsValid,
} from '@/features/phone-input'

import { useResize } from '@/shared/lib/hooks/useResize'
import { IExcursionForm } from '@/shared/model/types/form/excursion-form.type'
import Button from '@/shared/ui/button/Button'
import Input from '@/shared/ui/form-elements/input/Input'
import Textarea from '@/shared/ui/form-elements/textarea/Textarea'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IExcursionForm>({ mode: 'onSubmit', disabled: false })

	const onSubmit: SubmitHandler<IExcursionForm> = data => {
		console.table(data)
	}

	const { isMobile } = useResize()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
			<Input
				{...register('name', {
					required: 'Введите ваше имя',
				})}
				label='Имя'
				placeholder='Имя'
				error={errors.name}
			/>
			<PhoneInput
				{...register('phoneNumber', {
					validate: {
						isRequired: value => phoneIsRequired(value),
						isValid: value => phoneIsValid(value),
					},
				})}
				error={errors.phoneNumber}
			/>
			<Input
				{...register('date')}
				label='Дата'
				type='date'
				error={errors.date}
			/>
			<Input
				{...register('time')}
				label='Желаемое время'
				type='time'
				error={errors.time}
			/>
			<Textarea
				{...register('comment')}
				label='Сообщение'
				placeholder='Ваше сообщение...'
				rows={isMobile ? 12 : 8}
				error={errors.comment}
			/>
			<FormAgreementCheckBox
				{...register('agreement', {
					required: 'Необходимо принять условия соглашения.',
				})}
				error={errors.agreement}
			/>
			<Button isLoading={false} type='submit'>
				Отправить
			</Button>
		</form>
	)
}

export default Form

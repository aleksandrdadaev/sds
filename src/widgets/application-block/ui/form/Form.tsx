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
import { IUsualForm } from '@/shared/model/types/form/usual-form.type'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
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
	} = useForm<IUsualForm>({ mode: 'onSubmit', disabled: false })

	const onSubmit: SubmitHandler<IUsualForm> = data => {
		console.table(data)
	}
	const { isLaptop, isMobile } = useResize()
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
			<Input
				{...register('name', {
					required: 'Введите ваше имя',
				})}
				label='Имя'
				placeholder='Имя'
				white
				error={errors.name}
			/>
			<PhoneInput
				{...register('phoneNumber', {
					validate: {
						isRequired: value => phoneIsRequired(value),
						isValid: value => phoneIsValid(value),
					},
				})}
				white
				error={errors.phoneNumber}
			/>
			<Textarea
				{...register('comment')}
				label='Комментарий к заявке'
				placeholder='Комментарий...'
				rows={isMobile ? 11 : isLaptop ? 9 : 6}
				white
				error={errors.comment}
			/>
			<FormAgreementCheckBox
				{...register('agreement', {
					required: 'Необходимо принять условия соглашения.',
				})}
				white
				error={errors.agreement}
			/>
			<Button isLoading={false} type='submit' white variants={fadeAnimation}>
				Отправить
			</Button>
		</form>
	)
}

export default Form

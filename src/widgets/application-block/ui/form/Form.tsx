'use client'

import { FC } from 'react'

import { FormAgreementCheckBox } from '@/features/form-agreement-check-box'
import {
	PhoneInput,
	phoneIsRequired,
	phoneIsValid,
} from '@/features/phone-input'

import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import Button from '@/shared/ui/button/Button'
import Input from '@/shared/ui/form-elements/input/Input'
import Textarea from '@/shared/ui/form-elements/textarea/Textarea'

import { useApplicationForm } from '../../lib/hooks/useApplicationForm'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		handleSubmit,
		onSubmit,
		register,
		errors,
		isPending,
		isLaptop,
		isMobile,
	} = useApplicationForm()
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
			<Button
				isLoading={isPending}
				type='submit'
				white
				variants={fadeAnimation}
			>
				Отправить
			</Button>
		</form>
	)
}

export default Form

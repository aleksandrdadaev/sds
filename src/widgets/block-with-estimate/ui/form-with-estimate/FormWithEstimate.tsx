'use client'

import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { FileInput } from '@/features/file-input'
import { FormAgreementCheckBox } from '@/features/form-agreement-check-box'
import {
	PhoneInput,
	phoneIsRequired,
	phoneIsValid,
} from '@/features/phone-input'

import { useResize } from '@/shared/lib/hooks/useResize'
import { IEstimateForm } from '@/shared/model/types/form/etimate-form.type'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import Button from '@/shared/ui/button/Button'
import Textarea from '@/shared/ui/form-elements/textarea/Textarea'

import styles from './FormWithEstimate.module.scss'

const FormWithEstimate: FC = () => {
	const { isLaptop, isTablet, isMobile } = useResize()

	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IEstimateForm>({ mode: 'onSubmit', disabled: false })
	const onSubmit: SubmitHandler<IEstimateForm> = data => {
		console.table(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
			<PhoneInput
				{...register('phoneNumber', {
					validate: {
						isRequired: value => phoneIsRequired(value),
						isValid: value => phoneIsValid(value),
					},
				})}
				error={errors.phoneNumber}
			/>
			<Textarea
				{...register('comment')}
				label='Сообщение'
				placeholder='Ваше сообщение...'
				rows={isLaptop ? 9 : isTablet ? 12 : isMobile ? 11 : 6}
				error={errors.comment}
			/>
			<FormAgreementCheckBox
				{...register('agreement', {
					required: 'Необходимо принять условия соглашения.',
				})}
				error={errors.agreement}
			/>
			<div className={styles.bottom}>
				<Button isLoading={false} type='submit' variants={fadeAnimation}>
					Отправить
				</Button>
				<Controller
					control={control}
					name='files'
					rules={{
						required: 'Прикрепите файл',
					}}
					render={({
						field: { onChange, value, disabled },
						formState: { errors },
					}) => (
						<FileInput
							label='Прикрепить файл'
							error={errors.files as any}
							value={value}
							onChange={onChange}
							disabled={disabled}
						/>
					)}
				/>
			</div>
		</form>
	)
}

export default FormWithEstimate

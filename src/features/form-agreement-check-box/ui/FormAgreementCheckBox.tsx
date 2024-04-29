import clsx from 'clsx'
import Link from 'next/link'
import { FC, forwardRef } from 'react'

import { ICheckBox } from '@/shared/model/types/form/form-elements.type'
import CheckBox from '@/shared/ui/form-elements/check-box/CheckBox'

import styles from './FormAgreementCheckBox.module.scss'

export const FormAgreementCheckBox = forwardRef<HTMLInputElement, ICheckBox>(
	({ white, ...rest }, forwardRef: any) => {
		return (
			<CheckBox
				ref={forwardRef}
				white={white}
				{...rest}
				label={
					<>
						Я принимаю условия{' '}
						<Link
							href={'/user-agreement'}
							className={clsx(styles.agreement, {
								[styles.white]: white,
							})}
						>
							пользовательского соглашения
						</Link>
					</>
				}
			/>
		)
	}
)

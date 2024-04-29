import { InputMask } from '@react-input/mask'
import clsx from 'clsx'
import { forwardRef } from 'react'

import { IMaskInput } from '@/shared/model/types/form/form-elements.type'

import styles from '../input/Input.module.scss'

const MaskInput = forwardRef<HTMLInputElement, IMaskInput>(
	(
		{
			label,
			error,
			white,
			type = 'text',
			mask,
			replacement,
			showMask = true,
			...rest
		},
		forwardRef: any
	) => {
		return (
			<label className={styles.wrapper}>
				<span
					className={clsx(styles.label, {
						[styles.white]: white,
					})}
				>
					{label}
				</span>
				<InputMask
					ref={forwardRef}
					type={type}
					mask={mask}
					showMask={showMask}
					replacement={replacement}
					{...rest}
					className={clsx(styles.input, {
						[styles.white]: white,
					})}
				/>
				{error && <span className={styles.error}>{error.message}</span>}
			</label>
		)
	}
)
export default MaskInput

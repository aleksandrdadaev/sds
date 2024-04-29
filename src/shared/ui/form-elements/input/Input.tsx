import clsx from 'clsx'
import { forwardRef } from 'react'

import { IInput } from '@/shared/model/types/form/form-elements.type'

import styles from './Input.module.scss'

const Input = forwardRef<HTMLInputElement, IInput>(
	({ label, error, white, type = 'text', ...rest }, forwardRef: any) => {
		return (
			<label className={styles.wrapper}>
				<span
					className={clsx(styles.label, {
						[styles.white]: white,
					})}
				>
					{label}
				</span>
				<input
					ref={forwardRef}
					type={type}
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
export default Input

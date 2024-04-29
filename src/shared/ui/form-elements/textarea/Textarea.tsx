import clsx from 'clsx'
import { forwardRef } from 'react'

import { ITextarea } from '@/shared/model/types/form/form-elements.type'

import styles from '../input/Input.module.scss'

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
	({ label, error, white, rows = 6, ...rest }, forwardRef: any) => {
		return (
			<label className={styles.wrapper}>
				<span
					className={clsx(styles.label, {
						[styles.white]: white,
					})}
				>
					{label}
				</span>
				<textarea
					ref={forwardRef}
					rows={rows}
					{...rest}
					className={clsx(styles.input, 'resize-none', {
						[styles.white]: white,
					})}
				/>
				{error && <span className={styles.error}>{error.message}</span>}
			</label>
		)
	}
)
export default Textarea

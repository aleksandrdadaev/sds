import clsx from 'clsx'
import Image from 'next/image'
import { forwardRef } from 'react'

import checkIcon from '@/shared/assets/icons/check.svg'
import { ICheckBox } from '@/shared/model/types/form/form-elements.type'

import styles2 from '../input/Input.module.scss'

import styles from './CheckBox.module.scss'

const CheckBox = forwardRef<HTMLInputElement, ICheckBox>(
	({ label, error, white, ...rest }, forwardRef: any) => {
		return (
			<label className={styles.wrapper}>
				<input
					ref={forwardRef}
					type='checkbox'
					{...rest}
					className={styles.input}
				/>
				<div className={styles.checkBox}>
					<Image
						src={checkIcon}
						width={13}
						height={13}
						alt=''
						className={clsx(styles.icon, {
							[styles.white]: white,
						})}
					/>
				</div>
				{label && (
					<span
						className={clsx(styles.label, {
							[styles.white]: white,
						})}
					>
						{label}
					</span>
				)}
				{error && <span className={styles2.error}>{error.message}</span>}
			</label>
		)
	}
)
export default CheckBox

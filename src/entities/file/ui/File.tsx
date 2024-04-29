'use client'

import Image from 'next/image'
import { FC } from 'react'

import trashIcon from '@/shared/assets/icons/trash.svg'

import styles from './File.module.scss'

export const File: FC<{ file: File; remove: (name: string) => void }> = ({
	file,
	remove,
}) => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.name}>{file.name}</span>
			<button
				className={styles.button}
				type='button'
				onClick={() => remove(file.name)}
			>
				<Image src={trashIcon} alt='' fill className={styles.img} />
			</button>
		</div>
	)
}

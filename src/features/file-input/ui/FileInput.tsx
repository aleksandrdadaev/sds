import { FC } from 'react'

import { File } from '@/entities/file'

import styles2 from '@/shared/ui/form-elements/input/Input.module.scss'

import { useFileInput } from '../lib/hooks/useFileInput'
import { IFileInput } from '../model/types/file-input-props.type'

import styles from './FileInput.module.scss'

export const FileInput: FC<IFileInput> = ({
	label,
	onChange,
	value,
	error,
	disabled,
}) => {
	const { files, getInputProps, getRootProps, removeFile } = useFileInput({
		disabled,
		onChange,
		value,
	})

	return (
		<div className={styles.wrapper}>
			<div {...getRootProps()} className={styles.label}>
				{label}
				<input {...getInputProps()} />
			</div>
			<ul className={styles.files}>
				{files.map(file => (
					<li key={file.name}>
						<File file={file} remove={removeFile} />
					</li>
				))}
			</ul>
			{error && <span className={styles2.error}>{error.message}</span>}
		</div>
	)
}

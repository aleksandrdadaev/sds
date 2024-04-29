import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'

import { IFileInputHook } from '../../model/types/file-input-props.type'

export const useFileInput = ({ onChange, value, disabled }: IFileInputHook) => {
	const [files, setFiles] = useState<File[]>(value || [])

	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles.length === 0)
			toast.warning(
				`Максимум 2 файла\nФорматы - .pdf, .doc, .docx\nВес файла - до 10 Mb`
			)
		else
			setFiles(prevFiles => {
				let newFiles: File[] = prevFiles.concat(acceptedFiles)
				if (newFiles.length > 2) return prevFiles
				else return newFiles
			})
	}, [])

	useEffect(() => {
		onChange && onChange(files as any)
		return
	}, [files])

	const { getInputProps, getRootProps } = useDropzone({
		onDrop,
		accept: {
			'application/pdf': ['.pdf'],
			'application/msword': ['.doc'],
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
				['.docx'],
		},
		maxFiles: 2,
		maxSize: 10 * 1024 * 1024,
		multiple: true,
		disabled,
	})

	const removeFile = (name: string) =>
		setFiles(prev => prev.filter(file => file.name !== name))

	return {
		getRootProps,
		getInputProps,
		files,
		removeFile,
	}
}

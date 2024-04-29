import { ChangeEventHandler } from 'react'

import { IInput } from '@/shared/model/types/form/form-elements.type'

export interface IFileInput extends Omit<IInput, 'value'> {
	value: File[]
}

export interface IFileInputHook {
	onChange: ChangeEventHandler<HTMLInputElement> | undefined
	value: File[]
	disabled?: boolean
}

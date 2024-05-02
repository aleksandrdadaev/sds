'use client'

import { FC } from 'react'

import { IInput } from '@/shared/model/types/form/form-elements.type'
import Input from '@/shared/ui/form-elements/input/Input'

import { changeValue, setCursor } from '../lib/utils/metre-input.util'

export const MetreInput: FC<IInput> = ({ onChange, value, label, ...rest }) => {
	return (
		<Input
			label={label}
			value={value + ' М'}
			onClick={setCursor as any}
			onKeyDown={setCursor}
			onKeyUp={setCursor}
			inputMode='decimal'
			onChange={e => onChange && onChange(changeValue(e.target.value) as any)}
			{...rest}
		/>
	)
}

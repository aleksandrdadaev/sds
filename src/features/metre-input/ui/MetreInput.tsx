'use client'

import { FC } from 'react'

import { getNumber } from '@/shared/lib/utils/get-number.util'
import { IInput } from '@/shared/model/types/form/form-elements.type'
import Input from '@/shared/ui/form-elements/input/Input'

import { replaceValue, setCursor } from '../lib/utils/metre-input.util'

export const MetreInput: FC<IInput> = ({ onChange, value, label, ...rest }) => {
	return (
		<Input
			label={label}
			value={getNumber(value) + ' М'}
			onClick={setCursor as any}
			onKeyDown={setCursor}
			onKeyUp={setCursor}
			onChange={e => onChange && onChange(replaceValue(e.target.value) as any)}
			{...rest}
		/>
	)
}

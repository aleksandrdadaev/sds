import { FC, forwardRef } from 'react'

import { IInput } from '@/shared/model/types/form/form-elements.type'
import MaskInput from '@/shared/ui/form-elements/mask-input/MaskInput'

import {
	phoneInputMask,
	replacementPhoneInput,
} from '../lib/utils/phone-input.util'

export const PhoneInput = forwardRef<HTMLInputElement, Partial<IInput>>(
	({ ...rest }, forwardRef: any) => {
		return (
			<MaskInput
				ref={forwardRef}
				mask={phoneInputMask}
				replacement={replacementPhoneInput}
				placeholder={phoneInputMask}
				{...rest}
				label='Телефон'
			/>
		)
	}
)

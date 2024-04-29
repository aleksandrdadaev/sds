import { InputMaskProps } from '@react-input/mask'
import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFormAgreement {
	agreement: boolean
}

interface IInputProps {
	error?: FieldError | undefined
	label: string
	white?: boolean
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IInputProps

type TypeTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IInputProps

export interface IInput extends TypeInputProps {}

export interface ITextarea extends TypeTextareaProps {}

export interface IMaskInput extends TypeInputProps, InputMaskProps {}

export interface ICheckBox extends Omit<TypeInputProps, 'label'> {
	label?: ReactNode
}

import { MotionProps } from 'framer-motion'
import { ButtonHTMLAttributes } from 'react'

interface IButtonProps {
	isLoading?: boolean
	white?: boolean
}

type TypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	IButtonProps &
	MotionProps

export interface IButton extends TypeButtonProps {}

import { Dispatch, SetStateAction } from 'react'

export interface IBurgerButton {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

import clsx from 'clsx'
import { FC } from 'react'

import { IBurgerButton } from '../../../model/types/burger-button.type'

import styles from './BurgerButton.module.scss'

const BurgerButton: FC<IBurgerButton> = ({ open, setOpen }) => {
	return (
		<button
			className={clsx(styles.wrapper, {
				[styles.open]: open,
			})}
			onClick={() => setOpen(prev => !prev)}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	)
}

export default BurgerButton

import { FC } from 'react'

import styles from './Calculator.module.scss'
import Fundaments from './fundaments/Fundaments'

export const Calculator: FC = () => {
	return (
		<section className={styles.wrapper}>
			<Fundaments />
		</section>
	)
}

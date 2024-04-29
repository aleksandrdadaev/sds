import { FC } from 'react'

import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ExcursionForm.module.scss'
import FormScroll from './form-scroll/FormScroll'
import Form from './form/Form'

const ExcursionForm: FC = () => {
	return (
		<FormScroll>
			<div className={styles.wrapper}>
				<SubTitle>ЗАПРОС НА ЭКСКУРСИЮ ПО СТРОЯЩИМСЯ ОБЪЕКТАМ</SubTitle>
				<p className={styles.text}>Строительство домов любой сложности!</p>
				<Form />
			</div>
		</FormScroll>
	)
}

export default ExcursionForm

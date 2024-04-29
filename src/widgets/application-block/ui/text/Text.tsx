import { motion } from 'framer-motion'
import { FC } from 'react'

import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { innerSectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './Text.module.scss'

const Text: FC = () => {
	return (
		<motion.div className={styles.wrapper} variants={innerSectionAnimation}>
			<SubTitle variants={getFadeLeftWardAnimation(-50)}>
				Отправить заявку
			</SubTitle>
			<motion.p className={styles.text} variants={getFadeLeftWardAnimation()}>
				Работаем для вас! Благодаря богатому опыту в строительном бизнесе, мы
				создали уникальный сервис для наших клиентов. Мы работаем по принципу
				«единого окна», где вы можете получить весь спектр услуг, связанный со
				строительством дома под ключ в Калининграде и области!
			</motion.p>
		</motion.div>
	)
}

export default Text

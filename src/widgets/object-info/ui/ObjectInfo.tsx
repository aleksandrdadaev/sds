'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { getNumberOfAny } from '@/shared/lib/utils/get-number-of-any'
import { getPrice } from '@/shared/lib/utils/price.util'
import { IObject } from '@/shared/model/types/object.type'
import { clearListAnimation } from '@/shared/ui/animations/list.animation'

import styles from './ObjectInfo.module.scss'
import InfoItem from './info-item/InfoItem'

export const ObjectInfo: FC<{ object: IObject }> = ({
	object: { budget, countOfMonth, buildingArea },
}) => {
	return (
		<motion.section
			className={styles.wrapper}
			variants={clearListAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<InfoItem
				span='Время строительства'
				value={getNumberOfAny('месяц', countOfMonth, '', 'а', 'ев')}
			/>
			<InfoItem span='Бюджет' value={getPrice(budget)} />
			<InfoItem span='Площадь застройки' value={`${buildingArea} м²`} />
		</motion.section>
	)
}

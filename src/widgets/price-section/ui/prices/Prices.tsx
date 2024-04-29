import { motion } from 'framer-motion'
import { FC } from 'react'

import { Price } from '@/entities/price'

import { prices } from '@/shared/config/prices.config'

import styles from './Prices.module.scss'
import { pricesAnimation } from './prices.animation'

const Prices: FC = () => {
	return (
		<motion.div className={styles.wrapper} variants={pricesAnimation}>
			{prices.map(price => (
				<Price info={price} key={price.name} />
			))}
		</motion.div>
	)
}

export default Prices

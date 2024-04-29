import { motion } from 'framer-motion'
import { FC } from 'react'

import { Object } from '@/entities/object'

import { IObject } from '@/shared/model/types/object.type'
import { listAnimation } from '@/shared/ui/animations/list.animation'

import styles from './List.module.scss'

const List: FC<{ objects: IObject[] }> = ({ objects }) => {
	return (
		<motion.div
			className={styles.wrapper}
			variants={listAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			{objects.map(object => (
				<Object object={object} key={object.id} />
			))}
		</motion.div>
	)
}

export default List

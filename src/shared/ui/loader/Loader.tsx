import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import loader from '@/shared/assets/loader.svg'

import styles from './Loader.module.scss'

const Loader: FC<{ classname?: string }> = ({ classname }) => {
	return (
		<div className={clsx(styles.wrapper, classname)}>
			<Image src={loader} alt='' fill className={styles.img} />
		</div>
	)
}

export default Loader

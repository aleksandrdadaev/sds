import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/shared/assets/logo.svg'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href={'/'} className={styles.wrapper}>
			<Image src={logo} alt='' width={132} height={60} className={styles.img} />
		</Link>
	)
}

export default Logo

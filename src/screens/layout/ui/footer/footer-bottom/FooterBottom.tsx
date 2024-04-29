import Link from 'next/link'
import { FC } from 'react'

import styles from './FooterBottom.module.scss'

const FooterBottom: FC = () => {
	return (
		<div>
			<div className={styles.wrapper}>
				<Link href='/user-agreement' className={styles.userAgreement}>
					Пользовательское соглашение
				</Link>
				<p className={styles.text}>
					Сайт разработан студией <span>NextWave IT Group</span>
				</p>
			</div>
		</div>
	)
}

export default FooterBottom

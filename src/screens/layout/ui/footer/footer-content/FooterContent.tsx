import { FC } from 'react'

import { ContactsBlock } from '@/widgets/contacts-block'
import { Navigation } from '@/widgets/navigation'

import Logo from '@/shared/ui/logo/Logo'

import styles from './FooterContent.module.scss'

const FooterContent: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Logo />
				<Navigation />
			</div>
			<ContactsBlock footer />
		</div>
	)
}

export default FooterContent

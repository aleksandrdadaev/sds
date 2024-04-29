import { FC, PropsWithChildren } from 'react'

import NotificationContainer from '@/shared/ui/notification-container/NotificationContainer'

import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<body className={styles.body}>
			<Header />
			{children}
			<Footer />
			<NotificationContainer />
		</body>
	)
}

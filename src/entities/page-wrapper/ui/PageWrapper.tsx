import { FC, PropsWithChildren } from 'react'

import styles from './PageWrapper.module.scss'

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
	return <main className={styles.wrapper}>{children}</main>
}

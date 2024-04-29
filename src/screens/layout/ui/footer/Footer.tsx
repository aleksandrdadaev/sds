import { FC } from 'react'

import styles from './Footer.module.scss'
import FooterBottom from './footer-bottom/FooterBottom'
import FooterContent from './footer-content/FooterContent'

const Footer: FC = () => {
	return (
		<footer>
			<div className={styles.wrapper}>
				<FooterContent />
			</div>
			<FooterBottom />
		</footer>
	)
}

export default Footer

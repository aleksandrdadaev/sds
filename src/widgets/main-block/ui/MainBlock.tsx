import mainImage from '/public/main.jpg'
import Image from 'next/image'
import { FC } from 'react'

import styles from './MainBlock.module.scss'
import Content from './content/Content'

export const MainBlock: FC = () => {
	return (
		<section className={styles.wrapper}>
			<Image src={mainImage} alt='Мы построим дом вашей мечты' fill />
			<Content />
		</section>
	)
}

export default MainBlock

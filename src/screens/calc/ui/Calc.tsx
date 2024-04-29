import { FC } from 'react'

import { ApplicationBlock } from '@/widgets/application-block'
import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { Calculator } from '@/widgets/calculator'
import { PageText } from '@/widgets/page-text'

import { PageWrapper } from '@/entities/page-wrapper'

import { description, title } from '@/shared/config/meta/meta-calculator.config'

import styles from './Calc.module.scss'

export const Calc: FC = () => {
	return (
		<PageWrapper>
			<BreadCrumbs />
			<PageText
				title={'Рассчитай свою мечту'}
				text={description}
				classname={styles.title}
			/>
			<Calculator />
			<ApplicationBlock />
		</PageWrapper>
	)
}

import { FC } from 'react'

import { ApplicationBlock } from '@/widgets/application-block'
import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { PageText } from '@/widgets/page-text'
import { PricesBlock } from '@/widgets/prices-block'

import { PageWrapper } from '@/entities/page-wrapper'

import { description } from '@/shared/config/meta/meta-prices.config'

export const Prices: FC = () => {
	return (
		<PageWrapper>
			<BreadCrumbs />
			<PageText title={'ЦЕНА ЗА М² И СРОКИ СТРОИТЕЛЬСТВА'} text={description} />
			<PricesBlock />
			<ApplicationBlock />
		</PageWrapper>
	)
}

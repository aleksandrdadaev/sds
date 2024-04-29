import { FC } from 'react'

import { ApplicationBlock } from '@/widgets/application-block'
import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { PageText } from '@/widgets/page-text'

import { PageWrapper } from '@/entities/page-wrapper'

import { text, title } from '@/shared/config/meta/meta-user-agreement.config'

export const UserAgreement: FC = () => {
	return (
		<PageWrapper>
			<BreadCrumbs />
			<PageText title={title} text={text} alt />
			<ApplicationBlock />
		</PageWrapper>
	)
}

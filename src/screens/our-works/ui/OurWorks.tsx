import { FC } from 'react'

import { AllObjects } from '@/widgets/all-objects'
import { ApplicationBlock } from '@/widgets/application-block'
import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { PageText } from '@/widgets/page-text'

import { PageWrapper } from '@/entities/page-wrapper'

import { description, title } from '@/shared/config/meta/meta-our-works.config'

export const OurWorks: FC = () => {
	return (
		<PageWrapper>
			<BreadCrumbs />
			<PageText title={title} text={description} />
			<AllObjects />
			<ApplicationBlock />
		</PageWrapper>
	)
}

export default OurWorks

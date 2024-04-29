import { Metadata } from 'next'
import { FC } from 'react'

import { OurWorks } from '@/screens/our-works'

import { description, title } from '@/shared/config/meta/meta-our-works.config'

export const metadata: Metadata = {
	title,
	description,
}

const page: FC = () => {
	return <OurWorks />
}

export default page

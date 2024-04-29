import { Metadata } from 'next'
import { FC } from 'react'

import { Prices } from '@/screens/prices'

import { description, title } from '@/shared/config/meta/meta-prices.config'

export const metadata: Metadata = {
	title,
	description,
}

const page: FC = () => {
	return <Prices />
}

export default page

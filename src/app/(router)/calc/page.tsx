import { Metadata } from 'next'
import { FC } from 'react'

import { Calc } from '@/screens/calc'

import { description, title } from '@/shared/config/meta/meta-calculator.config'

export const metadata: Metadata = {
	title,
	description,
}

const page: FC = () => {
	return <Calc />
}

export default page

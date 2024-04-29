import { Metadata } from 'next'
import { FC } from 'react'

import { UserAgreement } from '@/screens/user-agreement'

import { title } from '@/shared/config/meta/meta-user-agreement.config'

export const metadata: Metadata = {
	title,
}

const page: FC = () => {
	return <UserAgreement />
}

export default page

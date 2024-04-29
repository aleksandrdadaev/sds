import { Metadata } from 'next'
import { FC } from 'react'

import { Contacts } from '@/screens/contacts'

import { description, title } from '@/shared/config/meta/meta-contacts.config'

export const metadata: Metadata = {
	title,
	description,
}
const page: FC = () => {
	return <Contacts />
}

export default page

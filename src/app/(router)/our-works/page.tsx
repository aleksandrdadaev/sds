import { Metadata } from 'next'

import { OurWorks } from '@/screens/our-works'

import { useGetAllObjects } from '@/features/get-all-objects'

import { description, title } from '@/shared/config/meta/meta-our-works.config'

export const metadata: Metadata = {
	title,
	description,
}
export const revalidate = 60

export default async function Page() {
	const objects = await useGetAllObjects()
	return <OurWorks objects={objects} />
}

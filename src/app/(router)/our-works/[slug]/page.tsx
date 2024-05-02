import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Object } from '@/screens/object'

import { useGetAllObjects } from '@/features/get-all-objects'
import { useGetObject } from '@/features/get-object'

import { IParamsProps } from '@/shared/model/types/params-props.type'

export async function generateStaticParams() {
	const objects = await useGetAllObjects()

	return objects.map(object => ({
		slug: object.slug,
	}))
}
export const revalidate = 60

export const generateMetadata = async ({
	params,
}: IParamsProps): Promise<Metadata> => {
	const object = await useGetObject(params.slug)
	if (!object) notFound()
	const title: string = object.name
	const description: string = object.description
	return {
		title,
		description,
	}
}

const page = async ({ params }: IParamsProps) => {
	const object = await useGetObject(params.slug)
	if (!object) notFound()
	return <Object object={object} />
}

export default page

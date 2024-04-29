import { Metadata } from 'next'

import { Object } from '@/screens/object'

import { objects } from '@/shared/config/objects.config'
import { IParamsProps } from '@/shared/model/types/params-props.type'

export const generateMetadata = async ({
	params,
}: IParamsProps): Promise<Metadata> => {
	const object = await objects[Number(params.slug) - 1]

	const title: string = object.name
	const description: string = object.description
	return {
		title,
		description,
	}
}

const page = async ({ params }: IParamsProps) => {
	const object = await objects[Number(params.slug) - 1]
	return <Object object={object} />
}

export default page

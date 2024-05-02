import { IStatusCode } from './global.type'

export interface IObject {
	id: number
	name: string
	slug: string
	description: string
	countOfMonth: number
	budget: number
	buildingArea: number
	isCompleted: boolean
	photoPathes: string[]
}

export interface IObjectsResponse extends IStatusCode {
	data: {
		subjects: IObject[]
		count: number
	}
}

export interface IObjectResponse extends IStatusCode {
	data: IObject
}

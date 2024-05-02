import { IStatusCode } from './global.type'

export interface IFeedBack {
	id: number
	photoPath: string
}

export interface IFeedBacksResponse extends IStatusCode {
	data: {
		feedbacks: IFeedBack[]
		count: number
	}
}

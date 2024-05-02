import { IStatusCode } from './global.type'

export enum CalcElementEnum {
	foundation = 'foundation',
	floorSlab = 'floorSlab',
	wallMaterials = 'wallMaterials',
	monolithicBelt = 'monolithicBelt',
	atticStove = 'atticStove',
	roof = 'roof',
	ladder = 'ladder',
}

export interface ICalcElement {
	id: number
	name: string
	photoPath: string
	price: number
	type: CalcElementEnum
}

export interface ICalcElementsResponse extends IStatusCode {
	data: ICalcElement[]
}

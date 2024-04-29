import { IStage } from '@/shared/model/types/stage.type'

export interface IStagesBlock {
	src: string
	type: 'video' | 'img'
	stages: IStage[]
}

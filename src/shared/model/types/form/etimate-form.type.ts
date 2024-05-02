import { IComment, IFormAgreement } from './form-elements.type'

export interface IEstimateForm extends IFormAgreement, IComment {
	phoneNumber: string
	files: File[]
}

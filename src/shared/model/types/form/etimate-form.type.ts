import { IFormAgreement } from './form-elements.type'

export interface IEstimateForm extends IFormAgreement {
	phoneNumber: string
	comment: string
	files: File[]
}

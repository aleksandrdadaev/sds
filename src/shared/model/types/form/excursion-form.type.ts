import { IFormAgreement } from './form-elements.type'

export interface IExcursionForm extends IFormAgreement {
	name: string
	phoneNumber: string
	date?: string
	time?: string
	comment?: string
}

import { IComment, IFormAgreement } from './form-elements.type'

export interface IExcursionForm extends IFormAgreement, IComment {
	name: string
	phoneNumber: string
	date?: string
	time?: string
}

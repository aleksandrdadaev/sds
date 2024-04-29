import { IFormAgreement } from './form-elements.type'

export interface IUsualForm extends IFormAgreement {
	name: string
	phoneNumber: string
	comment?: string
}

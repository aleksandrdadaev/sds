import { IComment, IFormAgreement } from './form-elements.type'

export interface IUsualForm extends IFormAgreement, IComment {
	name: string
	phoneNumber: string
}

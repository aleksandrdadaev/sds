import { IStage } from '@/shared/model/types/stage.type'

export const stages: IStage[] = [
	{
		title: 'Звонок и назначение встречи',
		text: 'После отправки заявки с вами свяжется сотрудник для обсуждения проекта и составления тех. задания с учетом ваших пожеланий',
	},
	{
		title: 'Составление сметы',
		text: 'После составления тех. задания мы составим подробную смету расходов на строительство здания',
	},
	{
		title: 'Подписание договора',
		text: 'После согласования проекта заключается договор, в котором указываются фиксированные сроки и стоимость строительства дома',
	},
	{
		title: 'Строительство дома',
		text: 'Приступаем к поэтапному строительству дома. Каждый этап работ контролируется прорабом и фиксируется актом выполненных работ',
	},
	{
		title: 'Сдача дома',
		text: 'По завершению строительства выполняем уборку участка. Сдаем готовый дом заказчику',
	},
]
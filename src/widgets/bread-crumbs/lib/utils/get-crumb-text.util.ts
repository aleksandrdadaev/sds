export const getCrumbText = (text: string, dynamicName?: string): string => {
	switch (text) {
		case '':
			return 'Главная'
		case 'user-agreement':
			return 'Пользовательское соглашение'
		case 'contacts':
			return 'Контакты'
		case 'prices':
			return 'Цены'
		case 'our-works':
			return 'Наши работы'
		case 'calc':
			return 'Калькулятор'
		default:
			return dynamicName || ''
	}
}

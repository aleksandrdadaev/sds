import { INavLink } from '../model/types/nav-link.type'

export const navLinks: INavLink[] = [
	{
		text: 'Наши работы',
		path: '/our-works',
	},
	{
		text: 'Цены',
		path: '/prices',
	},
	{
		text: 'Контакты',
		path: '/contacts',
	},
	{
		text: 'Акции',
		path: '/',
		anchor: 'events',
	},
	{
		text: 'Отзывы',
		path: '/',
		anchor: 'reviews',
	},
]

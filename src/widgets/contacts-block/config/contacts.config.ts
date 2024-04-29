import viber from '@/shared/assets/icons/social-network/viber.svg'
import vk from '@/shared/assets/icons/social-network/vk.svg'
import whatsapp from '@/shared/assets/icons/social-network/whatsapp.svg'

import { IMessenger } from '../model/types/messenger.type'

export const messengers: IMessenger[] = [
	{
		name: 'VK',
		link: 'https://vk.com/stroy.dom.stil',
		icon: vk,
	},
	{
		name: 'Viber',
		link: 'https://viber.click/79097888606',
		icon: viber,
	},
	{
		name: 'Whatsapp',
		link: 'https://wa.clck.bar/79097888606',
		icon: whatsapp,
	},
]

export const phoneNumber = '922323'

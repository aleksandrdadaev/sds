'use client'

import clsx from 'clsx'
import { FC } from 'react'

import { createPhoneNumber } from '@/shared/lib/utils/phone-number.util'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import { MotionLink } from '@/shared/ui/motion-link'

import { messengers, phoneNumber } from '../config/contacts.config'

import styles from './ContactsBlock.module.scss'
import Messenger from './messenger/Messenger'

export const ContactsBlock: FC<{
	header?: boolean
	footer?: boolean
	block?: boolean
}> = ({ header, block, footer }) => {
	const icons = header ? messengers.slice(1).reverse() : messengers

	return (
		<div
			className={clsx(styles.wrapper, {
				[styles.footer]: footer,
				[styles.block]: block,
			})}
		>
			<div
				className={clsx(styles.messengers, {
					[styles.block]: block,
				})}
			>
				{icons.map(messenger => (
					<Messenger messenger={messenger} block={block} key={messenger.name} />
				))}
			</div>
			<MotionLink
				href={`tel:${phoneNumber}`}
				className={clsx(styles.tel, {
					[styles.block]: block,
				})}
				variants={fadeAnimation}
			>
				{createPhoneNumber(phoneNumber)}
			</MotionLink>
		</div>
	)
}

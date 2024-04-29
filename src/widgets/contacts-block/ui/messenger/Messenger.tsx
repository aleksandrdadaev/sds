import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { scaleAnimation } from '@/shared/ui/animations/scale.animation'
import { MotionLink } from '@/shared/ui/motion-link'

import { IMessenger } from '../../model/types/messenger.type'

import styles from './Messenger.module.scss'

const Messenger: FC<{ messenger: IMessenger; block?: boolean }> = ({
	messenger: { icon, link, name },
	block,
}) => {
	return (
		<MotionLink
			href={link}
			className={styles.wrapper}
			target='_blank'
			variants={scaleAnimation}
		>
			<Image
				src={icon}
				alt={name}
				width={24}
				height={24}
				className={clsx(styles.img, {
					[styles.block]: block,
				})}
			/>
		</MotionLink>
	)
}

export default Messenger

'use client'

import Link from 'next/link'
import { FC } from 'react'

import { ApplicationBlock } from '@/widgets/application-block'
import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { ObjectInfo } from '@/widgets/object-info'
import { ObjectSlider } from '@/widgets/object-slider'
import { PageText } from '@/widgets/page-text'

import { PageWrapper } from '@/entities/page-wrapper'

import { instagram } from '@/shared/config/instagram.config'
import { IObject } from '@/shared/model/types/object.type'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import stylesButton from '@/shared/ui/button/Button.module.scss'
import { MotionLink } from '@/shared/ui/motion-link'

import styles from './Object.module.scss'

export const Object: FC<{ object: IObject }> = ({ object }) => {
	return (
		<PageWrapper>
			<BreadCrumbs dynamicName={object.name} />
			<PageText title={object.name} text={object.description} />
			<ObjectInfo object={object} />
			<ObjectSlider slides={object.photoPathes} />
			<div className={styles.btnWrapper}>
				<MotionLink
					href={instagram}
					target='_blank'
					className={stylesButton.wrapper}
					variants={fadeAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					Больше работ у нас в Instagram
				</MotionLink>
			</div>
			<ApplicationBlock />
		</PageWrapper>
	)
}

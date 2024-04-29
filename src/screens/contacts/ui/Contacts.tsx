'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { ApplicationBlock } from '@/widgets/application-block'
import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { ContactsBlock } from '@/widgets/contacts-block'
import { PageText } from '@/widgets/page-text'

import { PageWrapper } from '@/entities/page-wrapper'

import { description, title } from '@/shared/config/meta/meta-contacts.config'
import { fadeScaleAnimation } from '@/shared/ui/animations/fade-scale.animation'
import { innerSectionAnimation } from '@/shared/ui/animations/section-wrapper.animation'

import styles from './Contacts.module.scss'

export const Contacts: FC = () => {
	return (
		<PageWrapper>
			<BreadCrumbs />
			<PageText title={title} text={description} />
			<motion.section
				className={styles.contacts}
				variants={innerSectionAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<motion.div className={styles.img} variants={fadeScaleAnimation}>
					<Image src={'/contacts.jpg'} alt='Контакты' fill />
				</motion.div>
				<ContactsBlock block />
			</motion.section>
			<ApplicationBlock />
		</PageWrapper>
	)
}

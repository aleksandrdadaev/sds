'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

import { getCrumbText } from '../lib/utils/get-crumb-text.util'

import styles from './BreadCrumbs.module.scss'

export const BreadCrumbs: FC<{ dynamicName?: string }> = ({ dynamicName }) => {
	const paths = usePathname()
	const pathNames = paths.split('/')
	return (
		<section className={styles.wrapper}>
			<nav className={styles.nav}>
				{pathNames.map((link, index) => {
					let href = link ? pathNames.slice(0, index + 1).join('/') : '/'
					return (
						<React.Fragment key={index}>
							<Link
								href={href}
								className={clsx({
									[styles.current]: paths === href,
								})}
							>
								{getCrumbText(link, dynamicName)}
							</Link>
							{pathNames.length !== index + 1 && <span> — </span>}
						</React.Fragment>
					)
				})}
			</nav>
		</section>
	)
}

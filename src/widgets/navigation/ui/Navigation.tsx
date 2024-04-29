'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { navLinks } from '../config/nav.config'

import styles from './Navigation.module.scss'
import NavLink from './nav-link/NavLink'
import { navigationVariants } from './navigation.animation'

export const Navigation: FC = () => {
	const pathname = usePathname()

	return (
		<motion.nav className={styles.wrapper} variants={navigationVariants}>
			{navLinks.map(link => (
				<NavLink
					link={{ ...link, isActive: pathname === link.path && !link.anchor }}
					key={link.text}
				/>
			))}
		</motion.nav>
	)
}

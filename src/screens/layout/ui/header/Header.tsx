'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

import { ContactsBlock } from '@/widgets/contacts-block'
import { Navigation } from '@/widgets/navigation'

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside'
import { useResize } from '@/shared/lib/hooks/useResize'
import Logo from '@/shared/ui/logo/Logo'

import styles from './Header.module.scss'
import BurgerButton from './burger-button/BurgerButton'
import { headerVariants } from './header.animation'

const Header: FC = () => {
	const { isDesktop, isLaptop, isMobile, isTablet, width } = useResize()
	const [open, setOpen] = useState<boolean>(true)
	useEffect(() => {
		isDesktop || isLaptop ? setOpen(true) : setOpen(false)
	}, [isDesktop, isLaptop, isTablet, isMobile])
	const ref = useClickOutside({
		callback: () => (isMobile || isTablet) && setOpen(false),
	})
	return (
		<header className={styles.wrapper}>
			<div className={styles.content}>
				<Logo />
				<AnimatePresence>
					{open && (
						<motion.div
							ref={ref as any}
							className={styles.right}
							variants={headerVariants}
							initial='hidden'
							animate='show'
							exit='hidden'
						>
							<Navigation />
							<ContactsBlock header />
						</motion.div>
					)}
				</AnimatePresence>
				{(isTablet || isMobile) && (
					<BurgerButton open={open} setOpen={setOpen} />
				)}
			</div>
		</header>
	)
}

export default Header

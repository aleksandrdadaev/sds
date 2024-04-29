import clsx from 'clsx'
import { FC } from 'react'

import { useResize } from '@/shared/lib/hooks/useResize'
import { goToAnchor } from '@/shared/lib/utils/go-to-anchor.util'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { MotionLink } from '@/shared/ui/motion-link'

import { INavLink } from '../../model/types/nav-link.type'

import styles from './NavLink.module.scss'

const NavLink: FC<{ link: INavLink }> = ({
	link: { path, text, anchor, isActive },
}) => {
	const { isMobile, isTablet } = useResize()
	return (
		<MotionLink
			href={path}
			scroll={!anchor}
			className={clsx(styles.link, {
				[styles.active]: isActive,
			})}
			onClick={
				anchor ? () => goToAnchor(anchor, isTablet || isMobile) : () => {}
			}
			variants={getFadeLeftWardAnimation()}
		>
			{text}
		</MotionLink>
	)
}

export default NavLink

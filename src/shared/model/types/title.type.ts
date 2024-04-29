import { MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

interface ITitleProps {
	alt?: boolean
}

type TypeTitleProps = HTMLAttributes<HTMLHeadingElement> &
	ITitleProps &
	MotionProps

export interface ITitle extends TypeTitleProps {}

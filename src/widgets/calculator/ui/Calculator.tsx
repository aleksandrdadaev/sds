'use client'

import { motion } from 'framer-motion'
import { FC, useState } from 'react'

import { getPrice } from '@/shared/lib/utils/price.util'
import { getFadeLeftWardAnimation } from '@/shared/ui/animations/fade-leftward.animation'
import { fadeAnimation } from '@/shared/ui/animations/fade.animation'
import {
	innerSectionAnimation,
	sectionAnimation,
} from '@/shared/ui/animations/section-wrapper.animation'

import styles from './Calculator.module.scss'
import AtticStove from './attic-stove/AtticStove'
import FloorSlab from './floor-slab/FloorSlab'
import Fundaments from './fundaments/Fundaments'
import Ladder from './ladder/Ladder'
import MonolithicBelt from './monolithic-belt/MonolithicBelt'
import Roof from './roof/Roof'
import WallMaterials from './wall-materials/WallMaterials'

export const Calculator: FC = () => {
	const [foundation, setFoundation] = useState<number>(0)
	const [wallMaterials, setWallMaterials] = useState<number>(0)
	const [floorSlab, setFloorSlab] = useState<number>(0)
	const [monolithicBelt, setMonolithicBelt] = useState<number>(0)
	const [atticStove, setAtticStove] = useState<number>(0)
	const [roof, setRoof] = useState<number>(0)
	const [ladder, setLadder] = useState<number>(0)
	return (
		<section className={styles.wrapper}>
			<Fundaments price={foundation} setPrice={setFoundation} />
			<WallMaterials price={wallMaterials} setPrice={setWallMaterials} />
			<FloorSlab price={floorSlab} setPrice={setFloorSlab} />
			<MonolithicBelt price={monolithicBelt} setPrice={setMonolithicBelt} />
			<AtticStove price={atticStove} setPrice={setAtticStove} />
			<Roof price={roof} setPrice={setRoof} />
			<Ladder price={ladder} setPrice={setLadder} />

			<motion.div
				className={styles.footer}
				variants={sectionAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<motion.div
					className={styles.textWrapper}
					variants={innerSectionAnimation}
				>
					<motion.h3
						className={styles.title}
						variants={getFadeLeftWardAnimation()}
					>
						итоговая примерная цена
					</motion.h3>
					<motion.p
						className={styles.text}
						variants={getFadeLeftWardAnimation()}
					>
						Расчеты приблизительные, финальная цена на сайте может быть меньше
						или больше цены, после консультации от застройщика.
					</motion.p>
				</motion.div>
				<motion.span className={styles.price} variants={fadeAnimation}>
					≈{' '}
					{getPrice(
						foundation +
							wallMaterials +
							floorSlab +
							monolithicBelt +
							atticStove +
							roof +
							ladder
					)}
				</motion.span>
			</motion.div>
		</section>
	)
}

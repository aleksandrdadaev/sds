import { FC } from 'react'

import { ApplicationBlock } from '@/widgets/application-block'
import { BlockWithEstimate } from '@/widgets/block-with-estimate'
import { CalcBlock } from '@/widgets/calc-block'
import { ConstructionStages } from '@/widgets/construction-stages'
import { Excursion } from '@/widgets/excursion'
import { MainBlock } from '@/widgets/main-block'
import { ObjectsUnderConstruction } from '@/widgets/objects-under-construction'
import { OfferMonth } from '@/widgets/offer-month'
import { PriceSection } from '@/widgets/price-section'
import { RecentObjects } from '@/widgets/recent-objects'
import { Reviews } from '@/widgets/reviews'
import { WhyChooseUs } from '@/widgets/why-choose-us'

import styles from './Main.module.scss'

export const Main: FC = () => {
	return (
		<main className={styles.wrapper}>
			<MainBlock />
			<OfferMonth />
			<PriceSection />
			<CalcBlock />
			<ConstructionStages />
			<BlockWithEstimate />
			<RecentObjects />
			<ObjectsUnderConstruction />
			<Excursion />
			<WhyChooseUs />
			<Reviews />
			<ApplicationBlock />
		</main>
	)
}

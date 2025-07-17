'use client'

import { CategoryWithMetals, MetalTable, Title } from "@/components";
import useCategories from "@/Hooks/useCategories"
import styles from './page.module.scss'

export default function PriceList() {
	const categories = useCategories()
	
	return (
		<div className={styles.priceList}>
			<Title tag="h2" color="black">Таблица расценок </Title>
			<div className={styles.container}> 
				{categories.map((category) => (
					<CategoryWithMetals key={category.id} category={category} />
				))}
			</div>
		</div>
	)
}
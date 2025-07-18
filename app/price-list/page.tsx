import { CategoryWithMetals, MetalTable, Title } from "@/components";
import styles from './page.module.scss';
import type { CategoryMetals } from "../../types/metals"
import { getCategoriesWithMetals } from "../actions/getCategoryWithMetals";


export default async function PriceList() {
	const categories = await getCategoriesWithMetals()
	
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
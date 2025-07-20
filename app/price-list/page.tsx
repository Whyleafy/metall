import { Button, CategoryWithMetals, Title } from "@/components";
import styles from './page.module.scss';
import { getCategoriesWithMetals } from "../actions/getCategoryWithMetals";

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function PriceList() {
	const categories = await getCategoriesWithMetals()
	
	return (
		<div className={styles.priceList}>
			<Title tag="h2" color="black">Таблица расценок </Title>
			<div className={styles.priceList__buttons}>
				{categories.map((category) => {
				return (
					
					<Button sm={true} key={category.id} rounded={true} variant="outline" as="link" href={`#${category.name}`} >{category.name.trim().toLowerCase() === "главная" ? "Прием металлов по таблице" : `${category.name}`}</Button>
				)})}
			</div>
			<div className={styles.container}> 
				{categories.map((category) => (
					<CategoryWithMetals id={category.name} key={category.id} category={category} />
				))}
			</div>
		</div>
	)
}
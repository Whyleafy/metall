import { Button, CategoryWithMetals, Title } from "@/components";
import styles from './page.module.scss';
import { buttons, categories } from "./constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Прайс лист актуальных цен на металлы"
}

export default function PriceList() {
	
	return (
		<div className={styles.priceList}>
			<Title tag="h2" color="black">Прайс лист</Title>
			<div className={styles.priceList__buttons}>
				{buttons.map((button) => {
				return (
					
					<Button className={styles.priceList__buttons__button} sm={true} key={button.id} rounded={true} variant="outline" as="link" href={button.href} >{button.name}</Button>
				)})}
			</div>
			<div className={styles.container}> 
				{categories.map((category) => (
					<CategoryWithMetals key={category.id} category={category} />
				))}
			</div>
		</div>
	)
}
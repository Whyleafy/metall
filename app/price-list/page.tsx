import { Button, CategoryWithMetals, Title } from "@/components";
import styles from './page.module.scss';
import { buttons, categories } from "./constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Цены на металлолом в Пущино | Актуальный прайс-лист на сегодня",
  description: "Актуальные цены на металлолом в Пущино. Сравните стоимость черного и цветного лома за кг. Гарантируем честный расчет!",
  keywords: [
    "прайс на металлолом Пущино",
    "цены за кг металла",
    "стоимость лома сегодня",
    "черный металл цена",
    "цветной металл цена",
    "медь, алюминий, бронза",
    "скупка лома дорого",
  ],
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
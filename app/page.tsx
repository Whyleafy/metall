import { Metadata } from "next";
import styles from "./page.module.scss";
import { HeroSection, StepsSection, PriceSection, YandexSection, ContactSection, ReviewSection, AnswersSection } from "@/components";

export const metadata: Metadata = {
	title: "Приём металлолома в Пущино — актуальные цены, скупка | Металлолом Пущино",
  description: "Приём металлолома в Пущино по высоким ценам. Актуальная таблица цен, приём черного и цветного лома. Адрес и контакты на карте.",
	keywords: [
    "прием металлолома Пущино",
		"Металлалом пущино",
    "скупка металла дорого",
    "цены на металлолом",
    "черный и цветной металл",
    "прием лома Пущино",
    "металлобаза",
    "сдать металл",
  ]
}

export default function Home() {
	
	return (
		<main className={styles.page}>
			<HeroSection />
			<StepsSection />
			<PriceSection />
			<YandexSection />
			<ReviewSection />
			<ContactSection />
			{/*<AnswersSection />*/}
		</main>
	);
}

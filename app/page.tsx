'use client'
import { useState } from "react";
import styles from "./page.module.scss";
import { HeroSection, StepsSection, PriceSection, CalculatorSection, YandexSection, ContactSection, ArticleSection } from "@/components";


export default function Home() {
	
	return (
		<main className={styles.page}>
			<HeroSection />
			<StepsSection />
			<PriceSection />
			<CalculatorSection />
			<YandexSection />
			<ContactSection />
			<ArticleSection />
		</main>
	);
}

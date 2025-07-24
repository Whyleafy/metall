import styles from "./page.module.scss";
import { HeroSection, StepsSection, PriceSection, YandexSection, ContactSection, ReviewSection } from "@/components";


export default function Home() {
	
	return (
		<main className={styles.page}>
			<HeroSection />
			<StepsSection />
			<PriceSection />
			<YandexSection />
			<ReviewSection />
			<ContactSection />
		</main>
	);
}

import React from 'react';
import styles from "./CalculatorSection.module.scss"
import { Calculator, Title } from '@/components'

interface Props {
	className?: string;
	// Добавьте другие пропсы здесь
}

export const CalculatorSection: React.FC<Props> = ({ className }) => {
	return (
		<section className={styles.section}>
			<div  className={styles.section__text}>
				<Title className={styles.section__text__title} tag='h2' color='black'>Калькулятор стоимости металла</Title>
				<p className={styles.section__text__p}>Рассчитайте примерную стоимость вашего металлолома</p>
			</div>
			<Calculator />
		</section>
	);
};

export default CalculatorSection;
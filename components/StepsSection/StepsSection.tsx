import { CreditCard, Scale, Truck } from 'lucide-react';
import React from 'react';
import { Title } from "@/components";
import styles from './StepsSection.module.scss'

interface Props {
	className?: string;
	// Добавьте другие пропсы здесь
}

export const StepsSection: React.FC<Props> = ({ className }) => {
	const steps = [
    {
      icon: Truck,
      title: "Привозите металл",
      description: "Привозите металл на наш пункт приема или вызывайте курьера для вывоза"
    },
    {
      icon: Scale,
      title: "Мы взвешиваем и оцениваем",
      description: "Точное взвешивание на поверенных весах и честная оценка по актуальным ценам"
    },
    {
      icon: CreditCard,
      title: "Получаете оплату",
      description: "Моментальная оплата наличными или переводом на карту удобным способом"
    }
  ];
	
	
	return (
		<div className={styles.section}>
			<div className={styles.section__text}>
				<Title color='black' tag='h2' className={styles.section__text__title}>Как мы работаем?</Title>
				<p className={styles.section__text__p}>Простой и прозрачный процесс в три шага</p>
			</div>
			<div className={styles.section__steps}>
				{steps.map((step, index) => (
					<div key={index}className={styles.step}>
						<div className={styles.step__iconBackground}>
							<step.icon className={styles.step__icon}/>
						</div>
						<Title tag='h3' color='black' className={styles.step__title}>{step.title}</Title>
						<p className={styles.step__p}>{step.description}</p>
						<div className={styles.step__index}>{index + 1}</div>
					</div>
          		))}
			</div>
		</div>
	);
};

export default StepsSection;
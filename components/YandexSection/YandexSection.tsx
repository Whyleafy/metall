import React from 'react';
import styles from './YandexSection.module.scss';
import { Clock, MapPin, Phone } from 'lucide-react';
import { Title, YandexMap } from '@/components';

interface Props {
	className?: string;
}

export const YandexSection: React.FC<Props> = ({ className }) => {
	return (
		<section className={`${styles.section} ${className || ''}`}>
			<div className={styles.section__container}>
				<Title tag="h2" color="black" className={styles.section__title}>
					Мы рядом с вами
				</Title>
				<div className={styles.section__grid}>
					<YandexMap 
						points={[
							{
								coords: [54.828248, 37.609032],
								address: 'Г. Пущино, Московская область',
								schedule: 'Пн-Сб: 8:30-20:00, Вск: выходной',
							},
						]}
					/>
					<div className={styles.info}>
						<div className={styles.info__text}>
							<MapPin className={styles.info__text__icon} />
							<div>
								<Title tag="h3" color="black" className={styles.title}>
									Наш адрес
								</Title>
								<p>Г. Пущино, Московская область, ул. Грузовая</p>
							</div>
						</div>
						<div className={styles.info__text}>
							<Clock className={styles.info__text__icon} />
							<div>
								<Title tag="h3" color="black" className={styles.title}>
									Время работы
								</Title>
								<p>Пн-Сб: 8:30-20:00. Воскресенье выходной</p>
							</div>
						</div>
						<div className={styles.info__text}>
							<Phone className={styles.info__text__icon} />
							<div>
								<Title tag="h3" color="black" className={styles.title}>
									Телефон
								</Title>
								<a href="tel:+79259002496">+7 (925) 900-24-96</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default YandexSection;

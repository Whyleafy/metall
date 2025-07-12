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
								schedule: 'Пн-Сб: 8:30-20:00',
							},
						]}
					/>
					<div className={styles.info}>
						<div className={styles.info__text}>
							<MapPin className={styles.info__text__icon} />
							<div>
								<Title tag="h3" color="black" className={styles.title}>
									Основной пункт приёма
								</Title>
								<p>Г. Пущино, Московская область, ул. Грузовая, д. 4</p>
							</div>
						</div>
						<div className={styles.info__text}>
							<Clock className={styles.info__text__icon} />
							<div>
								<Title tag="h3" color="black" className={styles.title}>
									Время работы
								</Title>
								<p>Пн-Сб: 8:30-20:00</p>
							</div>
						</div>
						<div className={styles.info__text}>
							<Phone className={styles.info__text__icon} />
							<div>
								<Title tag="h3" color="black" className={styles.title}>
									Телефон
								</Title>
								<a href="tel:+79991234567">+7 (999) 123-45-67</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default YandexSection;

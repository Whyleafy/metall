import React from 'react';
import styles from './Footer.module.scss';
import { Logo } from "@/components";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__grid}>
				{/* Логотип и описание */}
				<div className={styles.footer__grid__column}>
					<div className={styles.logo}>
						<Logo />
						<p className={styles.logo__text}>Стальной дворик</p>
					</div>
					<p className={styles.columnText}>
						Надежный прием металлолома в городе. Честные цены, быстрая оценка, удобная оплата.
					</p>
				</div>

				{/* Контакты */}
				<div className={styles.footer__grid__column}>
					<p className={styles.title__text}>Контакты</p>
					<div className={styles.string}><Phone className={styles.string__icon} />+7 (925) 900-24-96</div>
					{/* <div className={styles.string}><Mail className={styles.string__icon} />info@metallpriem.ru</div> */}
					<div className={styles.string}><MapPin className={styles.string__icon} />Г. Пущино, Московская Область, ул. Грузовая</div>
				</div>

				{/* Время работы */}
				<div className={styles.footer__grid__column}>
					<p className={styles.title__text}>Время работы</p>
					<div className={styles.string}><Clock className={styles.string__icon} />Пн–Сб: 8:30–20:00</div>
					<div className={styles.string}>Воскресенье выходной</div>
				</div>

				{/* Полезные ссылки */}
				<div className={styles.footer__grid__column}>
					<p className={styles.title__text}>Полезные ссылки</p>
					<ul className={styles.links}>
						<li><a href="/">Главная</a></li>
						<li><a href="#prices">Актуальные цены</a></li>
						<li><a href="#steps">Как сдать металл</a></li>
					</ul>
				</div>
			</div>

			{/* Нижний подвал */}
			<div className={styles.footer__bottom}>
				<p>© 2025 Металлалом Пущино. Все права защищены.</p>
			</div>
		</footer>
	);
};

export default Footer;

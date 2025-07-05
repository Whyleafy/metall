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
					<div className={styles.title}>
						<Logo />
						<p className={styles.title__text}>МеталлПрием</p>
					</div>
					<p className={styles.columnText}>
						Надежный прием металлолома в городе. Честные цены, быстрая оценка, удобная оплата.
					</p>
				</div>

				{/* Контакты */}
				<div className={styles.footer__grid__column}>
					<p className={styles.title__text}>Контакты</p>
					<div className={styles.string}><Phone className={styles.string__icon} />+7 (999) 123-45-67</div>
					<div className={styles.string}><Mail className={styles.string__icon} />info@metallpriem.ru</div>
					<div className={styles.string}><MapPin className={styles.string__icon} />Г. Пущино, Московская Область</div>
				</div>

				{/* Время работы */}
				<div className={styles.footer__grid__column}>
					<p className={styles.title__text}>Время работы</p>
					<div className={styles.string}><Clock className={styles.string__icon} />Пн–Сб: 8:30–20:00</div>
				</div>

				{/* Полезные ссылки */}
				<div className={styles.footer__grid__column}>
					<p className={styles.title__text}>Полезные ссылки</p>
					<ul className={styles.links}>
						<li><a href="#">Виды металлов</a></li>
						<li><a href="#">Актуальные цены</a></li>
						<li><a href="#">Как сдать металл</a></li>
						<li><a href="#">Вызов курьера</a></li>
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

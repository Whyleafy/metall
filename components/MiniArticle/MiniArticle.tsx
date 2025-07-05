import React from 'react';
import styles from "./MiniArticle.module.scss"
import { Title } from '@/components'
import Link from 'next/link';

interface Props {
	className?: string;
	title: string;
	description: string;
	link: string;
	image: string;
}

export const MiniArticle: React.FC<Props> = ({ title, description, link, image, className }) => {
	return (
		<div className={styles.card}>
			<img src={image} alt="article image" className={styles.card__image}/>
			<div className={styles.card__content}>
				<Title color='black' tag='h4' className={styles.card__content__title}>{title}</Title>
				<p className={styles.card__content__description}>{description}</p>
				<Link href={link} className={styles.card__content__link}>Читать далее →</Link>
			</div>
		</div>
	);
};

export default MiniArticle;
import React from 'react';
import { Button, MiniArticle, Title } from "@/components";
import styles from "./ArticleSection.module.scss"
import { articles } from './mock-articles';

interface Props {
	className?: string;
	// Добавьте другие пропсы здесь
}

export const ArticleSection: React.FC<Props> = ({ className }) => {
	return (
		<div className={styles.section}>
			<Title tag='h2' color='black' className={styles.section__title}>Полезные статьи </Title>
			<p className={styles.section__p}>Узнайте больше переработке металлов и выгодной сдаче лома</p>
			<div className={styles.section__container}>
				{articles.map((article, index) => (
					<MiniArticle 
					key={index}
					image={article.image} 
					link={article.link} 
					title={article.title} 
					description={article.description} 
					/>
				))}
			</div>
			
			<Button variant='outline' as='link' href='/articles'>Все статьи</Button>
		</div>
	);
};

export default ArticleSection;
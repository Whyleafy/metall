import { MiniArticle, Title } from '@/components'
import styles from './page.module.scss'
import { getArticles } from '../actions/getArticles'

export default async function Articles() {
	const articles = await getArticles();
	
	return (
		<div className={styles.page}>
			<Title className={styles.page__title} tag='h1' color='black'>Блог о металлоломе</Title>
			<p className={styles.page__text}>Полезные статьи и советы по приему, особенностях и переработке металлов</p>
			<div className={styles.container}>
				{articles.map((article) => (
					<MiniArticle link={`articles/${article.slug}`} key={article.title} title={article.title} description={article.description} image={article.imageUrl} />
				))}
			</div>
		</div>
	)
}
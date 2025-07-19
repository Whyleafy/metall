import { getArticleBySlug } from "@/app/actions/getArticleBySlug"
import { Button, MiniArticle, Title } from "@/components"
import Link from "next/link";
import styles from "./page.module.scss"
import { ArrowLeft, Calendar } from "lucide-react";

export default async function ArticlePage({ params }: any) {
	const { slug } = params;
	
	const article = await getArticleBySlug(slug);
	
	const links = [
		{
			href: '/',
			name: "Главная",
		},
		{
			href: '/articles',
			name: "Блог"
		}
		
	]
	
	return (
		<div className={styles.page}>
			
			<div className={styles.links}>
				{links.map((link) => (
					<div key={link.name} className={styles.linkWithHashtag}>
						<Link href={link.href}>{link.name}</Link>
						<p className={styles.linkWithHashtag__p}>/</p>
					</div>
				))}
				<p className={styles.miniTitle}>{article.title}</p>
			</div>
			
			<div className={styles.back}>
				<ArrowLeft />
				<Link href='/articles' className={styles.back__link}>
					Вернуться к статьям
				</Link>
			</div>
			
			<div className={styles.date}>
				<Calendar  className={styles.date__icon} size={20}/>
				<p className={styles.date__p}>
					{new Date(article.createdAt).toLocaleDateString()}
				</p>
			</div>
			
			<div className={styles.article}>
				<Title tag="h1" color="black">{article.title}</Title>
				<img src={article.imageUrl} className={styles.article__image}/>
				<p className={styles.article__p}>{article.description}</p>
			</div>
			
			<div className={styles.questions}>
				<Title tag="h3" color="black">Остались вопросы?</Title>
				<p className={styles.question__p}>Свяжитесь с нами для получения подробной консультации по приему металлолома</p>
				<Button sm={true} className={styles.questions__button} as='link' href="tel:+799912334567"> Получить консультацию</Button>
			</div>
		</div>
	)
}
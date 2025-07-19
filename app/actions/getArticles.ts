import { prisma } from "@/lib/prisma";


export async function getArticles() {
	const articles = await prisma.article.findMany({
		select : {
			title: true,
			description: true,
			slug: true,
			createdAt: true,
			imageUrl: true
		},
		orderBy: {
			createdAt: 'desc'
		}
	})
	
	return articles;
}
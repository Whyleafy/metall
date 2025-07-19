import { prisma } from "@/lib/prisma";

export async function getArticleBySlug(slug: string) {
	const article = await prisma.article.findUnique({
		where: { slug }
	});
	
	if (!article) {
		throw new Error('Article now found')
	}
	
	return article;
}
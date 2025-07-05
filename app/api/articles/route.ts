import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
	try {
		const articles = await prisma.article.findMany({
			orderBy: {updatedAt: 'desc'}
		});
		
		return NextResponse.json(articles);
	} catch (error) {
		console.error("Error fetching metals:", error);
   		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
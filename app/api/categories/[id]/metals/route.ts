import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function GET(_: NextRequest, { params }: any) {
	try {
		const category = await prisma.category.findUnique({
			where: { id: params.id },
			include: {
				metals: {
					include: {
						metal: true,
					},
				},
			},
		});

		if (!category) {
			return NextResponse.json({ error: "Категория не найдена" }, { status: 404 });
		}

		const metalList = category.metals.map((m) => m.metal);

		return NextResponse.json(metalList);
	} catch (error) {
		console.error("Ошибка при получении металлов по категории:", error);
		return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
	}
}

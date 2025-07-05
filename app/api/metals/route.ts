import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
	try {
		const metals = await prisma.metal.findMany({
			orderBy: {updatedAt: 'desc'}
		});
		
		return NextResponse.json(metals);
	} catch (error) {
		console.error("Error fetching metals:", error);
   		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
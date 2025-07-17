import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


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
};

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { name, cashPrice, nonCashPrice, categoryId} = body;
		const newMetal = await prisma.metal.create({
			data: { name, cashPrice, nonCashPrice,
				categories: {
					create: [{category: {connect: {id: categoryId}}}]
				}
			 }
		});
		
		return NextResponse.json(newMetal)
	} catch (error) {
		console.error("Error creating metal:", error);
    	return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request, {params }: { params: {id: string } } ) {
	try {
		const body = await req.json();
		const { name, cashPrice, nonCashPrice} = body;
		const updateMetal = await prisma.metal.update({
			where: {id: params.id},
			data: { name, cashPrice, nonCashPrice }
		});
		
		return NextResponse.json(updateMetal)
	} catch (error) {
		
	}
};

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
	try {
		await prisma.metal.delete({
			where: {id: params.id}
		});
		
		return NextResponse.json({ message: "Deleted" });
	} catch (error) {
		console.error("Error deleting metal:", error);
    	return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
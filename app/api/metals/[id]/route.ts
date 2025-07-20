import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: any) {
  try {
    const body = await req.json();
    const { name, cashPrice, nonCashPrice } = body;

    const updateMetal = await prisma.metal.update({
      where: { id: params.id },
      data: { name, cashPrice, nonCashPrice },
    });

    return NextResponse.json(updateMetal);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: any) {
  try {
	
	const metalId = params.id;
	await prisma.categoryOnMetal.deleteMany({
      where: {
        metalId
      },
    });
	
    await prisma.metal.delete({
      where: { id: metalId },
    });

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

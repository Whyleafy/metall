import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  try {
    const { params } = context;
    const body = await req.json();
    const { name, cashPrice, nonCashPrice } = body;

    const updatedMetal = await prisma.metal.update({
      where: { id: params.id },
      data: { name, cashPrice, nonCashPrice },
    });

    return NextResponse.json(updatedMetal);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, context: { params: { id: string } }) {
  try {
    const { id } = context.params;

    await prisma.metal.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    console.error("Error deleting metal:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

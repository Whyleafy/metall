import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import type { NextRequest as NextJsRequest } from "next/server";

type Context = {
  params: {
    id: string;
  };
};

export async function PUT(req: NextJsRequest, { params }: Context) {
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

export async function DELETE(_req: NextJsRequest, { params }: Context) {
  try {
    await prisma.metal.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    console.error("Error deleting metal:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

import { prisma } from "@/lib/prisma";

export async function getMetals() {
	return prisma.metal.findMany({
    orderBy: { updatedAt: "desc" },
  });
}
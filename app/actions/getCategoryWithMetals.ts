'use server'

import { prisma } from "@/lib/prisma";

export const getCategoriesWithMetals = async () => {
  const categories = await prisma.category.findMany({
    include: {
      metals: {
        include: {
          metal: true
        }
      }
    },
	orderBy: {
		order: 'asc'
	}
  });

  return categories.map(category => ({
    id: category.id,
    name: category.name,
    metals: category.metals.map(m => m.metal)
  }));
};

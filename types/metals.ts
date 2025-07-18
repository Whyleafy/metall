// types/metal.ts

// Базовая сущность Металла из Prisma
export type Metal = {
  id: string;
  name: string;
  cashPrice: number | null;
  nonCashPrice: number | null;
  updatedAt: Date; // так как Date в API возвращается в виде строки
};

// Категория из Prisma
export type Category = {
  id: string;
  name: string;
};

// Связующая таблица CategoryOnMetal
export type CategoryOnMetal = {
  metalId: string;
  categoryId: string;
  assignedAt: string;
};

// Категория + массив чистых металлов (как ты используешь в `CategoryWithMetals`)
export type CategoryMetals = {
  id: string;
  name: string;
  metals: Metal[];
};

// Металл + список категорий (если вдруг понадобится обратная сторона)
export type MetalWithCategories = {
  id: string;
  name: string;
  cashPrice: number | null;
  nonCashPrice: number | null;
  updatedAt: string;
  categories: Category[];
};

// Полная запись из связующей таблицы, с вложенными объектами (как в `prisma.category.findMany({ include: { metals: { include: { metal: true } } })`)
export type CategoryWithRawMetals = {
  id: string;
  name: string;
  metals: {
    metal: Metal;
    assignedAt: string;
  }[];
};

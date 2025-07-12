-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryOnMetal" (
    "metalId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoryOnMetal_pkey" PRIMARY KEY ("metalId","categoryId")
);

-- AddForeignKey
ALTER TABLE "CategoryOnMetal" ADD CONSTRAINT "CategoryOnMetal_metalId_fkey" FOREIGN KEY ("metalId") REFERENCES "Metal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnMetal" ADD CONSTRAINT "CategoryOnMetal_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

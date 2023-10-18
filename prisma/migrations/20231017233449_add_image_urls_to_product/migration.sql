/*
  Warnings:

  - You are about to drop the column `imageUrls2` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUrls2",
ADD COLUMN     "imageUrls" TEXT[];

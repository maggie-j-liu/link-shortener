-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "clicks" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT false;

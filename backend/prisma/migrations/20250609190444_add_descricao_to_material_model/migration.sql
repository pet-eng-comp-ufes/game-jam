/*
  Warnings:

  - Added the required column `descricao` to the `materiais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "materiais" ADD COLUMN     "descricao" TEXT NOT NULL;

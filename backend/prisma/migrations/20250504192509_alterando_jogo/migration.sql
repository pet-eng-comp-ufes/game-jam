/*
  Warnings:

  - Added the required column `capa` to the `jogos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jogos" ADD COLUMN     "capa" TEXT NOT NULL;

/*
  Warnings:

  - Added the required column `projectId` to the `form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `form` ADD COLUMN `projectId` INTEGER NOT NULL;

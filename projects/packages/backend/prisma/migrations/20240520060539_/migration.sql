/*
  Warnings:

  - You are about to drop the `form` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `form` DROP FOREIGN KEY `form_projectId_fkey`;

-- DropTable
DROP TABLE `form`;

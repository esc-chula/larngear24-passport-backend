/*
  Warnings:

  - A unique constraint covering the columns `[google_id]` on the table `Members` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Members_lg_number_key";

-- CreateIndex
CREATE UNIQUE INDEX "Members_google_id_key" ON "Members"("google_id");

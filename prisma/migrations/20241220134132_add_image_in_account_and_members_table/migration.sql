-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Members" (
    "lg_number" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "nick_name" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "baan" TEXT NOT NULL,
    "google_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Members_lg_number_key" ON "Members"("lg_number");

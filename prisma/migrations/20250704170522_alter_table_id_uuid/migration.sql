/*
  Warnings:

  - The primary key for the `Anomaly` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Anomaly` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Anomaly" DROP CONSTRAINT "Anomaly_pkey",
ADD COLUMN     "isNew" BOOLEAN NOT NULL DEFAULT true,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Anomaly_pkey" PRIMARY KEY ("id");

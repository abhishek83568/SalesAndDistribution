/*
  Warnings:

  - Changed the type of `vehicleCapacity` on the `DeliveryVehicle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "DeliveryVehicle" DROP COLUMN "vehicleCapacity",
ADD COLUMN     "vehicleCapacity" INTEGER NOT NULL;

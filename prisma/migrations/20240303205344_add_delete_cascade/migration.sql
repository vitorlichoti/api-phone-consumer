-- DropForeignKey
ALTER TABLE "Detail" DROP CONSTRAINT "Detail_phoneId_fkey";

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "Phone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

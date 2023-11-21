-- AddForeignKey
ALTER TABLE "ljacquards" ADD CONSTRAINT "ljacquards_id_origin_fkey" FOREIGN KEY ("id_origin") REFERENCES "ljacquardo"("id_origin") ON DELETE RESTRICT ON UPDATE CASCADE;

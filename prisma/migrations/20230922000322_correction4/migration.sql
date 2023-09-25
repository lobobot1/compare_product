-- DropIndex
DROP INDEX "ljacquards_id_similar_key";

-- AlterTable
CREATE SEQUENCE ljacquards_id_similar_seq;
ALTER TABLE "ljacquards" ALTER COLUMN "id_similar" SET DEFAULT nextval('ljacquards_id_similar_seq');
ALTER SEQUENCE ljacquards_id_similar_seq OWNED BY "ljacquards"."id_similar";

/*
  Warnings:

  - The primary key for the `nikeo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `brand` on the `nikeo` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `nikeo` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `nikeo` table. All the data in the column will be lost.
  - You are about to drop the column `ean` on the `nikeo` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `nikeo` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `nikeo` table. All the data in the column will be lost.
  - You are about to drop the column `ngp` on the `nikeo` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `nikeo` table. All the data in the column will be lost.
  - You are about to drop the column `sku` on the `nikeo` table. All the data in the column will be lost.
  - You are about to alter the column `SKU_fournisseur` on the `nikeo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9000)` to `VarChar(700)`.
  - You are about to alter the column `Ref_co` on the `nikeo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9000)` to `VarChar(700)`.
  - You are about to alter the column `column7` on the `nikeo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9000)` to `VarChar(700)`.
  - You are about to alter the column `Code_color` on the `nikeo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9000)` to `VarChar(700)`.
  - You are about to alter the column `Localisation_declinaison` on the `nikeo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9000)` to `VarChar(700)`.
  - You are about to alter the column `Size` on the `nikeo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9000)` to `VarChar(700)`.
  - You are about to alter the column `Label_NGP` on the `nikeo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9000)` to `VarChar(700)`.
  - You are about to alter the column `Code_Pivotal` on the `nikeo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9000)` to `VarChar(700)`.
  - You are about to alter the column `INPUT` on the `nikeo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9000)` to `VarChar(700)`.
  - You are about to drop the `nikes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_origin]` on the table `nikeo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_origin` to the `nikeo` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "nikeo_id_key";

-- AlterTable
ALTER TABLE "nikeo" DROP CONSTRAINT "nikeo_pkey",
DROP COLUMN "brand",
DROP COLUMN "color",
DROP COLUMN "description",
DROP COLUMN "ean",
DROP COLUMN "gender",
DROP COLUMN "id",
DROP COLUMN "ngp",
DROP COLUMN "reference",
DROP COLUMN "sku",
ADD COLUMN     "Brand" VARCHAR(700),
ADD COLUMN     "Color" VARCHAR(700),
ADD COLUMN     "Description" VARCHAR(700),
ADD COLUMN     "EAN" VARCHAR(700),
ADD COLUMN     "Gender" VARCHAR(700),
ADD COLUMN     "NGP" VARCHAR(120),
ADD COLUMN     "Reference" VARCHAR(700),
ADD COLUMN     "SKU" VARCHAR(700),
ADD COLUMN     "id_origin" INTEGER NOT NULL,
ALTER COLUMN "SKU_fournisseur" SET DATA TYPE VARCHAR(700),
ALTER COLUMN "ID_Produit" SET DATA TYPE VARCHAR(120),
ALTER COLUMN "Ref_co" SET DATA TYPE VARCHAR(700),
ALTER COLUMN "Family_ID" SET DATA TYPE VARCHAR(120),
ALTER COLUMN "column7" SET DATA TYPE VARCHAR(700),
ALTER COLUMN "Supplier_account" SET DATA TYPE VARCHAR(120),
ALTER COLUMN "Code_color" SET DATA TYPE VARCHAR(700),
ALTER COLUMN "Localisation_declinaison" SET DATA TYPE VARCHAR(700),
ALTER COLUMN "Size" SET DATA TYPE VARCHAR(700),
ALTER COLUMN "Label_NGP" SET DATA TYPE VARCHAR(700),
ALTER COLUMN "Code_Pivotal" SET DATA TYPE VARCHAR(700),
ALTER COLUMN "INPUT" SET DATA TYPE VARCHAR(700),
ADD CONSTRAINT "nikeo_pkey" PRIMARY KEY ("id_origin");

-- DropTable
DROP TABLE "nikes";

-- CreateTable
CREATE TABLE "maisono" (
    "id_origin" INTEGER NOT NULL,
    "Index" INTEGER NOT NULL,
    "Article_code" VARCHAR(900),
    "Product_ID" VARCHAR(120),
    "Family_ID" VARCHAR(120),
    "Reference" VARCHAR(700),
    "Supplier_account" VARCHAR(700),
    "Brand" VARCHAR(500),
    "Stock_code" VARCHAR(700),
    "Brand_reference" VARCHAR(700),
    "Reference_VP" VARCHAR(700),
    "EAN_UNITAIRE" VARCHAR(700),
    "EAN_code" VARCHAR(700),
    "Designation" VARCHAR(700),
    "Designation_VP" VARCHAR(700),
    "NGP" VARCHAR(700),
    "Year_of_reference" VARCHAR(120),
    "inputs" VARCHAR(700),

    CONSTRAINT "maisono_pkey" PRIMARY KEY ("id_origin")
);

-- CreateTable
CREATE TABLE "giottoo" (
    "id_origin" INTEGER NOT NULL,
    "BRAND" VARCHAR(200),
    "REFERENCE" VARCHAR(200),
    "EAN_UNITAIRE" VARCHAR(200),
    "DESIGNATION" VARCHAR(200),
    "PRICE_RRP" VARCHAR(200),

    CONSTRAINT "giottoo_pkey" PRIMARY KEY ("id_origin")
);

-- CreateTable
CREATE TABLE "ljacquardo" (
    "id_origin" INTEGER NOT NULL,
    "index" INTEGER NOT NULL,
    "Product_ID" VARCHAR(120),
    "Family_ID" VARCHAR(120),
    "Reference" VARCHAR(700),
    "Commercial_country" VARCHAR(20),
    "Supplier_account" VARCHAR(120),
    "Brand" VARCHAR(350),
    "Stock_code" VARCHAR(120),
    "Type_of_product" VARCHAR(350),
    "Reference_VP" VARCHAR(120),
    "EAN" VARCHAR(350),
    "Brand_designation" VARCHAR(600),
    "Color" VARCHAR(70),
    "Collection" VARCHAR(150),
    "Dimensions" VARCHAR(150),
    "Category" VARCHAR(150),
    "Sub_Category" VARCHAR(300),
    "NGP" VARCHAR(200),
    "Year_of_reference" VARCHAR(200),
    "Composition" VARCHAR(200),
    "Grammage" VARCHAR(200),
    "Washing_machine_conditions" VARCHAR(200),
    "Designation_VP" VARCHAR(200),

    CONSTRAINT "ljacquardo_pkey" PRIMARY KEY ("id_origin")
);

-- CreateTable
CREATE TABLE "lollipopo" (
    "id_origin" INTEGER NOT NULL,
    "Company" VARCHAR(200),
    "Brand" VARCHAR(200),
    "Storage_conditions" VARCHAR(200),
    "Reference_FNR_or_product_code" VARCHAR(200),
    "EAN_UC" VARCHAR(200),
    "Denomination_commerciale_UC" VARCHAR(200),
    "Weight_net_kg_ou_L" VARCHAR(200),

    CONSTRAINT "lollipopo_pkey" PRIMARY KEY ("id_origin")
);

-- CreateTable
CREATE TABLE "singero" (
    "id_origin" INTEGER NOT NULL,
    "Index" INTEGER NOT NULL,
    "Article_code" VARCHAR(500),
    "Product_ID" VARCHAR(500),
    "Family_ID" VARCHAR(500),
    "Reference" VARCHAR(500),
    "Supplier_account" VARCHAR(500),
    "Brand" VARCHAR(500),
    "Stock_code" VARCHAR(500),
    "Brand_reference" VARCHAR(500),
    "Reference_VP" VARCHAR(500),
    "EAN_UNITAIRE" VARCHAR(500),
    "EAN_code" VARCHAR(500),
    "Designation" VARCHAR(500),
    "Designation_VP" VARCHAR(500),
    "NGP" VARCHAR(500),
    "Year_of_reference" VARCHAR(500),
    "inputs" VARCHAR(500),

    CONSTRAINT "singero_pkey" PRIMARY KEY ("id_origin")
);

-- CreateIndex
CREATE UNIQUE INDEX "maisono_id_origin_key" ON "maisono"("id_origin");

-- CreateIndex
CREATE UNIQUE INDEX "giottoo_id_origin_key" ON "giottoo"("id_origin");

-- CreateIndex
CREATE UNIQUE INDEX "ljacquardo_id_origin_key" ON "ljacquardo"("id_origin");

-- CreateIndex
CREATE UNIQUE INDEX "lollipopo_id_origin_key" ON "lollipopo"("id_origin");

-- CreateIndex
CREATE UNIQUE INDEX "singero_id_origin_key" ON "singero"("id_origin");

-- CreateIndex
CREATE UNIQUE INDEX "nikeo_id_origin_key" ON "nikeo"("id_origin");

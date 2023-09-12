/*
  Warnings:

  - You are about to drop the column `Article_code` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Brand` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Brand_reference` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Designation_VP` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `EAN_UNITAIRE` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `EAN_code` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Family_ID` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Index` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `NGP` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Product_ID` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Reference` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Reference_VP` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Stock_code` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Supplier_account` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `Year_of_reference` on the `maisono` table. All the data in the column will be lost.
  - You are about to drop the column `inputs` on the `maisono` table. All the data in the column will be lost.
  - You are about to alter the column `Designation` on the `maisono` table. The data in that column could be lost. The data in that column will be cast from `VarChar(700)` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "maisono" DROP COLUMN "Article_code",
DROP COLUMN "Brand",
DROP COLUMN "Brand_reference",
DROP COLUMN "Designation_VP",
DROP COLUMN "EAN_UNITAIRE",
DROP COLUMN "EAN_code",
DROP COLUMN "Family_ID",
DROP COLUMN "Index",
DROP COLUMN "NGP",
DROP COLUMN "Product_ID",
DROP COLUMN "Reference",
DROP COLUMN "Reference_VP",
DROP COLUMN "Stock_code",
DROP COLUMN "Supplier_account",
DROP COLUMN "Year_of_reference",
DROP COLUMN "inputs",
ADD COLUMN     "Appellation" VARCHAR(200),
ADD COLUMN     "Area" VARCHAR(200),
ADD COLUMN     "Brand_to_integrate" VARCHAR(200),
ADD COLUMN     "Capacity_volume" VARCHAR(200),
ADD COLUMN     "Categorie_Alcool" VARCHAR(200),
ADD COLUMN     "Code_OP_reprise_PREVIEW" VARCHAR(200),
ADD COLUMN     "Code_Stock_PIV" VARCHAR(200),
ADD COLUMN     "Color" VARCHAR(200),
ADD COLUMN     "Compte_fournisseur" VARCHAR(200),
ADD COLUMN     "DECOMPO" VARCHAR(200),
ADD COLUMN     "DET_FdP" VARCHAR(200),
ADD COLUMN     "DET_GEO" VARCHAR(200),
ADD COLUMN     "Degree_of_alcohol" VARCHAR(200),
ADD COLUMN     "Designation_N_1" VARCHAR(200),
ADD COLUMN     "EAN" VARCHAR(200),
ADD COLUMN     "Equipe" VARCHAR(200),
ADD COLUMN     "Famille" VARCHAR(200),
ADD COLUMN     "FamilyId_reprise" VARCHAR(200),
ADD COLUMN     "FamilyId_reprise_PREVIEW" VARCHAR(200),
ADD COLUMN     "GENCOD_Lot" VARCHAR(200),
ADD COLUMN     "ID_de_DUPLI_FdP" VARCHAR(200),
ADD COLUMN     "ID_de_DUPLI_GEO" VARCHAR(200),
ADD COLUMN     "Marque" VARCHAR(200),
ADD COLUMN     "NGP_Nom_Generique_Produit" VARCHAR(200),
ADD COLUMN     "Nomenclature_Douaniere" VARCHAR(200),
ADD COLUMN     "Presence_CRD_sur_les_bouteilles" VARCHAR(200),
ADD COLUMN     "Production" VARCHAR(200),
ADD COLUMN     "Rayon" VARCHAR(200),
ADD COLUMN     "Secteur" VARCHAR(200),
ADD COLUMN     "Sommelier" VARCHAR(200),
ADD COLUMN     "Statut_fiscal" VARCHAR(200),
ADD COLUMN     "Type_de_lot" VARCHAR(200),
ADD COLUMN     "Typologie_de_lot" VARCHAR(200),
ADD COLUMN     "Vintage_year" VARCHAR(200),
ALTER COLUMN "Designation" SET DATA TYPE VARCHAR(200);

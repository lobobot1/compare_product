-- CreateTable
CREATE TABLE "nikeo" (
    "id" SERIAL NOT NULL,
    "SKU_fournisseur" VARCHAR(9000),
    "sku" VARCHAR(9000),
    "ID_Produit" INTEGER,
    "ean" VARCHAR(9000),
    "Ref_co" VARCHAR(9000),
    "Family_ID" INTEGER,
    "column7" VARCHAR(9000),
    "Supplier_account" INTEGER,
    "brand" VARCHAR(9000),
    "reference" VARCHAR(9000),
    "description" VARCHAR(9000),
    "color" VARCHAR(9000),
    "Code_color" VARCHAR(9000),
    "Localisation_declinaison" VARCHAR(9000),
    "Size" VARCHAR(9000),
    "ngp" INTEGER,
    "Label_NGP" VARCHAR(9000),
    "gender" VARCHAR(9000),
    "Code_Pivotal" VARCHAR(9000),
    "INPUT" VARCHAR(9000),

    CONSTRAINT "nikeo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nikes" (
    "id_origin" INTEGER,
    "id_alternative" INTEGER NOT NULL,
    "id_status" INTEGER,
    "size" VARCHAR(50),
    "request_payload" VARCHAR(64),
    "url" VARCHAR(128),
    "name" VARCHAR(128),
    "website_sku" VARCHAR(50),
    "color" VARCHAR(64),
    "pictures_url" VARCHAR(512),
    "exit_code" INTEGER,
    "netprice_sku" REAL,
    "brutprice_sku" REAL,
    "discount" REAL,
    "promo_code" VARCHAR(50),
    "odr" VARCHAR(50),
    "cashback" VARCHAR(50),
    "gift" VARCHAR(50),
    "delivery_time" VARCHAR(50),
    "extra_jump_index" INTEGER,
    "shipping_fees" INTEGER,
    "seller_name" VARCHAR(50),
    "prices_currency" VARCHAR(50),
    "website_sku2" VARCHAR(50),
    "color_idx" INTEGER,
    "size_idx" INTEGER,
    "long_description_1" VARCHAR(50),

    CONSTRAINT "nikes_pkey" PRIMARY KEY ("id_alternative")
);

-- CreateIndex
CREATE UNIQUE INDEX "nikeo_id_key" ON "nikeo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "nikes_id_alternative_key" ON "nikes"("id_alternative");

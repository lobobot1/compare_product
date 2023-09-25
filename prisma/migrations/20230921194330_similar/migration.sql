-- CreateTable
CREATE TABLE "ljacquards" (
    "id_origin" INTEGER NOT NULL,
    "id_similar" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "request_payload" VARCHAR(200),
    "url" VARCHAR(200),
    "name" VARCHAR(200),
    "collection" VARCHAR(200),
    "website_sku" VARCHAR(200),
    "color" VARCHAR(200),
    "pictures_url" VARCHAR(300),
    "exit_code" INTEGER NOT NULL,
    "netprice_sku" DOUBLE PRECISION NOT NULL,
    "brutprice_sku" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "delivery_time" VARCHAR(200),
    "extra_jump_index" INTEGER NOT NULL,
    "shipping_fees" DOUBLE PRECISION NOT NULL,
    "seller_name" VARCHAR(200),
    "prices_currency" VARCHAR(200),
    "color_idx" INTEGER NOT NULL,
    "size_idx" INTEGER NOT NULL,
    "long_description_1" VARCHAR(500),
    "brand" VARCHAR(200),
    "Type_of_product" VARCHAR(200),
    "ean" VARCHAR(200),
    "dimensions" VARCHAR(200),
    "composition" VARCHAR(200),

    CONSTRAINT "ljacquards_pkey" PRIMARY KEY ("id_similar")
);

-- CreateIndex
CREATE UNIQUE INDEX "ljacquards_id_similar_key" ON "ljacquards"("id_similar");

import { prisma } from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const dictionaryOrigin = {
  nikeo: {
    Brand: true,
    Description: true,
    Color: true,
    Gender: true,
    Size: true,
  },
  giottoo: {
    BRAND: true,
    DESIGNATION: true,
  },
  lollipopo: {
    Brand: true,
    Denomination_commerciale_UC: true,
    Weight_net_kg_ou_L: true,
  },
  ljacquardo: {
    Brand: true,
    Type_of_product: true,
    Color: true,
    Dimensions: true,
  },
  singero: {
    Brand: true,
    Reference: true,
    Designation: true,
  },
  maisono: {
    Brand_to_integrate: true,
    Designation: true,
    Area: true,
    Appellation: true,
    Color: true,
    Capacity_volume: true,
    Vintage_year: true,
  },
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const origin = req.nextUrl.searchParams.get("origin");

  const id = Number(req.nextUrl.searchParams.get("id_origin"));

  const id_origin = Number.isNaN(id) ? null : id;

  if (!origin || !id_origin)
    return NextResponse.json({ error: "No origin provided" }, { status: 400 });

  const value: Object = dictionaryOrigin[origin];

  if (!value)
    return NextResponse.json({ error: "Origin not found" }, { status: 404 });

  const originData = await prisma[origin].findUnique({
    where: {
      id_origin: id_origin,
    },
    select: value,
  });

  if (!originData)
    return NextResponse.json({ error: "Origin not found" }, { status: 404 });

  return NextResponse.json(
    {
      data: originData,
      message: "Origin found",
      ok: true,
    },
    {
      status: 200,
      statusText: "OK",
    }
  );
}

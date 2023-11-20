import { prisma } from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const dictionarySimilar = {
  nikes: {
    Brand: true,
    Description: true,
    Color: true,
    Gender: true,
    Size: true,
  },
  ljacquards: {
    id_origin: true,
    id_similar: true,
    brand: true,
    Type_of_product: true,
    color: true,
    dimensions: true,
    status: true,
  },
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const similar = req.nextUrl.searchParams.get("similar");

  const pagination = Number(req.nextUrl.searchParams.get("pagination"));

  if (!similar)
    return NextResponse.json({ error: "No similar provided" }, { status: 400 });

  const value: Object = dictionarySimilar[similar];

  if (!value)
    return NextResponse.json({ error: "Similar not found" }, { status: 404 });
  
  if(!await prisma[similar])
    return NextResponse.json({ error: "Similar not found" }, { status: 404 });

  const [similarData] = await prisma[similar].findMany({
    skip: pagination - 1,
    take: 1,
    select: value,
  });

  if (!similarData)
    return NextResponse.json({ error: "Similar not found" }, { status: 404 });

  return NextResponse.json(
    {
      data: similarData,
      message: "Similar found",
      ok: true,
    },
    {
      status: 200,
      statusText: "OK",
    }
  );
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();

  const { similarID, status, similar } = body;

  if (!similarID || !Number.isFinite(status) || !similar)
    return NextResponse.json({ error: "No similar provided" }, { status: 400 });

  const updatedSimilar = await prisma[similar].update({
    where: {
      id_similar: similarID,
    },
    data: {
      status: status,
    },
  });

  if (!updatedSimilar)
    return NextResponse.json({ error: "Similar not found" }, { status: 404 });

  return NextResponse.json(
    {
      data: body,
      message: "Similar updated",
      ok: true,
    },
    {
      status: 201,
      statusText: "OK",
    }
  );
}

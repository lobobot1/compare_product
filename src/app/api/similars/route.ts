import { prisma } from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface params {
  similar: string;
  status: number;
  similarID: number;
}

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
    where: {
      OR:[
        {
          AND:[
            {
              status: {
                gt: 0,
              }
            },
            {
              updated_at: {
                gte: new Date(new Date().getDate()-1)
              }
            }
          ]
        },
        {
          AND:[
            {
              status: 0
            },
            {
              updated_at: {
                gte: new Date()
              }
            }
          ]
        }
      ]
    },
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

  const { similarID, status, similar }:params = body;

  if (!similarID || !Number.isFinite(status) || !similar)
    return NextResponse.json({ error: "No similar provided" }, { status: 400 });

  const updatedSimilar:Object = await prisma[similar].update({
    where: {
      id_similar: similarID,
    },
    data: {
      status: status,
      updated_at: new Date(),
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

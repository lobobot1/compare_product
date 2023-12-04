import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const similar:string = req.nextUrl.searchParams.get("similar");

  if (!similar)
    return NextResponse.json({ error: "No similar provided" }, { status: 400 });

  const total = await prisma[similar]?.count({
    where: {
      status: 0,
    },
  });

  if (!total)
    return NextResponse.json({ error: "Similar not found" }, { status: 404 });

  return NextResponse.json(
    {
      data: total,
      message: "Total found",
      ok: true,
    },
    {
      status: 200,
      statusText: "OK",
    }
  );
}

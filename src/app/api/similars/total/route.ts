import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const similar = req.nextUrl.searchParams.get("similar");

  if (!similar)
    return NextResponse.json({ error: "No similar provided" }, { status: 400 });

  const total = await prisma[similar].count();

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

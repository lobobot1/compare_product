import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: data.email,
          },
          {
            username: data.username,
          },
        ],
      },
    });
    if (user) {
      return NextResponse.json(
        { message: "user already exists" },
        { status: 400 }
      );
    }
    data.password = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.user.create({
      data:{
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password,
      },
    });
    delete newUser.password;
    console.log(newUser);
    return NextResponse.json(newUser);
}

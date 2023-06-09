

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const res = await request.json() // res now contains body

    console.log(request)
    console.log("req")

    const newUser = await prisma.user.create({
      data: {
        username: res.username,
        email: res.email,
        password: res.password,
      },
    });


    return NextResponse.json(newUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({err: "error"});
  }
}


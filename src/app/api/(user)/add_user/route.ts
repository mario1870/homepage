

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function postHandler(req: NextRequest) {
  try {
    const bodyText = await req.text(); // Body des Requests als Text lesen
    const { username, email, password } = JSON.parse(bodyText); // Text als JSON parsen


    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({err: "error"});
  }
}

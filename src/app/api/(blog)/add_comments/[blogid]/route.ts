

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";
import { useRouter } from "next/router";

export async function POST(request: Request) {
  try {

    const res = await request.json()

    const newComment= await prisma.comment.create({
      data: {
        content: res.content,
        authorId: res.authorId,
        blogpostId: 12303,
      },
    });


    return NextResponse.json(newComment);
  } catch (error) {
    console.error(error);
    return NextResponse.json({err: "error"});
  }
}


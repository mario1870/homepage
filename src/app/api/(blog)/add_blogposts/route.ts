

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const res = await request.json()

    const newBlogpost = await prisma.blogpost.create({
      data: {
        title: res.title,
        content: res.content,
        published: true,
        authorId: 1, 
      },
    });


    return NextResponse.json(newBlogpost);
  } catch (error) {
    console.error(error);
    return NextResponse.json({err: "error"});
  }
}


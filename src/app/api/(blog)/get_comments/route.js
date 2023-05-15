


import { NextResponse } from "next/server"
import { prisma } from "../../../../../lib/prisma"

export async function GET(){

  const comments = await prisma.comment.findMany()

  return NextResponse.json(comments)
}



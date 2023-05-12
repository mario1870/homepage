


import { NextResponse } from "next/server"
import { prisma } from "../../../../../lib/prisma"

export async function GET(){

  const posts = await prisma.Blogpost.findMany()

  return NextResponse.json(posts)
}




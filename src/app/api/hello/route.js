
import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth"

export async function GET(){

  const posts = await prisma.post.findMany()

  return NextResponse.json(data)
}







import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth"
import { prisma } from "../../../../../lib/prisma"

export async function GET(){

  const posts = await prisma.Blogpost.findMany()

  return NextResponse.json(posts)
}




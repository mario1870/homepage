


import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth"
import { prisma } from "../../../../../lib/prisma"

export async function POST(){

  await prisma.blogpost.create({
    data: {
      title: 'Alice',
      content: 'alice@prisma.io',
      published: true,
      authorId: 122131,
    },
  })

  return NextResponse.json({message: "okok"})
}





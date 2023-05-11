

import { getServerSession } from 'next-auth';
import { prisma } from "../../../../lib/prisma"
import { NextResponse } from "next/server"

export async function GET(){

  await prisma.user.create({

    data: {
      title: 'Alice',
      content: 'alice@prisma.io',
      authorId: "234"
    },
  })
  
    return NextResponse.json({message: "ok"})
  }
  
  
  
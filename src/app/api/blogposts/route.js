

import { getServerSession } from 'next-auth';
import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'


export async function POST(){

    const prisma = new PrismaClient()
    const { username, email, password } = req.body
  
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    })
  
    res.status(201).json(newUser)
  
    return NextResponse.json(users)
  }
  
  
  
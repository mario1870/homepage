
import { getServerSession } from 'next-auth';
import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'


export async function GET(){

  const prisma = new PrismaClient()

  const data = [
    {headline: "Coming Soon", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming Son", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming Sn", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming S", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming Soon", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming Son", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming Sn", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming S", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming", text:"", image: "/coming_soon.jpg"},
  ];

  const users = await prisma.user.findMany()

  return NextResponse.json(data)
}




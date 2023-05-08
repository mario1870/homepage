
import { getServerSession } from 'next-auth';
import { NextResponse } from "next/server"

export async function GET(){

  const data = [
    {headline: "Coming Soon", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming Son", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming Sn", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming S", text:"", image: "/coming_soon.jpg"},
    {headline: "Coming", text:"", image: "/coming_soon.jpg"}
  ];

  return NextResponse.json(data)
}





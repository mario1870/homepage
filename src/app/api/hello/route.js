
import { getServerSession } from 'next-auth';
import { NextResponse } from "next/server"

export async function GET(){

  

  return NextResponse.json({message: "Hallo"})
}





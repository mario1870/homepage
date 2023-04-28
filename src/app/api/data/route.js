
import mysql from 'mysql';
import { NextResponse } from 'next/server';


  const connection = mysql.createConnection({
    host: "34.107.29.34",
    user: 'test',
    password: 'IdEseB.345',
    database: 'data'
  });
  
  connection.connect((err) =>{
    if (err) {
      console.log("ERROR" + err.stack)
    }
    console.log("Connected" + connection.threadId)
  })


export async function GET() {

  const data = {"pogger": "poggera"};

  return NextResponse.json({ data })
}

"use client"
import { Inter } from 'next/font/google'
import Startpage from "./components/Startpage/startpage"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <div className='startpage'>
        <Startpage />
      </div>
    </>
  )
}

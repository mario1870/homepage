"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion";
import Image from "next/image";
import { Suspense } from 'react';
import Loading_articles_preview from "./loading"

export default function Articles_preview(){

  const [isLoading, setIsLoading] = useState(true);

  // fetch data for the small blog items
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/hello')
      const json = await response.json()
      setData(json)
      setIsLoading(false);
    }
    fetchData()
  }, [])


  return(
    <>
    {isLoading ? (<Loading_articles_preview />) : (
      data.map((item, index) => (
        <div key={index} className="blog_page_all_articles_article">
          <h3>
            {item.headline}
          </h3>
          <p>
            {index}
          </p>
          <Image className="blog_page_all_articles_box_image" src={item.image} width={100} height={100} alt="refresh to load" />
        </div>
      ))     
    )}


    </>
  )
}
"use client"

import { useState, useEffect } from "react"
import Image from "next/image";
import Article_preview_skeleton from "./(loadingUI)/article_preview_skeleton"
import "./articles_preview.scss"
import Link from "next/link";


export default function Articles_preview(){

  // get Loadingstate
  const [isLoading, setIsLoading] = useState(true);
  
  // set default shown Articles to the last 6
  const [shownArticles, setShownArticles] = useState(6)

  // fetch data for the small blog items
  const [data, setData] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/get_blogposts')
      const json = await response.json()
      setData(json)
      setIsLoading(false);
    }
    fetchData()
  }, [])
  
  useEffect(() => {
    // aktualisiere data mit der neuen Anzahl an gezeigten Artikeln
    setData(data.slice(-shownArticles));
  }, [shownArticles]);


  return(
    <>
    {isLoading ? (<Article_preview_skeleton />) : (
      <div className="w-screen flex justify-center mt-0">
        <div className="blog_page_all_articles_box">


        {data.slice(-shownArticles).reverse().map((item, index) => (
          <Link href={"/blog/blogposts/" + item.id} key={index} className="w-full">
            <div  className="bg-white h-fit rounded-2xl flex justify-between flex-col md:flex-row-reverse min-w-min mx-3 hover:shadow hover:shadow-white">
              
            <span className="w-full h-full rounded-2xl p-5">
                <Image className="blog_page_all_articles_box_image" src="/coming_soon.jpg" width={100} height={100} alt={item.title} />
              </span>

              <span className="w-full h-full rounded-2xl px-10 pb-5 flex flex-col md:pt-5">
                <h3 className="text-center text-xl font-bold py-2 w-full text-black">{item.title}</h3>
                <p className="text-center leading-7 h-28 overflow-hidden relative text-lg text-black" id="blog_page_all_articles_article_span_p">{item.content}</p>              
              </span>

            </div>
          </Link>
        ))}

        </div>
      </div>
    )}
    
    <div className="blog_page_all_articles_loadingbutton"> 
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Mehr laden
      </button>
    </div>  
    </>
  )
}




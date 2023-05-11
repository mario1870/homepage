"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion";
import Image from "next/image";
import { Suspense } from 'react';
import Article_preview_skeleton from "./article_preview_skeleton"
import "./articles_preview.scss"
import LoadMoreButton from "../(load_more_button)/load_more"

export default function Articles_preview(){

  // get Loadingstate
  const [isLoading, setIsLoading] = useState(true);
  
  const [shownArticles, setShownArticles] = useState(6)

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
  
  useEffect(() => {
    // aktualisiere data mit der neuen Anzahl an gezeigten Artikeln
    setData(data.slice(-shownArticles));
  }, [shownArticles]);


  return(
    <>
    {isLoading ? (<Article_preview_skeleton />) : (
      <div className="blog_page_all_articles">
        <div className="blog_page_all_articles_box">

        {data.slice(-shownArticles).map((item, index) => (
          <div key={index} className="blog_page_all_articles_article">
            <span className="blog_page_all_articles_article_span">
              <h3 className="blog_page_all_articles_article_headline">{item.headline}</h3>
              <p className="blog_page_all_articles_article_span_p">{index}</p>              
            </span>

            <span className="blog_page_all_articles_article_spanimg">
              <Image className="blog_page_all_articles_box_image" src={item.image} width={100} height={100} alt="refresh to load" />
            </span>
          </div>
        ))}

        </div>
      </div>
    )}
                <div className="blog_page_all_articles_loadingbutton"> 
                <LoadMoreButton onClick={() => setShownArticles(shownArticles + 4)} />
                </div>  
    </>
  )
}




"use client"
import Image from "next/image"
import "./blog_featured_article.scss"
import { useState, useEffect } from "react"
import Article_preview_skeleton from "./blog_featured_article_skeleton"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Blog_featured_article(props){

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
        {isLoading ? (<Article_preview_skeleton />) : (
        <div className="blog_page_featured_article" >
            <div className="blog_page_featured_article_box"  style={{ backgroundColor: "white", borderRadius: "2rem"}}>
                <div className="skeleton_layout" style={{ height:"30rem", borderRadius: "2rem", width:"95vw", height: "100%"}}>
                    <div className="blog_page_featured_article_image">
                        <Image src="/google.webp" className="skeleton_image" width={1200} height={1200} alt="Reload please :D" />
                    </div>
                    <div className="blog_page_featured_article_textbox" >
                        <div className="skeleton_textbox" >
                            <span className="skeleton_textbox_headline" style={{ height: "50%"}} >
                                <h1 style={{ fontSize: "8rem", textAlign: "center"}}>HEADLINE</h1>
                            </span>
                            <span style={{ height: "50%"}}>
                                <Skeleton className="skeleton_textbox_headline_text_lines" width={"95%"} count={3} />
                                <Skeleton className="skeleton_textbox_headline_text_lines_big" width={"95%"} count={3} />
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )}
    </>
    )
}


{/*        <div className="blog_page_featured_article" >
            <div className="blog_page_featured_article_box"  style={{ backgroundColor: "white", borderRadius: "2rem", height:"30rem", borderRadius: "2rem", width:"95vw"}}>

                    <Image src="/google.webp" className="blog_page_featured_article_image" style={{ height: "20rem", borderRadius: "2rem", margin: "1rem", width: "calc(95vw - 2rem)"}} width={1200} height={1200} />

                    <div className="blog_page_featured_article_textbox" style={{ position: "relative", padding: "0rem", width:"95vw", margin: "0", backgroundColor: "transparent"}}>
                        <div style={{ width: "100%", paddingTop: "1.2rem", paddingLeft: "1rem", paddingRight: "1rem"}}>
                            <Skeleton  width={"95%"} height={"1.2rem"} count={3} style={{ display:"flex", margin: "auto"}}/>
                        </div>
                    </div>
                    
            </div>
        </div>*/}
"use client"
import Image from "next/image"
import "./blog_featured_article.scss"

export default function Blog_featured_article(props){
    return(
        
        <div className="blog_page_featured_article">
        <div className="blog_page_featured_article_box">
            <Image src="/google.webp" width="1200" height="1200" className="blog_page_featured_article_image" />
            <div className="blog_page_featured_article_textbox">

                <h1>{props.headline}</h1>
                <h3>Einführung</h3>
                <h3>Pfeil</h3>
            </div>
        </div>
    </div>
    )
}

"use client"
import "./blog.scss"
import { useSelector, useDispatch } from 'react-redux';
import Image from "next/image";
import Blog_featured_article from "./blog_featured_article"

export default function Blog(){

    const language = useSelector(state => state.language.value);

    return (
        <>
            <div className="blog_page">
                <div className="blog_page_header">
                    <div className="blog_page_header_box"> 
                        <div className="blog_page_header_firstline"><p>BLOG VON MARIO</p><p>FOLGE MIR</p></div>
                        <div className="blog_page_header_headline">HEADLINE</div>
                        <div className="blog_page_header_subheadline">SUBHEADLINE</div>
                    </div>
                </div>

                <Blog_featured_article headline="HEAD" />

                <div className="blog_page_all_articles">
                    <div className="blog_page_all_articles_box">
                        <div className="blog_page_all_articles_article">a</div>
                        <div className="blog_page_all_articles_article">a</div>
                        <div className="blog_page_all_articles_article">a</div>
                        <div className="blog_page_all_articles_article">a</div>
                        <div className="blog_page_all_articles_article">a</div>
                        <div className="blog_page_all_articles_article">a</div>
                    </div>

                </div>                    
                <div className="blog_page_all_articles_loadingbutton"> <button>Load more</button> </div>  
            </div>
        </>
    )
}
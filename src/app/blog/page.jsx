"use client"
import "./blog.scss"
import { useSelector, useDispatch } from 'react-redux';
import Image from "next/image";
import Blog_featured_article from "./blog_featured_article"
import FollowMe from "./follow_me_section"
import { data_blog } from "../../../data/data_blog"

export default function Blog(){

    const language = useSelector(state => state.language.value);

    console.log(data_blog);


    return (
        <>
            <div className="blog_page">
                <div className="blog_page_header">
                    <div className="blog_page_header_box"> 
                        <div className="blog_page_header_firstline"><p>BLOG VON MARIO</p><FollowMe /></div>
                        <div className="blog_page_header_headline">HEADLINE</div>
                        <div className="blog_page_header_subheadline">SUBHEADLINE</div>
                    </div>
                </div>

                <Blog_featured_article headline="HEAD" />

                <div className="blog_page_all_articles">
                    <div className="blog_page_all_articles_box">

                    {data_blog.map((item, index) => (
                        <div className="blog_page_all_articles_article"><h3>{item.headline}</h3><p>{item.text}</p><Image className="blog_page_all_articles_box_image" src={item.image} width={100} height={100} /></div>
                    ))}
                    </div>

                </div>                    
                <div className="blog_page_all_articles_loadingbutton"> <button>Load more</button> </div>  
            </div>
        </>
    )
}
"use client"
import "./blog.scss"
import { useSelector, useDispatch } from 'react-redux';
import Image from "next/image";
import Blog_featured_article from "./(featured_article)/blog_featured_article"
import FollowMe from "./follow_me_section"
import { data_blog } from "../../../data/data_blog"
import LoadMoreButton from "./(load_more_button)/load_more"

export default function Blog(){

    const language = useSelector(state => state.language.value);



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
                <div className="blog_page_all_articles_loadingbutton"> 
                <LoadMoreButton />
                </div>  
            </div>
        </>
    )
}
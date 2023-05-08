"use client"
import "./blog.scss"
import { useSelector, useDispatch } from 'react-redux';
import Blog_featured_article from "./(featured_article)/blog_featured_article"
import FollowMe from "./follow_me_section"
import LoadMoreButton from "./(load_more_button)/load_more"
import Articles_preview from "./articles_preview/articles_preview"
import Footer from "../components/footer/footer"

export default function Blog(){

    const language = useSelector(state => state.language.value);

    

    return (
        <>
            <div className="blog_page">
                <div className="blog_page_header">
                    <div className="blog_page_header_box"> 
                        <div className="blog_page_header_firstline"><p>{language === "german" ? "MEIN BLOG" : "MY BLOG"}</p><FollowMe /></div>
                        <div className="blog_page_header_headline">HEADLINE</div>
                        <div className="blog_page_header_subheadline">SUBHEADLINE</div>
                    </div>
                </div>

                <Blog_featured_article headline="HEAD" />

 
                <Articles_preview />

                   
                <div className="blog_page_all_articles_loadingbutton"> 
                    <LoadMoreButton />
                </div>  

                <Footer />
            </div>
        </>
    )
}
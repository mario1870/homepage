"use client"
import "./blog.scss"
import { useSelector, useDispatch } from 'react-redux';
import Blog_featured_article from "./components/(featured_article)/blog_featured_article"
import FollowMe from "./components/(featured_article)/follow_me_section"
import Articles_preview from "./articles_preview/articles_preview"
import Footer from "../../components/footer/footer"

export default function Blog(){

    const language = useSelector(state => state.language.value);

    

    return (
        <>
            <div className="blog_page bg-blue-200 dark:bg-black">
                <div className="blog_page_header">
                    <div className="blog_page_header_box"> 
                        <div className="blog_page_header_firstline text-black dark:text-white"><p>{language === "german" ? "MEIN BLOG" : "MY BLOG"}</p><FollowMe /></div>
                        <div className="blog_page_header_headline text-black dark:text-white">HEADLINE</div>
                        <div className="blog_page_header_subheadline text-black dark:text-white">SUBHEADLINE</div>
                    </div>
                </div>
                <Blog_featured_article headline="HEAD" />
                <Articles_preview />
                <Footer />
            </div>
        </>
    )
}
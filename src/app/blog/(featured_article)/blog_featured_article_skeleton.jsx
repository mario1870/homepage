
"use client"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./blog_featured_article_skeleton.scss"
import "./blog_featured_article.scss"

const Blog_featured_article_skeleton = ({ amount }) => {


  return (
    <div className="blog_page_featured_article" >
        <div className="blog_page_featured_article_box"  style={{ backgroundColor: "white", borderRadius: "2rem"}}>
            <div className="skeleton_layout" style={{ height:"30rem", borderRadius: "2rem", width:"95vw", height: "100%"}}>
                <div className="blog_page_featured_article_image">
                    <Skeleton className="skeleton_image" borderRadius={"2rem"} />
                </div>
                <div className="blog_page_featured_article_textbox" >
                    <div className="skeleton_textbox" >
                        <span className="skeleton_textbox_headline" style={{ height: "50%"}} >
                            <Skeleton width={"95%"} height={"50%"} count={1} style={{ display:"flex", margin: "auto", position: "relative", borderRadius: "2rem"}}/> 
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
)
};

export default Blog_featured_article_skeleton;

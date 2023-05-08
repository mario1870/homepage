
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Article_preview_skeleton = ({ amount }) => {

  return (
    <div className="blog_page_all_articles">
        <div className="blog_page_all_articles_box">

        {Array.from({length: 6}).map((_, index) => (
        <div key={index} className="blog_page_all_articles_article" style={{ display: "flex", justifyContent: "space-between", padding: "1rem"}}>
            <Skeleton  width={"15rem"} height={"1.2rem"} count={6} style={{ marginLeft: "0rem", display:"flex"}}/>
            <Skeleton width={"20rem"} height={"100%"} borderRadius={10} style={{ height: "100%" }}/>
        </div>
        ))}

        </div>
    </div>
)
};

export default Article_preview_skeleton;

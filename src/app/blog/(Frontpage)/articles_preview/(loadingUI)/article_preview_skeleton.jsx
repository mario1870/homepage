
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Article_preview_skeleton = ({ amount }) => {

  return (
    <div className="blog_page_all_articles">
        <div className="blog_page_all_articles_box">

        {Array.from({length: 6}).map((_, index) => (
        <div key={index} className="blog_page_all_articles_article" style={{ display: "flex", justifyContent: "space-between", padding: "1rem"}}>
            <div style={{ width: "40%", paddingTop: "1.2rem", paddingLeft: "1rem", paddingRight: "1rem"}}>
                <Skeleton  width={"100%"} height={"1.2rem"} count={5} style={{ display:"flex", margin: "auto"}}/>
            </div>
            <div style={{ width: "60%", padding: "1rem", height:"100%"}}>
                <Skeleton width={"100%"} height={"100%"} borderRadius={10} style={{ height: "100%" }}/>
            </div>
        </div>
        ))}

        </div>
    </div>
)
};

export default Article_preview_skeleton;

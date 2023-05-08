import { motion } from "framer-motion";
import Image from "next/image"
import "./blog_featured_article.scss"

export default function Blog_featured_article(props){
    return(
        
        <motion.div className="blog_page_featured_article" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <div className="blog_page_featured_article_box">
            <Image src="/google.webp" width="1200" height="1200" alt="refresh please" className="blog_page_featured_article_image" />

            <motion.div className="blog_page_featured_article_textbox" initial={{  opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                <h1>{props.headline}</h1>
                <h3>Einführung</h3>
                <h3>Pfeil</h3>
            </motion.div>

        </div>
    </motion.div>
    )
}
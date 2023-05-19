import { motion } from "framer-motion"
import Link from "next/link"

export default function BlogResumeSection(){
    return(
        <div className="flex justify-center mt-12 md:mt-32 flex-col md:flex-row md:mx-32">
            <motion.div className="w-40 md:w-56 text-center border border-black mx-10 dark:border-white"   initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay:0.2 }}>
                <Link href={"/cv"}>
                    <h3 className="p-1">Resume</h3>
                </Link>
            </motion.div>
            <motion.div className="w-40 md:w-56 text-center border border-black mx-10 mt-3 md:mt-0 dark:border-white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Link href={"/blog"}>
                    <h3 className="p-1">Blog</h3>
                </Link>
            </motion.div> 
        </div>
    )
}
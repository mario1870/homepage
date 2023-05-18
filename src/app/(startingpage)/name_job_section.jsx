import { motion } from "framer-motion"
import Link from "next/link"

export default function NameJobSection(){
    return (
        <div className="md:h-3/5 bg-white dark:bg-gray-800 pb-10">
            <h1 className="w-full text-6xl your-element p-10 pt-20 text-center md:text-left dark:text-white">Mario Raach</h1>
            <h3 className="w-full text-3xl px-10 text-center md:text-left font-semibold dark:text-white">Industriekaufmann &<br/>Software Developer</h3>

            <motion.div className="w-56 text-center border border-black mx-auto mt-10 md:my-0 md:absolute bottom-10 left-10 dark:border-white">
                <Link href={"/contact"}>
                    <motion.h3  whileHover={{ backgroundColor: "black", color: "white" }} className="p-5 text-lg dark:text-white">Kontaktiere mich</motion.h3>
                </Link>
            </motion.div> 
            
        </div>
    )
}
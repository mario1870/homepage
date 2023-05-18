"use client"
import Image from "next/image"
import { startpage_data } from "../../../data/startpage_data"
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion"
import Link from "next/link";
import Footer from "../components/footer/footer";
import ImageSection from "./image_section"
import NameJobSection from "./name_job_section"

export default function Startpage(){

    const language = useSelector(state => state.language.value);
    const text_deutsch = startpage_data.text_deutsch
    const text_english = startpage_data.text_english

    const icon_dimensions = 50

    return(
        <>
        <div className="bg-blue-100 dark:bg-black pt-20 md:pt-20 w-screen h-screen flex flex-col md:flex-row" >

            <div className="md:w-2/6">
                <ImageSection />
                <NameJobSection />
            </div>


            <div className="h-full text-4xl font-bold leading-snug text-gray-700 bg-blue-200 pb-12 wow fadeInUp animated md:w-4/6 dark:bg-black">
                    <div className="">
                        <motion.div className="p-3 md:p-12 mx-10 md:mx-10 pt-12 md:pt-36 md:mx-32 border-b border-black your-element dark:border-white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <motion.p initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }} className="text-left italic dark:text-white text-2xl md:text-7xl">About Me</motion.p>
                        </motion.div>
                        <motion.div className="flex justify-center mt-2 md:mt-10" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }}>
                            <p className="w-full px-12 md:px-32 text-left italic text-base md:text-2xl dark:text-white" >{language === "german" ? text_deutsch.text : text_english.second}</p>
                        </motion.div>

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

                        <div className="justify-end w-full px-20 hidden md:flex md:absolute bottom-10 right-0">
                            <motion.div className="px-5" whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}>
                                <Link className="" href="https://www.linkedin.com/in/mario-r-b88950238" ><Image src="/icons/linkedin.png" width={icon_dimensions} height={icon_dimensions} alt="Github" loading="lazy" /></Link>
                            </motion.div>
                            <motion.div className="px-5" whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}>
                                <Link className="" href="https://github.com/mario1870"><Image src="/icons/github.png" width={icon_dimensions} height={icon_dimensions} alt="Github" loading="lazy" /></Link>
                            </motion.div>
                        </div>

                    </div>
            </div>
            <div className="bg-black md:hidden">
           <Footer />                
            </div>
 
        </div>

        </>
    )
}



"use client"
import Image from "next/image"
import { startpage_data } from "../../../data/startpage_data"
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion"

export default function Startpage(){

    const language = useSelector(state => state.language.value);
    const text_deutsch = startpage_data.text_deutsch
    const text_english = startpage_data.text_english

    return(
        <>
        <div className="bg-blue-100 dark:bg-black pt-32 md:pt-20 w-screen h-screen flex flex-col md:flex-row" >

            <div className="md:w-2/6">
                <div className=" md:h-2/5 bg-slate-600">
                    <Image src="/startpage_images/mario.png" width={400} height={700} alt="Mario" className="img-fluid mx-auto w-56 md:w-auto h-fit" />                
                </div>
                <div className="md:h-3/5 bg-slate-300">

                </div>
            </div>


            <div className="h-full text-4xl font-bold leading-snug text-gray-700 mb-10 wow fadeInUp animated md:w-4/6">
                <div className="">
                    <div className="">
                        <motion.div className="py-10" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }}>
                            <p className="text-center italic dark:text-white px-12 md:px-20 text-2xl md:text-7xl">{language === "german" ? text_deutsch.second : text_english.second}</p>
                        </motion.div>
                        <motion.div className="flex justify-center" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }}>
                            <p className="w-full px-12 md:px-20 text-center italic text-base md:text-2xl dark:text-white" >{language === "german" ? text_deutsch.text : text_english.second}</p>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}



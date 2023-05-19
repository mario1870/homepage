import { motion } from "framer-motion"
import { startpage_data } from "../../../../data/startpage_data"

export default function TextSection(props){

    const language = props.language

    const text_deutsch = startpage_data.text_deutsch
    const text_english = startpage_data.text_english

    return(
        <>
            <motion.div className="p-3 md:p-12 mx-10 md:mx-10 pt-12 md:pt-36 md:mx-32 border-b border-black your-element dark:border-white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                <motion.p initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }} className="text-left italic dark:text-white text-2xl md:text-7xl">About Me</motion.p>
            </motion.div>
            <motion.div className="flex justify-center mt-2 md:mt-10" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }}>
                <p className="w-full px-12 md:px-32 text-left italic text-base md:text-2xl dark:text-white" >{language === "german" ? text_deutsch.text : text_english.second}</p>
            </motion.div>
    </>
    )
}
import { motion } from "framer-motion"
import Image from "next/image"

export default function ImageSection(){
    return(
        <motion.div   initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="w-80 mx-auto rounded-2xl md:rounded-none drop-shadow-2xl dark:shadow-white my-10 md:my-0 md:w-auto md:h-2/5 md:min-h-[20rem] bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600">
            <Image src="/startpage_images/m.png" width={400} height={700} alt="Mario" className="img-fluid mx-auto w-auto md:w-auto h-full" />                
        </motion.div>
    )
}
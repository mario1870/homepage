import { motion } from "framer-motion"
import Link from "next/link";
import Image from "next/image";


export default function SocialsIcons(){

    const icon_dimensions = 50
    
    return(
        <div className="justify-end w-full px-20 hidden md:flex md:absolute bottom-10 right-0">
            <motion.div className="px-5" whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}>
                <Link className="" href="https://www.linkedin.com/in/mario-r-b88950238" ><Image src="/icons/linkedin.png" width={icon_dimensions} height={icon_dimensions} alt="Github" loading="lazy" /></Link>
            </motion.div>
            <motion.div className="px-5" whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}>
                <Link className="" href="https://github.com/mario1870"><Image src="/icons/github.png" width={icon_dimensions} height={icon_dimensions} alt="Github" loading="lazy" /></Link>
            </motion.div>
        </div>
    )
}
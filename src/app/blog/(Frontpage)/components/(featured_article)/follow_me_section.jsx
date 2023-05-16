import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { AiOutlineGithub } from 'react-icons/ai';


export default function FollowMe(){
    return(
        <>
            <div style={{ display: "flex", gap: "10px"}}>
                <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}>
                    <Link className="" href="https://www.linkedin.com/in/mario-r-b88950238" id="navbar_logo_id" ><Image src="/startpage_images/linkedin.png" width={25} height={25} alt="Github" loading="lazy" /></Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}>
                    <Link className="" href="https://github.com/mario1870" id="navbar_logo_id" ><Image src="/startpage_images/github.png" width={25} height={25} alt="Github" loading="lazy" /></Link>
                </motion.div>
            </div>
        </>
    )
}
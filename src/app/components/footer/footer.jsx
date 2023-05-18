import Link from "next/link"
import "./footer.scss"
import Image from "next/image"
import { motion } from "framer-motion";

export default function Footer(){
    const icon_dimensions = 25
    return(
        <>
            <footer className="flex flex-col space-y-10 justify-center m-10">

            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <Link className="hover:text-gray-400" href="/">Home</Link>
                <Link className="hover:text-gray-400" href="/cv">CV</Link>
                <Link className="hover:text-gray-400" href="/blog">Blog</Link>
                <Link className="hover:text-gray-400" href="contact">Contact</Link>
            </nav>

            <div className="flex justify-center space-x-5">
                <motion.a whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Image style={{ filter: 'invert(100%)' }} width={icon_dimensions} height={icon_dimensions} alt="LinkedIn" src="/icons/linkedin.png" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Image style={{ filter: 'invert(100%)' }} width={icon_dimensions} height={icon_dimensions} src="/icons/github.png" />
                </motion.a>
            </div>
                <p className="text-center text-gray-700 font-medium">&copy; 2023 Raach GmbH All rights reservered.</p>
            </footer>
        </>
    )
}
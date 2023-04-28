"use client"
import Image from "next/image"
import "./navbar.scss"
import Link from "next/link"
import { useState, useEffect } from "react"
import Hamburgermenu from "./hamburgermenu/hamburgermenu"
import { useSelector, useDispatch } from 'react-redux';
import { set_german, set_english } from '../../redux/languageSlice';
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar(props){

    {/* Sprache aus Redux-Store importieren */}
    const language = useSelector(state => state.language.value);
    const dispatch = useDispatch();
    
    const hamburgerState = useSelector(state => state.hamburger.value);
    
    useEffect(() => {

        console.log(hamburgerState)

      }, [hamburgerState]);

    return(
        <motion.nav className="navbar">

            {/*Logo*/}
            <div className="navbar_logo_div">
                <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}} id="navbar_logo_id">
                    <Link className="" href="" id="navbar_logo_id" ><Image src="/navbar_images/m_logo.png" width={592} height={421} alt="logo" id="navbar_logo_id" loading="lazy" /></Link>
                </motion.div>
            </div>



            <AnimatePresence>
                {hamburgerState && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {/* Links in der Mitte*/}
                    <div className="navbar_links_div" > 
                        <motion.div whileHover={{ scale: 1.00}} whileTap={{scale: 0.9}}  className="navbar_links_div_text_div"><Link  href="">{language === "german" ? "Start" : "Home"}</Link></motion.div>
                        <motion.div whileHover={{ scale: 1.0}} whileTap={{scale: 0.9}}  className="navbar_links_div_text_div"><Link href="/cv">{language === "german" ? "Lebenslauf" : "CV"}</Link></motion.div>
                        <motion.div whileHover={{ scale: 1.0}} whileTap={{scale: 0.9}}  className="navbar_links_div_text_div"><Link href="/blog">{language === "german" ? "Blog" : "Blog"}</Link></motion.div>
                        <motion.div whileHover={{ scale: 1.0}} whileTap={{scale: 0.9}}  className="navbar_links_div_text_div"><Link  href="/contact">{language === "german" ? "Kontakt" : "Contact"}</Link></motion.div>
                    </div>
                </motion.div>
                 )}
            </AnimatePresence>

            <AnimatePresence>
                {hamburgerState && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="navbar_languages_div">
                    <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}><Image src="/navbar_images/german.png" width={100} height={100} alt="German" className="navbar_logo_div_flag" onClick={() => { dispatch( set_german()) }} /></motion.div>
                    <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}><Image src="/navbar_images/england.jpg" width={100} height={100} alt="English" className="navbar_logo_div_flag" onClick={ () => { dispatch(set_english()) }} /></motion.div>
                </motion.div>
                 )}
            </AnimatePresence>



            <Hamburgermenu id="hamburgermenu_component" lang={language} />




        </motion.nav>
    )
}
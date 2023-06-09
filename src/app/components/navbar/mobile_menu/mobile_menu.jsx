"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import "./mobile_menu.scss"
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { set_german, set_english } from '../../../redux/languageSlice';
import { setChange } from '../../../redux/hamburgerSlice';


export default function Mobile_menu(props){

    {/* Sprache aus Redux-Store importieren */}
    const language = useSelector(state => state.language.value);
    const dispatch = useDispatch();
  
    const hamburgerState = useSelector(state => state.hamburger.value);

    useEffect(() => {
        if (typeof window !== "undefined" && hamburgerState !== undefined) {
          const line1 = document.querySelector("#line1");
          const line2 = document.querySelector("#line2");
    
          if (hamburgerState === true){
            line1.style.animation = "toggle_animation_1 0.5s forwards"
            line2.style.animation = "toggle_animation_2 0.5s forwards"
            }
          else{
            line1.style.animation = "toggle_animation_1_reversed 0.5s forwards"
            line2.style.animation = "toggle_animation_2_reversed 0.5s forwards"
          }
        }
      }, [hamburgerState]);


    return(

        <motion.div id="mobile_menu" className="w-screen mt-20 bg-blue-200 dark:bg-black" initial={{ x: "100vw" }} animate={{ x: hamburgerState ? 0 : "100vw" }} transition={{ duration: 0.4, ease: "easeInOut",}}>
            <div id="mobile_menu_links" className="text-black dark:text-white">
              <Link onClick={() => { dispatch(setChange()) }} className="no-underline text-black dark:text-white" href="/">{language === "german" ? "Start" : "Home"}</Link>
              <Link onClick={() => { dispatch(setChange()) }} className="no-underline text-black dark:text-white" href="/cv">{language === "german" ? "Lebenslauf" : "CV"}</Link>
              <Link onClick={() => { dispatch(setChange()) }} className="no-underline text-black dark:text-white" href="/blog">{language === "german" ? "Blog" : "Blog"}</Link>
              <Link onClick={() => { dispatch(setChange()) }} className="no-underline text-black dark:text-white" href="/contact">{language === "german" ? "Kontakt" : "Contact"}</Link>         
            </div>

            <div id="div_login_small">
                <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}><Image src="/navbar_images/german.png" width={100} height={100} alt="German" className="navbar_login_small_flag" onClick={() => { dispatch( set_german()) }}/></motion.div>
                <motion.div whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}}><Image src="/navbar_images/england.jpg" width={100} height={100} alt="English" className="navbar_login_small_flag"  onClick={() => { dispatch( set_english()) }} /></motion.div>
            </div>
      </motion.div>
    )
}
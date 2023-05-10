"use client"
import "./startpage.scss"
import Image from "next/image"
import { startpage_data } from "../../../data/startpage_data"
import { useSelector, useDispatch } from 'react-redux';
import TypewriterText from "../components/animations/schreibmaschine"
import { motion } from "framer-motion"
import Link from "next/link";
import Typewriter from "./typewriter"

export default function Startpage(props){

    const language = useSelector(state => state.language.value);

    function fetchData() {
        fetch('/api/data')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      }

      const text_deutsch = startpage_data.text_deutsch
      const text_english = startpage_data.text_english

    return(
        <>


        <div className="startpage" >


            <div className="startpage-content">

                <div className="startpage-content-name">
                    <div className="startpage-content-name-box">
                        <motion.h6 className="startpage-content-name-title" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }}>
                            <p>{language === "german" ? text_deutsch.first : text_english.first}</p>
                        </motion.h6>
                        <motion.div className="startpage-content-name-name" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }}>
                            <p>{language === "german" ? text_deutsch.second : text_english.second}</p>
                        </motion.div>

                    </div>
                </div>
            </div>

            <div className="startpage-content-image">

                <Image src="/startpage_images/mario.png" width={2000} height={3000} alt="Mario" id="startpage-content-image-img"/>

            </div>



        </div>
            {/* Startseite */}


        </>
    )
}



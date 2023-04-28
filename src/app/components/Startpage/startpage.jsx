"use client"
import "./startpage.scss"
import Image from "next/image"
import { startpage_data_leftCircle, startpage_data_short } from "../../../../data/startpage_data"
import { useSelector, useDispatch } from 'react-redux';
import TypewriterText from "../animations/schreibmaschine"
import { motion } from "framer-motion"
import Link from "next/link";
import Typewriter from "./typewriter"
import { useEffect, useState } from "react";

export default function Startpage(props){

    const language = useSelector(state => state.language.value);

    function fetchData() {
        fetch('/api/data')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      }

    return(
        <>


        <div className="startpage" >


            <div className="startpage-content">

                <div className="startpage-content-name">
                    <div className="startpage-content-name-box">
                        <motion.h6 className="startpage-content-name-title" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }}>
                            HEY, I'M
                        </motion.h6>
                        <motion.div className="startpage-content-name-name" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }}>
                            MARIO RAACH,
                        </motion.div>

                        <motion.div className="startpage-content-subheader" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }} transition={{ opacity: { duration: 0.5 } }}>
                            <h3 onClick={fetchData} className="startpage-content-subheader-text">
                                <Typewriter text="I'M AN INDUSTRIAL CLERK WHOS INTERESTED IN COMPUTER SCIENCE, SOCCER AND POLITICS. I HOPE YOU ENJOY THE CONTENT ON MY WEBSITE!" />
                            </h3>              
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



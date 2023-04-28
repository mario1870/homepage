
"use client"
import { useState } from "react";
import "./education_section.scss"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';


export default function Education_section(props){

    const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);

    const animationCompleteHandler = () => {
        setHasPlayedAnimation(true);
        console.log(hasPlayedAnimation)
      };

      
    const { ref, inView } = useInView();

    const side = props.side

    const animationVariants = {
        hidden: { x: `${side}vw` },
        visible: { x: 0 },
    };

    return(
        <div ref={ref} style={{height: "100%", display: "flex", justifyContent:"center", alignItems:"center"}}>
            
            <motion.div className="cv_page_education_center_section"  variants={animationVariants} initial="hidden" animate={inView === true ? 'visible' : 'hidden'} transition={{ duration: 0.5, type: 'spring', stiffness: 40, delay: 0.3}} onAnimationComplete={animationCompleteHandler}>
                <div className="cv_page_education_center_section_text">
                    <h1>{props.header}</h1>
                </div>
                <div className="cv_page_education_center_section_bild">
                    <div className="cv_page_education_center_section_img"></div>
                </div>
            </motion.div>
        </div>
    )
}
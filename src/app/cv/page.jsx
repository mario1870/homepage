"use client"
import Image from "next/image"
import "./cv_page.scss"
import { useSelector, useDispatch } from 'react-redux';
import Education from "../components/cv_page/education/education"
import Skills from "../components/cv_page/skills/skills"
import Working_experience from "../components/cv_page/working_experience/working_experience"

export default function Cv_page(){


    const language = useSelector(state => state.language.value);
    

    return(
        <>

            {/* Startseite */}
            <div className="cv_page">

            <a href="/greece.pdf" download>
                <button>PDF herunterladen</button>
            </a>


            </div>
        </>
    )
}
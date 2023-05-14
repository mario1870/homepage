"use client"
import Image from "next/image"
import "./cv_page.scss"
import { useSelector, useDispatch } from 'react-redux';

import Component from "./component"


export default function Cv_page(){


    const language = useSelector(state => state.language.value);
    

    return(
        <>

            {/* Startseite */}
            <div className="cv_page">

            <div className="button">
                <a className="button_download" href="/greece.pdf" download>Download</a>
                <p className="top">Klicke zum downloaden</p>
                <p className="bottom">204KB</p>
            </div>


            <Component />

            </div>
        </>
    )
}
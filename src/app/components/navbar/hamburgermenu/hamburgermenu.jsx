"use client"
import { useState } from "react";
import "./hamburgermenu.scss"
import Mobile_menu from "../mobile_menu/mobile_menu";
import { useSelector, useDispatch } from 'react-redux';
import { setChange } from '../../../redux/hamburgerSlice';

export default function Hamburgermenu(props){

    {/* Sprache aus Redux-Store importieren */}
    const language = useSelector(state => state.language.value);
    const dispatch = useDispatch();



    const lang = props.lang
    const inc= props.incrementLanguage

    return(
        <>
            {/* Hamburgermenü */}
            <div id='hamburgerm'>
              <input type="checkbox" id="hamburg" onChange={() => { dispatch(setChange()) }}  />
              <label htmlFor="hamburg" className="hamburg">
                  <span className="line bg-black dark:bg-white" id="line1"></span>
                  <span className="line bg-black dark:bg-white" id="line2"></span>
              </label>
            </div>

            <Mobile_menu onClick={ () => { dispatch(setChange()) }}  lang={lang} incrementLanguage={inc} />
        </>
    )
}
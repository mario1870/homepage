
"use client"
import "./contact.scss"
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { contact_data } from "../../../data/contact_data"
import { motion } from "framer-motion";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Link from "next/link";

export default function Contact(){

    const language = useSelector(state => state.language.value);




    return (
        <>
            <div className="contact_page">
                <div className="contact_page_box">
                    <div className="contact_page_left">
                        <div style={{ width: "100%", display: "flex", flexDirection: "row"}}><Link href="#" style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center"}}><BsFillTelephoneFill /><p style={{padding:"1rem"}}>01520 9748732</p></Link></div>
                        <div style={{ width: "100%", display: "flex", flexDirection: "row"}}><Link href="mailto:marioraach01@gmail.com" style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center"}}><AiOutlineMail /><p style={{padding:"1rem"}}>marioraach01@gmail.com</p></Link></div>
                    </div>
                    <div className="contact_page_right">
                        <div>
                            <header>{language === "german" ? "KONTAKTIERE MICH" : "CONTACT ME"}</header>
                            <form id="contact_page_form" className="topBefore" action="http://localhost:8000/formular" method="post">
                                <input id="contact_page_form_name" type="text" name="name" placeholder={language === "german" ? "NAME" : "NAME"} />
                                <input id="contact_page_form_email" type="text" name="email" placeholder={language === "german" ? "E-MAIL" : "E-MAIL"} />
                                <textarea id="message" type="text" name="message" placeholder={language === "german" ? "NACHRICHT" : "MESSAGE"}></textarea>
                                <input id="contact_page_form_submit" type="submit" value={language === "german" ? "ABSENDEN" : "SUBMIT"} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



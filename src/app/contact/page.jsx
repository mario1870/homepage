
"use client"
import "./contact.scss"
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { contact_data } from "../../../data/contact_data"
import { motion } from "framer-motion";

export default function Contact(){

    const language = useSelector(state => state.language.value);

    const deutsch_text = (
        <>
          {contact_data.text_deutsch.email}
          <br />
          {contact_data.text_deutsch.telefon}
        </>
      );

    const english_text = (
        <>
          {contact_data.text_english.email}
          <br />
          {contact_data.text_english.telefon}
        </>
      );



    return (
        <>
            <div className="contact_page">

                <div className="contact_page_box">

                    <div className="contact_page_left">
                        <p>{language === "german" ? deutsch_text : english_text}</p>
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
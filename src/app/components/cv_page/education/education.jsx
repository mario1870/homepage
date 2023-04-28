"use client"
import Education_section from "./education_section"
import { useSelector, useDispatch } from 'react-redux';
import "./education.scss"
import { cv_education } from "../../../../../data/cv_data"

export default function Education(){

    const language = useSelector(state => state.language.value);


    return(
        <div className="cv_page_education">
            <div className="cv_page_education_center">

            
                <Education_section header={language === "german" ? "Grundschule" : "Elementary school"} side="100" />
                <Education_section header={language === "german" ? "Gymnasium" : "Highschool"} side="-100" />
                <Education_section header={language === "german" ? "Abitur" : "A-levels"} side="100" />
                <Education_section header={language === "german" ? "Berufsschule" : "Vocational school"} side="-200" />

            </div>
        </div>
    )
}
"use client"
import { useSelector, useDispatch } from 'react-redux';
import "./working_experience.scss"
import { cv_education } from "../../../../../data/cv_data"

export default function Working_erperience(){

    const language = useSelector(state => state.language.value);


    return(
        <div className="cv_page_working_experience">
            <div className="cv_page_working_experience_center">

        
            </div>
        </div>
    )
}
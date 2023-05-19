"use client"
import { useSelector, useDispatch } from 'react-redux';
import Footer from "../components/footer/footer";
import ImageSection from "./(sections)/image_section"
import NameJobSection from "./(sections)/name_job_section"
import BlogResumeSection from "./(sections)/blog_resume_section"
import SolialsIcons from "./(sections)/socials_icons_section"
import TextSection from "./(sections)/text_section"

export default function Startpage(){

    const language = useSelector(state => state.language.value);

    return(
        <>
        <div className="bg-blue-200 dark:bg-black pt-20 md:pt-0 w-screen h-screen flex flex-col md:flex-row" >

            <div className="md:w-2/6">
                <ImageSection />
                <NameJobSection />
            </div>

            <div className="h-full text-4xl font-bold leading-snug text-gray-700 bg-blue-200 pb-12 wow fadeInUp animated md:w-4/6 dark:bg-black">
                <TextSection language={language} />
                <BlogResumeSection />
                <SolialsIcons />
            </div>

            <div className="bg-black md:hidden">
                <Footer />                
            </div>
 
        </div>

        </>
    )
}



import "./skills.scss"
import Image from "next/image"
import { cv_skills } from "../../../../../data/cv_data"

export default function Skills() {
  return (
    <div className="cv_page_skills">

      <div className="cv_page_skills_center">

        <div className="cv_page_skills_softskills">
              Softskills
          </div>
          <div className="cv_page_skills_hardskills">
              Technical Skillz
          </div>

      </div>



      {/*<div className="cv_page_skills_slider">

        {cv_skills.map((x) => (
          <div className="cv_page_skills_slider_items" key={x.name}>
            <Image src={x.logo} width={100} height={100} id="cv_page_skills_slider_items_image" />
            <h1>{x.name}</h1>
          </div>
        ))}

        </div>*/}
    </div>
  );
}

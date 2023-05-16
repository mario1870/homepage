import "./load_more.scss"
import { useSelector, useDispatch } from 'react-redux';

export default function LoadMoreButton(){

    const language = useSelector(state => state.language.value);
    
    return(
        <button className="load_more_button">{language === "german" ? "Mehr laden" : "load more"}</button>
    )
}
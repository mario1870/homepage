"use client"
import React, { useState, useEffect } from 'react';
import "./dashboard.scss"


export default function Dashboard(){
    
    const [data, setData] = useState(null);

    useEffect(() => {
    fetch('http://localhost:8000')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);


    function getData(){
        return "moin";
    }

    return (
        <div className='page_dashboard'>



            <h1>{data ? data.message : 'Lade Daten...'}</h1>

            <div className='page_dashboard_form'>

                {/* Headline Upload Abschnitt */}
                <label htmlFor="headline-input">Überschrift eingeben</label>
                <input id='headline-input' className='page_dashboard_form_element' />

                {/* Textarea Upload Abschnitt */}
                <label htmlFor="page_dashboard_form_textarea">Text eingeben</label>
                <textarea className='page_dashboard_form_element' id="page_dashboard_form_textarea">
                    
                </textarea>

                {/* Bild Upload Abschnitt */}
                <label htmlFor="file-upload">Bild auswählen:</label>
                <input type="file" id="file-upload" name="file-upload"  htmlaccept="image/*" />

                <button className='page_dashboard_form_element'>
                    Upload
                </button>
            </div>

            <div>
                {data ? data.map((item, index) => (
                    <div key={index}>
                    <h2>{item.headline}</h2>
                    <p>{item.text}</p>
                    <p>{item.image}</p>
                    </div>
                )): "läd"}
            </div>

        </div>
    )
}
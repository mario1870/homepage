



export default function Server(){
    

    return(
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <form id="contact_page_form" className="topBefore" action="http://localhost:8000/insert" method="post">
                <input id="contact_page_form_name" type="text" name="name" placeholder="Username" />
                <input id="contact_page_form_email" type="text" name="email" placeholder="passwort" />
                <textarea id="message" type="text" name="message" placeholder="passwort"></textarea>
                <input id="contact_page_form_submit" type="submit" value="Abschicken" />
            </form>
        </div>
    )
}
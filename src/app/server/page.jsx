
import "./login.scss"


export default function Server(){
    

    return(
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>

            <div class="main">  	
                <input type="checkbox" id="chk" aria-hidden="true" />

                    <div class="signup">
                        <form id="contact_page_form" className="topBefore" action="http://localhost:8000/signup" method="post">
                            <label for="chk" aria-hidden="true">Sign up</label>
                            <input type="text" name="username" placeholder="Username" required="" />
                            <input type="email" name="email" placeholder="Email" required="" />
                            <input type="password" name="password" placeholder="Password" required="" />
                            <button  type="submit">Sign up</button>
                        </form>
                    </div>

                    <div class="login">
                        <form id="contact_page_form" className="topBefore" action="http://localhost:8000/login" method="post">
                            <label for="chk" aria-hidden="true">Login</label>
                            <input type="email" name="email" placeholder="Email" required="" />
                            <input type="password" name="password" placeholder="Password" required="" />
                            <button>Login</button>
                        </form>
                    </div>
            </div>


        </div>
    )
}
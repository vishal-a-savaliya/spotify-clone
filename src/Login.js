// rfce for react es7 snipit
import React from "react";
import './Login.css';
import { loginUrl } from "./spotify";

function Login () {
    return (
        <div className="login">
            {/* <h1>i am the login page</h1> */}
            { /*Spotify logo */}
            {/* Login with spotify button */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo"/>
            <a href={loginUrl} >LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
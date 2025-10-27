import React from "react";
import "./Pagespace.css";
import Logo from "./Home page logo.gif"

function Pagespace(){
    return(
        <div className="Pagespace">
            <h1>Welcome to <span className="BookCheck">BookCheck</span></h1>
            <p>A website to get your favourite books</p>
            <img src={Logo} alt="logo"></img>
        </div>
    )
}

export default Pagespace;
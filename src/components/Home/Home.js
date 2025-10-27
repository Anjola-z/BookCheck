import React from "react";
import "./Home.css"
import Pagespace from "./Sections/Pagesapce";
import Sidebar from"./Sections/Sidebar";

function Home(){
    return(
        <div className="Home">
            <Sidebar />
            <Pagespace />
        </div>
    )
}
export default Home;
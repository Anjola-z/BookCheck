import { useState } from "react";
import "./Booksb.css"
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { CgHome } from "react-icons/cg";
import { BsBook } from "react-icons/bs";

function Booksb(){
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    return(
        <div className= "sbcontainer">
            <aside className="book-sb">
           <div className="book-sb-top">
             <button onClick = {() => navigate("/")} className="sc"><GoArrowLeft className="arrow" /></button>
             <h3 className="book-home"> Home </h3>
           </div>

           <nav className="book-dashbook">
           <button><CgHome /><a href="">Dashboard</a></button>
           <button><BsBook /><a href="">Books</a></button>
           </nav>
           
           </aside>
        </div>
    )
}
export default Booksb;
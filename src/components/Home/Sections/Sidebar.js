import { useState } from "react";
import "./Sidebar.css"
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { CgHome } from "react-icons/cg";
import { BsBook } from "react-icons/bs";

function Sidebar(){
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    return(
        <div className= { `container ${collapsed ? "collapsed" : ""}`}>
            <aside className="Sidebar">
           <div className="sidebar-top">
             <button onClick={() => setCollapsed(!collapsed)} className="sc"><GoArrowLeft className="arrow" /></button>
             <h3 className="Home"> Home </h3>
           </div>

           <nav className="dashbook">
           <button><CgHome /><a href="">Dashboard</a></button>
           <button><BsBook /><a href="">Books</a></button>
           </nav>
           
           <nav className="logsign">
           <button onClick = {() => navigate("/login")}>Login</button>
           <h4>OR</h4>
           <button onClick = {() => navigate("/signup")}>Signup</button>
           </nav>
           </aside>
        </div>
    )
}
export default Sidebar;
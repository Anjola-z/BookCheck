import { useState } from "react";
import "./Home.css"
import Pagespace from "./Sections/Pagesapce";
import Sidebar from"./Sections/Sidebar";
import Notification from "./Sections/Notification";

function Home(){
    const [showNotif, setShowNotif] = useState(false);

    return(
        <div className="Home">
            <Sidebar onDashboardClick={() => setShowNotif(true)}/>
            <Notification
                message="Please sign up to access the dashboard."
                show={showNotif}
                onClose={() => setShowNotif(false)}
            />
            <Pagespace />
        </div>
    )
}
export default Home;
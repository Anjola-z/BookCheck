import { useEffect } from "react";
import "./Notification.css"
import { AiOutlineClose } from "react-icons/ai";

function Notification({ message, show, onClose }){
    useEffect(() => {
        if (show) {
        const timer = setTimeout(onClose, 3000); // auto-close after 3s
        return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return(
        <div className= {`notification-container ${show ? "show" : ""}`}>
            <div className="notification-contents">
            <button onClick={onClose} className="close-btn">
                <AiOutlineClose />
            </button>
            <p className="message">{message}</p>
            </div>
        </div>
    )
}

export default Notification;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiInfo } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./Login.css";


function Login(){
    const[show, setShow] = useState(false);
    useEffect(() => {setShow(true)}, []);
    const[showPassword, setShowPassword] = useState(false);
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!username.trim()) newErrors.username = "Username is required";
         if (!password.trim()) newErrors.password = "Password is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
          // if no errors, navigate
         navigate("/");
        }
    }    

    return(
        <div className= {`login ${show ? "show" : ""}`}>
            <div className="log">
                <h1 className="logtext">Log in</h1>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="bc">BookCheck</h2>
                <div className="login-items">
                    <h2>Login</h2>
  
                    <div className="input-box">
                        <label htmlFor="username">Username</label> <br></br>
                        <input type="text" 
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="" />
                        {errors.username && (
                            <p className="error-message"> <FiInfo />{errors.username}</p>
                            )}
                    </div>
  
                    <div className="input-box">
                        <label htmlFor="password">Password</label> <br></br>
                        <input type= {showPassword ? "text" : "password"}
                         id="password" 
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         placeholder="" />
                        <button type="button" id="show" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye  /> : < FaEyeSlash/>}
                        </button>
                         {errors.password && (
                         <p className="error-message" > <FiInfo />{errors.password}</p>
                         )}
                    </div>

                    <button className="submit" type="submit">Log in</button>
                </div>
                <p className="option">Don't have an account? <a href="./signup">Signup</a></p>
            </form>

        </div>
    )
}
export default Login;
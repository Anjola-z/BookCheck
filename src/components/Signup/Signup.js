import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiInfo } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Signup.css";

function Signup() {
  const [show, setShow] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setShow(true);
  }, []);

  // 🔹 Handles actual signup with backend
  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/signup", {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        // Signup success
        setShowNotif(false);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setShowNotif(true); // Show notification if signup fails
    }
  };

  //  Handles form validation first, then calls handleSignup if valid
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await handleSignup(); // only signup if no errors
    }
  };

  return (
    <div className={`signup ${show ? "show" : ""}`}>
      <div className="sign">
        <h1 className="signtext">Sign up</h1>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="bc">BookCheck</h2>
        <div className="signup-items">
          <h2>Sign-up</h2>

         
          <div className="input-box">
            <label htmlFor="username">Username</label> <br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <p className="error-message">
                <FiInfo /> {errors.username}
              </p>
            )}
          </div>

         
          <div className="input-box">
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="error-message">
                <FiInfo /> {errors.email}
              </p>
            )}
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label> <br />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              id="show"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            {errors.password && (
              <p className="error-message">
                <FiInfo /> {errors.password}
              </p>
            )}
          </div>

          <button className="submit" type="submit">
            Sign up
          </button>
        </div>

        <p className="optionb">
          Already have an account? <a href="./login">Log in</a>
        </p>
      </form>

      {showNotif && (
        <div className="notif-popup">
          <p>Signup failed. Please try again.</p>
          <button onClick={() => setShowNotif(false)}>×</button>
        </div>
      )}
    </div>
  );
}

export default Signup;

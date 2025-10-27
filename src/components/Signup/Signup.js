import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiInfo } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./Signup.css";

function Signup() {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword ] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setShow(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    // only navigate if there are no errors
    if (Object.keys(newErrors).length === 0) {
      navigate("/");
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
              placeholder=""
            />
            {errors.username && (
              <p className="error-message"> < FiInfo/>{errors.username}</p>
            )}
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
            />
            {errors.email && <p className="error-message"> < FiInfo/>{errors.email}</p>}
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label> <br />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="" />
              <button type="button" id="show" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye  /> : < FaEyeSlash/>}
              </button>
            {errors.password && (
              <p className="error-message"> < FiInfo/>{errors.password}</p>
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
    </div>
  );
}

export default Signup;

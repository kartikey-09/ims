import { useState } from "react";
import "../css/loginPage.css";
import logo from "../assets/react.svg";

function LoginPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-app">
      <div className="left-container">
        <img src={logo} className="logo" alt="Logo" />
        <h1>IMS</h1>
        <h1>Integrated</h1>
        <h1>Management</h1>
        <h1>System</h1>
      </div>
      <div className="right-container">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="form-control"
                placeholder=" "
              />
              <label className="form-label">Full Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
                placeholder=" "
              />
              <label className="form-label">Email</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control"
                placeholder=" "
              />
              <label className="form-label">Password</label>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

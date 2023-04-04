import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/Custom.css"


export default function Login() {
let navigate = useNavigate();

const [admin, setAdmin] = useState({
    email: "",
    password :"",
  });
   
  const [loginError, setLoginError] = useState(false);

  const {email, password } = admin;

  const onInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/login", admin);
      navigate("/home");
    } catch (error) {
      setLoginError(true);
    }
  };

  return (
    <section id='login'>
    <div className="containerone" style={{marginTop: "100px"}} >
      <div className="row">
        <div className="col-md-6 one offset-md-3 border rounded p-5 mt-2 shadow" style={{marginTop: "10px"}}>
          <h2 className="text-center m-4">Bumble Bee Login</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email </label>
              <input type={"email"} className="form-control" required placeholder="Enter your Email" name="email" 
                value={email} 
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={"password"}
                className="form-control" required
                placeholder="Enter password"
                name="password" 
                value={password} maxLength={6}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {loginError && (
                <div className="alert alert-danger" role="alert">
                  Incorrect email or password. Please try again.
                </div>
              )}
            <button type="submit" className="btn btn-primary mx-2">
                Login
              </button>
          </form>
        </div>
      </div>
    </div>
    </section>
   
  );
}

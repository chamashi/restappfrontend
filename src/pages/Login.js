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

  const {email, password } = admin;

  const onInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/login", admin);
    navigate("/home");
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
              <input type={"text"} className="form-control" placeholder="Enter your Email" name="email" 
                value={email} required
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter password"
                name="password" 
                value={password} required maxLength={6}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <Link className="btn btn-primary mx-2" to="/home">
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
    </section>
   
  );
}

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployee() {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
  });

  const { name, mobile, address, email } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/employee", employee);
    navigate("/employee");
  };

  return (
    <section>
      <nav class="navbar navbar-expand-lg " >
      <Link className="navbar-brand" to="/">
            Bumble Bee </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link className="btn btn-dark" to="/addcustomer" style={{marginRight:"10px"}}>
            Customer Registration
          </Link>
      </li>
      <li class="nav-item">
      <Link className="btn btn-dark" to="/product/addproduct" style={{marginRight:"10px"}}>
            Add Product
          </Link>
      </li>
      <li class="nav-item">
      <Link className="btn btn-dark" to="/employee/addemployee" style={{marginRight:"10px"}}>
            Add Employee
          </Link>
      </li>
      <li class="nav-item">
      <Link className="btn btn-dark" to="/loan" style={{marginRight:"10px"}}>
            Loan Details
          </Link>
      </li>
      <li class="nav-item">
      <Link className="btn btn-dark" to="/" style={{marginRight:"10px"}}>
            Log out
          </Link>
      </li>
    </ul>
  </div>
</nav>
    <div className="container" style={{marginTop:"90px"}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Employee</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control" required
                placeholder="Enter Employee name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                type={"text"}
                className="form-control" required
                placeholder="Enter mobile" maxLength={10}
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control" required
                placeholder="Enter address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"email"}
                className="form-control" required
                placeholder="Enter e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Employee
            </button>
            <Link className="btn btn-danger mx-2" to="/employee">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
}
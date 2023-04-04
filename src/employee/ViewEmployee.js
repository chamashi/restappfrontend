import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/employee/${id}`);
    setEmployee(result.data);
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
      <Link className="btn btn-dark" to="/" style={{marginRight:"10px"}}>
            Log out
          </Link>
      </li>
    </ul>
  </div>
</nav>
    <div className="container" style={{marginTop:"70px"}}>
      <div className="row">
        <div className="col-md-7 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>

          <div className="card">
            <div className="card-header">
              Details of employee id : {employee.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {employee.name}
                </li>
                <li className="list-group-item">
                  <b>Mobile:</b>
                  {employee.mobile}
                </li>
                <li className="list-group-item">
                  <b>address:</b>
                  {employee.address}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {employee.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/employee"} >
            Back
          </Link>
        </div>
      </div>
    </div>
    </section>
    
  );
}
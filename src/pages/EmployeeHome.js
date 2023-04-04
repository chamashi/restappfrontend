import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function EmployeeHome() {
  const [employees, setEmployees] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees");
    setEmployees(result.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/employee/${id}`);
    loadEmployees();
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
    <div className="container">
      <div className="py-4">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employee.name}</td>
                <td>{employee.mobile}</td>
                <td>{employee.address}</td>
                <td>{employee.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/employee/viewemployee/${employee.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-success mx-2"
                    to={`/employee/editemployee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </section>
  );
}
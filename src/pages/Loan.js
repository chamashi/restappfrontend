import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export default function Loan() {
  const [loans, setLoans] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadLoans();
  }, []);

  const loadLoans = async () => {
    const result = await axios.get("http://localhost:8080/loans");
    setLoans(result.data);
  };

  return (
    <section>
      <nav class="navbar navbar-expand-lg " >
      <Link className="navbar-brand" to="/">
            Bumble Bee  </Link>
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
    <div className="container" style={{marginTop: "70px"}}>
      <div className="py-4">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Customer ID</th>
              <th scope="col">Product</th>
              <th scope="col">Total loan</th>
              <th scope="col"> Paid Installments</th>
              <th scope="col"> Balance</th>
              <th scope="col"> Paid </th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{loan.customerid}</td>
                <td>{loan.productname}</td>
                <td>{loan.totaloan}</td>
                <td>{loan.paidinstallments}</td>
                <td>{loan.loanbalance}</td>
                <td>{loan.paidamount}</td>
                <td>{loan.loandate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </section>
     
  );
}

import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewLoan() {
  const [loan, setLoan] = useState({
    customerid: "",
    productname: "",
    totalloan: "",
    installments: "",
    paidinstallments: "",
    loanbalance: "",
    paidamount: "",
    loandate: "",

  });

  const { id } = useParams();

  useEffect(() => {
    loadLoan();
  }, []);

  const loadLoan = async () => {
    const result = await axios.get(`http://localhost:8080/loan/${id}`);
    setLoan(result.data);
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
      <Link className="btn btn-dark" to="/loan/loandetails" style={{marginRight:"10px"}}>
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
    <div className="container" style={{marginTop:"100px"}}>
      <div className="row">
        <div className="col-md-7 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Loan Details</h2>

          <div className="card">
            <div className="card-header" >
              Details of Loan id : {loan.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Customer ID:</b>
                  {loan.customerid}
                </li>
                <li className="list-group-item">
                  <b>Product Name:</b>
                  {loan.productname}
                </li>
                <li className="list-group-item">
                  <b>Total Loan:</b>
                  {loan.totalloan}
                </li>
                <li className="list-group-item">
                  <b>Installments:</b>
                  {loan.installments}
                </li>
                <li className="list-group-item">
                  <b> Paid Installments:</b>
                  {loan.paidinstallments}
                </li>
                <li className="list-group-item">
                  <b>Loan balance:</b>
                  {loan.loanbalance}
                </li>
                <li className="list-group-item">
                  <b>Paid Ammount:</b>
                  {loan.paidamount}
                </li>
                <li className="list-group-item">
                  <b>Loan Date:</b>
                  {loan.loandate}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/loandetails"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
}
import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewProduct() {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    country: "",
    price: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8080/product/viewproduct${id}`);
    setProduct(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Product Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {product.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {product.name}
                </li>
                <li className="list-group-item">
                  <b>Brand:</b>
                  {product.brand}
                </li>
                <li className="list-group-item">
                  <b>Country:</b>
                  {product.country}
                </li>
                <li className="list-group-item">
                  <b>Price:</b>
                  {product.price}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/product"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
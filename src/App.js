
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./products/AddProduct";
import EditProduct from "./products/EditProduct";
import ViewProduct from "./products/ViewProduct";
import ProductHome from "./pages/ProductHome";
import AddCustomer from "./customers/AddCustomer";
import EditCustomer from "./customers/EditCustomer";
import ViewCustomer from "./customers/ViewCustomer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addcustomer" element={<AddCustomer />} />
          <Route exact path="/editcustomer/:id" element={<EditCustomer />} />
          <Route exact path="/viewcustomer/:id" element={<ViewCustomer />} />
          <Route exact path="/product" element={<ProductHome />} />
          <Route exact path="/product/addproduct" element={<AddProduct />} />
          <Route exact path="/product/editproduct/:id" element={<EditProduct />} />
          <Route exact path="/product/viewproduct/:id" element={<ViewProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
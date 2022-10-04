import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";

function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/dress" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/success" element={<Success />} />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />

        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;

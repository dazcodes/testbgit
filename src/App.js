import Home from "./pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/about";
import MainLayout from "./layout/MainLayout";
import Shop from "./pages/Shop";
import Product from "./pages/Products";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Routes>
    //   <Route path="" element={<Home />} />
    //   {/* <Route path="/about" element={<About />} /> */}
    // </Routes>

    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:product" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;

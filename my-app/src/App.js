import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import CartPage from "./Pages/CartPage/CartPage";

function App() {

  useEffect(() =>{
    new Image().src = "./Image/3949227.jpg"
    new Image().src = "./Image/sliderBack.png"
  },[])

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<h1>Error 404 page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;

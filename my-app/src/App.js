import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector} from "react-redux";

import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import HomePage from "./Pages/HomePage/HomePage";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import { useEffect } from "react";

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
        <Route path="*" element={<h1>Error 404 page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PATH } from "./routes/paths";
import ProductPage from "./pages/productPage/ProductPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={PATH.PRODUCT.LIST} />} />
      <Route path={PATH.PRODUCT.LIST} element={<ProductPage />} />
    </Routes>
  );
}

export default App;

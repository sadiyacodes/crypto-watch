import React from "react"
// import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";


function App() {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/coins/:id" element={<CoinPage/>} />
      </Routes>
    </>
  )
}

export default App

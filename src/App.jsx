import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Result from "./page/Result";
import Quiz from "./page/Quiz";
import NavBar from "./components/NavBar";
import './App.css';

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Result" element={<Result />} />

      </Routes>


    </BrowserRouter>

  )
}

export default App;

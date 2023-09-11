import { useState } from 'react'
// all import file meta data
import { Route, Routes } from "react-router-dom";
//CSS
import "./assets/css/reset.css"
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez les styles Bootstrap
//Components
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App

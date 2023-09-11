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
import Dashboard from './pages/Dashboard/Dashboard';


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

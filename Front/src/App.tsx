// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'; // Assurez-vous d'importer correctement votre store Redux
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
//CSS
import "./assets/css/reset.css"
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez les styles Bootstrap
function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Dashboard />} />
        </Routes>
        <Footer />
      </>
    </Provider>
  );
}

export default App;

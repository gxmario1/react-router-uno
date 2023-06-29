import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./views/Inicio";
import Contacto from "./views/Contacto";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
return (
<div className="App">
<BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Contacto" element={<Contacto />} />
  </Routes>
  
</BrowserRouter>
<Footer/>
</div>
);
}
export default App;

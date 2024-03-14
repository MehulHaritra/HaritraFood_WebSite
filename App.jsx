import React from "react";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import OurFood from "./Components/OurFood";
import Home from "./Components/Home";
import AboutUS from "./Components/AboutUS";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About US" element={<AboutUS />} />
          <Route path="/OurFood" element={<OurFood />} />
          <Route path="/SignIN" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

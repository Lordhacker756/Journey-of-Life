import React from "react";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Memory from "./Components/Memory";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50">
      <Navbar/>
      <Home />
      <Memory content="Hello world"/>
      <Footer />
    </div>
  );
};

export default App;

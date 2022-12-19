import React from "react";
import './App.css';
import Banner from "./BannerComponent/Banner";
import Main from "./MainComponent/Main";
import Navbar from "./NavbarComponent/Navbar";
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Main></Main>
    </div>
  );
}

export default App;

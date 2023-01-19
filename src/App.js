import React from "react";
import './App.css';
import Banner from "./BannerComponent/Banner";
import Login from "./LoginComponent/Login";
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

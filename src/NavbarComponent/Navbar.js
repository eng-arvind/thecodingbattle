import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container_navbar">
        <div className="main-nav flex">
          <a href="#" className="company-logo">
            <img
              src="https://codehelp.s3.ap-south-1.amazonaws.com/qdo970k2vrxj8kefd1zt_9520ff468a.svg"
              alt="company logo"
              data-nimg="intrinsic"
            />
          </a>

          <div className="nav-links">
            <ul className="flex">
            <li>
                <a href="#" className="hover-links">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover-links">
                  Cources
                </a>
              </li>
              <li>
                <a href="#" className="hover-links">
                  Contact
                </a>
              </li>
             </ul>
            </div>

          <div className="nav-links">
            <ul className="flex gap_bt"> 
              <li>
              <a href="#" className="hover-links">
                <button type="button" className="btn-link">Dashboard</button>
              </a>
              </li>
              <li>
              <a href="#" className="hover-links  btn_background">
                <button type="button" className="btn_color btn-link">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></button>
              </a>
              </li>
              <li>
              <a href="#" className="hover-links dark"><i class="fa-regular fa-moon"></i></a>
              </li>
            </ul>
          </div>
          <div className="hidden menubar">
          <i class="fa fa-bars" aria-hidden="true"></i>
          <a href="#" className="hover-links"><i class="fa-regular fa-moon"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

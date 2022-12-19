import React from "react";
import Community from "../SectionComponet/CommunityComponent/Community";
import StateCount from "../SectionComponet/CountstateComponent/StateCount";
import Features from "../SectionComponet/FeatureComponent/Features";
import Footer from "../SectionComponet/FooterComponent/Footer";
import ReviewHome from "../SectionComponet/ReviewComponent/ReviewHome";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="container_main header-section flex">
        <div className="header-left col">
          <div className="left-content">
            <h1>
              {" "}
              <span className="text_color">Learn</span>{" "}
              <span className="text_w">With</span> Arvind
            </h1>
            <p className="text_last">
              The Ultimate Guide To Ace <br></br> SDE Interviews.
            </p>
            <div className="left-button">
              <a href="#" className="hover-links  btn_background">
                <button type="button" className="btn_color btn-link">
                  View Cources
                </button>
              </a>
              <a href="#" className="hover-links">
                <button type="button" className="btn-link">Watch Videos</button>
              </a>
            </div>
          </div>
        </div>
        <div className="header-right col">
          <img src={require("../images/asset 12.png")} alt="hero image" />
        </div>
      </div>
      <div className="allsection">
      <StateCount></StateCount>
      <Features></Features>
      <ReviewHome></ReviewHome>
      <Community></Community>
      <Footer></Footer>
      </div>  
    </>
  );
};

export default Main;

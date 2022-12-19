import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <section className="container-profile">
        <div className="instructor">
          <p>
            Meet your <span> Instructor</span>
          </p>
          <a href="#" className="hover-links">
            <button type="button" className="btn-link">
              Know more
            </button>
          </a>
        </div>
        <div className="profile-item">
          <div className="profile-img">
            <img
              src={require("../../images/mypic.jpg")}
              alt="profile logo"
              data-nimg="intrinsic"
            />
          </div>
          <div className="profile-desc">
            <p className="profile-text">Arvind</p>
            <p className="profile-subtext">Founder, Coding-Battle</p>
          </div>
        </div>
        <div className="placed-company">
          <div className="placed-in">
          <img src="https://codehelp.s3.ap-south-1.amazonaws.com/kisspng_amazon_com_logo_retail_brand_publishing_chat_room_logo_5ae868f5383535_1_a6b41bc3a9.png" alt="company logo" class="mx-auto w-fit"/>
            <p>Ex-Amazon, SWE</p>
          </div>
        
          <div className="placed-in">
          <img src="https://codehelp.s3.ap-south-1.amazonaws.com/microsoft_logo_png_2398_1_6587a84ffc.png" alt="company logo" class="mx-auto w-fit"/>
          <p class="text-xl text-textpara">Ex-Microsoft, SWE</p>
          </div>

          <div className="placed-in"> 
          <img src="https://codehelp.s3.ap-south-1.amazonaws.com/pngegg_1_1_51b5432954.png" alt="company logo" class="mx-auto w-fit"/>
            <p>Google ASC, India</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Profile;

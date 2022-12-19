import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <>
        <section className="footer">
          <div className="footer-main">
            <div className="footer-logo row">
              <a href="#" className="company-logo">
                <img
                  src="https://codehelp.s3.ap-south-1.amazonaws.com/hoktffneuv795jansa8z_bdff2537c7.svg"
                  alt="company logo"
                  data-nimg="intrinsic"
                />
              </a>
              <h2>CODE HELP</h2>
              <p>
                The Ultimate Guide To Ace SDE<br></br>Interviews.
              </p>
            </div>

            <div className="">
              <h2>MENU</h2>
              <p>
                About Us <br></br>Courses<br></br> Contact
              </p>
            </div>
            <div className='service'>
              <h2>SERVICES</h2>
              <p>
              Privacy Policy <br></br>Terms of use<br></br> Refund Policy
              </p>
            </div>
            <div className='vertical'>
            </div>
            <div>
            <h2>GET IN TOUCH</h2>
                <p>Email: codehelprazorpay@gmail.com</p>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright © 2022 CodeHelp. All Rights Reserved.</p>
          </div>
        </section>
      </>
    );
}
 
export default Footer;
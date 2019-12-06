import React from 'react';

import Logo from '../images/logo.png';
//import '../css/main.css';
import '../css/donate.css';


const DonationNav = () => (
    <section className="emptynav">
  <div className="cx_top_bar">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="cx_contact" />
        </div>
      </div>
    </div>
  </div>    
  <div className="row cx_row_reverse">
    <div className="col-lg-4" />
    <div className="col-lg-4">
      <div className="logo-site">
        <div className="inner"> <a href="index.html"><img src="{Logo}" className="img-fluid" alt /></a></div>
      </div>
    </div>    
    <div className="col-lg-4>" />    
  </div>
</section>

)

export default DonationNav
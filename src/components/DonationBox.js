import React from 'react'
import '../css/donationbox.css'





const DonationBox = () => (

<section className="parent">
  <div className="son">
    <div className="container">

    <div className="left">
      <div className="img"></div>
        <div className="info">
            <ul>
                <li>you are about to</li>
                <li>Donate name with</li>
                <li>$500</li>
            </ul>
            <ul>
                <li>time left</li>
                <li>25 days</li>
                <li>budget to collect</li>
                <li>$24000</li>
            </ul>
        </div>
            <div className="circle1">
                <div className="circle">
                    <span>founded</span>
                    <span>49,8%</span>
                </div>
            </div>
    </div>
    <div className="right">
        <div className="up">
            <ul>
                <li><h3>It's almost done!</h3></li>
                <li>Fill in the fields below and click "Donate Now!" to make something beautiful.</li>
            </ul>
            <ul>
                <li className="activecr">credit card</li>
                <li>paypal</li>
            </ul>
        </div>
        <div className="down">
         <div className="payment">
            <form>
                <div className="form-group">
                    <label className="cardNumber">Card Number</label>
                    <input type="number" className="form-control1"></input>
                </div>
                <div className="form-group1" id="expiration-date">
                    <div className="lab">
                        <label>Expiration Date</label>
                            <select>
                                <option value="01">January</option>
                                <option value="02">February </option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <select className="year">
                                <option value="16"> 2016</option>
                                <option value="17"> 2017</option>
                                <option value="18"> 2018</option>
                                <option value="19"> 2019</option>
                                <option value="20"> 2020</option>
                                <option value="21"> 2021</option>
                            </select>
                    </div>
                </div>    
                <div className="form-group CVV">
                    <label for="cvv">CVV</label>
                        <input type="number" className="form-control" id="cvv">
                        </input>
                </div>
                <div className="form-group btn" id="pay-now">
                    <button type="submit" className="btn btn-default" id="confirm-purchase">Donate Now!</button>
                </div>
            </form>
        </div>
    </div>
  </div>
    </div>
  </div>




  
</section>
)

export default DonationBox
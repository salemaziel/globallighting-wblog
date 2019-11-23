import React from 'react';
import '../css/main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/about2.css'

import '../css/HomePageCss/aboutUs.css'

import Solarpanelmtns from '../images/1-solarpanelmtns.jpg'
import Jacksrs from '../images/jack-serious.jpg'

const About2 = () => (
    <section className="section-about">
      <div className="container-fluid cfabout">
            
        <div className="container">
            <div className="row">
                <div className="col-md-12 cx_about">
                  <div className="blurb">
                    <h2>
                        ABOUT OUR ORGANIZATION
                    </h2>
                    <h3>
                        About the Global Lighting Project
                    </h3>
                        <p>
                        Originally founded in 2016 in San Diego, California, the Global Lighting Project team first set out to bring energy and light to impoverished communities in India, where many live daily without access to light or electricity 

                        <br>
                        </br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        </div>
                </div>
            </div>
        </div>
        </div>
        <div class="container aboutjack" style={{
                                  marginTop: '2em',
                                }}>
              <div class="row" style={{
                                  padding: '2em 4em 2em 1em',
                                    }}>
              
                <h1 class="title">Hi, I'm <strong> Jack. </strong></h1>
              
              </div>    

        <div class="row">    
            <div class="col-lg-7">
            <h3>
                Founder and CEO of the Global Lighting Project. I'm a father, musician, and a $(ADJECTIVE). <br />
                <br />
                I'm also small business owner, working in the industry of renewable energy and efficient lighting for over $(NUMBER) years. <br />
                <br />
                I began my interest with lighting at age 17, discovering that that venues were a hundred times more welcoming to me and my band if I designed and built light structures to use at our shows.
                That clever little discovery soon became more than a hobby. I made key contacts with large, high-tech manufacturers, as well as clients looking for large quantities of what I had learned to build. <br />
                <br />
                Several lucky chances and lots of hard work later, I built my first company, $(Company_Name), Later, in 1993(?) I started a new company, LEDPAC, and focused on the amazing emerging technology that is LED lighting. <br />
                <br />
                I have successfully sold this amazing technology for over two decades now through LEDPAC, and the versatility and uses of LED lights still continue to astound me. 
                However, I came to realize that I could do so much more; that it is not only those with money and resources who deserve this technology, not when it has so much potential to benefit the people in ways the rest of us take for granted. <br />
                <br />
                LED and light technology has been here for me as a hobby, passion, and careet, and a I was blessed as kid to have access lights I could build with; I recognize now that not everyone is so lucky. 
                That is why I want to share my passion, my hobby, my life's work with the world, and utilize it to enrich and benefit the lives of others.


            </h3>
                    

            </div>
            
            <div class="col-lg-3">
                <img class="thumbnail" 
                     src={Jacksrs} 
                     alt="" 
                     style={{
                          border: '5px',
                          borderRadius: '180px',
                      }}>
              </img>
              <div style={{
                textAlign: 'center',
              }}>
                <p>
                  <strong>Jack Dubord</strong></p>
                <p>
                  CEO - Founder
                </p>
                <p>
                  <a href="#"><i class="icon-facebook icon-circled icon-bglight active"></i></a>
                  <a href="#"><i class="icon-twitter icon-circled icon-bglight active"></i></a>
                  <a href="#"><i class="icon-linkedin icon-circled icon-bglight active"></i></a>
                </p>

              </div>
            </div>
            <div class="col-lg-12 quote">
                "The Meaning of Life is to Find Your Gift; the Purpose of Life is to Give it Away"

            </div>
          {/**<div class="col-lg-3">
            <div>
              <a href="#" class="thumbnail"><img src="img/dummies/team/2.jpg" alt="" /></a>
              <div>
                <p><strong>Amy Dubord</strong></p>
                <p>
                  Team Member 2
                </p>
                <p>
                  <a href="#"><i class="icon-facebook icon-circled icon-bglight active"></i></a>
                  <a href="#"><i class="icon-twitter icon-circled icon-bglight active"></i></a>
                  <a href="#"><i class="icon-linkedin icon-circled icon-bglight active"></i></a>
                </p>
              </div>
            </div>
            </div>**/}
         

        </div>
    </div>
    
    </section>
)

export default About2

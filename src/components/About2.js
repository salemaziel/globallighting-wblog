import React from 'react';
import '../css/main.css';
import '../css/about2.css'

import '../css/HomePageCss/aboutUs.css'


import Jackonmtn from '../images/jack-edited-3.png'

const About2 = () => (
    <section className="section-about">
      <div className="container-fluid cfabout">
            
        <div className="container">
            <div className="row">
                <div className="col-md-12 cx_about">
                  
                    <h2>
                        ABOUT OUR ORGANIZATION
                    </h2>
                    <h3>
                        About the Global Lighting Project
                    </h3>
                    <div className="blurb">
                        <p>
                        The <strong>Global Lighting Project</strong> is a 501c3 non-profit that is on a mission to ensure all people have access to light, electricity, clean water, and sanitary cooking facilities using cutting edge LED light technology. 
                        </p>
                        <p>
                        
                        
                        Originally founded in 2016 in San Diego, California, the Global Lighting Project team first set out to bring energy and light to impoverished communities in India, where many live daily without access to light or electricity. 

                        <br>
                        </br>
                        The team at Global Lighting Project researches, builds or purchases, and transports this LED technology to local organizations working in the communities we seek to benefit. We act as a supplier, distributor and educator for these local groups, donating LED light kits and educating them on how the technology works, so that they, in turn, can bring that knowledge and technology to their communities to share and teach others. 
                        </p>
                        </div>
                </div>
            </div>
        </div>
        </div>
        <div className="container aboutjack" style={{
                                  marginTop: '2em',
                                }}>
              <div className="row" style={{
                                  padding: '2em 4em 2em 1em',
                                    }}>
              
                <h1 className="title">Hi, I'm <span><strong> Jack </strong></span></h1>
              
              </div>    

        <div className="row">    
            <div className="col-lg-7">
            <h3>
                Founder and CEO of the Global Lighting Project. I'm a father, musician, and an entrepreneur. <br />
                <hr />
                As a business owner, I have been working in the industry of renewable energy and efficient lighting for over 20 years. <br />
                <hr />
                I began my interest with lighting at age 17, discovering that venues were a hundred times more welcoming to me and my band if I designed and built light structures to use at our shows.
                That clever little discovery soon became more than a hobby. I made key contacts with large, high-tech manufacturers, as well as clients looking for large quantities of what I had learned to build. <br />

                Several lucky chances and lots of hard work later, I built my first company, SLN Signs. Later, in 2004 I started a new company, LEDPAC, and focused on the amazing emerging technology that is LED lighting. <br />
                <hr />
                {/**I have successfully sold this amazing technology for over two decades now through LEDPac, and the versatility and uses of LED lights still continue to astound me. 
                However, I came to realize that I could do so much more; that it is not only those with money and resources who deserve this technology, not when it has so much potential to benefit the people in ways the rest of us take for granted. <br />
                <hr />
                LED and light technology has been here for me as a hobby, passion, and career, and I was blessed as a kid to have access to lights I could build with; I recognize now that not everyone is so lucky. 
                That is why I want to share my passion, my hobby, my life's work with the world, and utilize it to enrich and benefit the lives of others.
                **/}

            </h3>
              

            </div>
            
            
            <div className="col-lg-3">
                <img className="thumbnail" 
                     src={Jackonmtn} 
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
                  <span><strong>Jack Dubord</strong></span></p>
                <p>
                  CEO - Founder
                </p>

              </div>
            
            </div>
            <div className="col-lg-12">
              <h3>
                I have successfully sold this amazing technology for over two decades now through LEDPac, and the versatility and uses of LED lights still continue to astound me. 
                However, I came to realize that I could do so much more; that it is not only those with money and resources who deserve this technology, not when it has so much potential to benefit the people in ways the rest of us take for granted. <br />
                <hr />
                LED and light technology has been here for me as a hobby, passion, and career, and I was blessed as a kid to have access to lights I could build with; I recognize now that not everyone is so lucky. 
                That is why I want to share my passion, my hobby, my life's work with the world, and utilize it to enrich and benefit the lives of others.
                </h3>
            </div>
            <div className="col-lg-12 quote">
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

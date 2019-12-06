import React from 'react'
import PinkDotsImage from '../../images/pink-dots.png'


import LiveOneImage from '../../images/IMG_1862-edited.jpg'
import LiveTwoImage from '../../images/productlineup-resized.jpg'
import LiveThreeImage from '../../images/1-myanmar.jpg'

import '../../css/HomePageCss/aboutUs.css'

const AboutUs = () => (
    <section className="section-two" style={{
        backgroundImage: `url(${PinkDotsImage})`,
    }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6 cx_left">
                    <div className="row">
                        <div className="col-6"><img src={LiveOneImage} alt="Live-one" className="img-fluid" /></div>
                        <div className="col-6"><img src={LiveTwoImage} alt="Live-two" className="img-fluid" /></div>
                        <div className="col-12"><img src={LiveThreeImage} alt="Live-three" className="img-fluid" /></div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 cx_right">
                    <h2>
                        ABOUT GLOBAL LIGHTING PROJECT
                </h2>
                    <h3>
                        About Us
                </h3>
                    <p>
                    Global Lighting project is a 501c3 non-profit that is on a mission to ensure all people have access to light, electricity, clean water, and sanitary cooking facilities using cutting edge LED light technology. 
                    <br />
                    The team at Global Lighting Project researches, builds or purchases, and transports this LED technology to local organizations working in the communities we seek to benefit. We act as a supplier, distributor and educator for these local groups, donating LED light kits and educating them on how the technology works, so that they, in turn, can bring that knowledge and technology to their communities to share and teach others. 

                    
                    </p>
                    <a href="/about">Learn More</a>
                </div>
            </div>
        </div>
    </section>
)

export default AboutUs

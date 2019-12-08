import React from 'react'

import WhatWeDoImage from '../../images/whatwedo-multi.png'
import Truck from '../../images/vector-graphics/truck-md.png'
import Classroom from '../../images/vector-graphics/classroom.png'
import Research from '../../images/vector-graphics/science.png'


import '../../css/HomePageCss/whatWeDo.css'

const WhatWeDo = () => (
    <section className="section-five">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="cx_left"><img alt="what-we" src={WhatWeDoImage} className="img-fluid" /></div>
                </div>
                <div className="col-md-6">
                    <div className="cx_right">
                        <h2>OUR Mission</h2>
                        <h3>What We Do</h3>
                        <div className="cx_list">
                            <div className="cx_icon"><img alt="what-we" src={Truck} className="img-fluid" /></div>
                            <h4>Supply and Distribute LED Tech to Community Organizers</h4>
                            <p>
                                
                        </p>
                        </div>
                        <div className="cx_list">
                            <div className="cx_icon"><img alt="what-we" src={Classroom} className="img-fluid" /></div>
                            <h4>Teach Sustainability, Renewable Energy, & Technology Training</h4>
                            <p>
                               
                        </p>
                        </div>
                        <div className="cx_list">
                            <div className="cx_icon"><img alt="what-we" src={Research} className="img-fluid" /></div>
                            <h4>Research & Development: Looking Toward the Future</h4>
                            <p>
                                
                        </p>
                        </div>
                        <div className="cx_list">
                            {/**<div>
                                <img src={Bulbplant} />
                            </div>**/}
                            {/**<div className="cx_icon"><img alt="what-we" src={IconFour} className="img-fluid" /></div>
                            <h4>Listen. </h4>
                            <p>
                                Lorem Ipesum  Lorem Ipesum Lorem Ipesum Lorem Ipesum
                                Lorem Ipesum  Lorem
                            </p>**/}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
)

export default WhatWeDo

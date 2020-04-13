import React from 'react'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import '../../css/HomePageCss/actionComponent.css'

const ActionComponent = () => (
    <section
        className="section-four">
	<div className="container-fluid">
    	<div className="row">
        	<div className="col-md-7">
            	<div className="cx_left">
                	<h2>
                    The World Changes Together, <br />
                    No One Can Do It Alone. <br />
                    </h2>
                    <h3>
                    Help Us Empower Others.<br />
                    Let's Ensure A Brighter <br />
                    World For Everyone.
                    </h3>    
                        
                    
                </div>
            </div>
            <div className="col-md-5">
            	<div className="cx_right">
                	<div className="row">
                    	<div className="col-lg-6">
                        	<a href="https://donorbox.org/fighting-covid-19-with-ultraviolet-led-light" className="involve">
                                Donate now
                                <span style={{
                                        position:'absolute',
                                        right:'15px',
                                        lineHeight:'50px'
                                    }}>
                                <FontAwesomeIcon
                                    icon={faAngleRight}

                                />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
)

export default ActionComponent

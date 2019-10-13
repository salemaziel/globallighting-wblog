import React from 'react'
import PinkDotsImage from '../../images/pink-dots.png'

import GlbImage from '../../images/glb.png'
import SolarImage from '../../images/soalr.png'
import LightsImage from '../../images/lightslight.png'
import StreetLightImage from '../../images/street-light.png'
import MicrolightImage from '../../images/microlight.png'
import ContainedSolarImage from '../../images/containedsolar.png'
// import ContainedSolarImage from '../../images/containedsolar.png'
import Box from '../box'
import '../../css/box.css'

import '../../css/HomePageCss/synergy.css'

const Synergy = () => (
    <section className="section-three" >
    <div className="row">
        	<div className="col-lg-12">
            	<h2>
                	OUR products
                </h2>
                <h3>
                	The Technology That Makes it Possible
                </h3>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
        	    <Box />
            </div>
        </div>
</section>
)

export default Synergy

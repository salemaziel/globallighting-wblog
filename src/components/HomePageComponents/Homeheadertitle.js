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

import '../../css/HomePageCss/homeheadertitle.css'

const Homeheadertitle = () => (
    <section className="hheader">
    <div className="row headline">
        <div className="container-fluid">
        	<div className="col-md-12">
            	<h2>
                We believe in a <span className="greenText">sustainable</span> world, where life can <span className="orangeTextTitle">thrive</span>
                </h2>
                <div className="container">
                    <h3>
                        Over 1.6 Billion people still live without reliable access to electricity, clean water, sanitary cooking facilities, or the resources necessary to grow food for themselves or their families.
                        Using the power of renewable energy, revolutionary LED light solutions, and technology workshops in developing communities, <span className="orangeTextSubtitle">the Global Lighting Project is on a mission to change that.</span>
                    </h3>
                </div>
            </div>
        </div>
    </div>
    
</section>
)

export default Homeheadertitle

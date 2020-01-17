import React from 'react'
//import PinkDotsImage from '../../images/pink-dots.jpg'

//import GlbImage from '../../images/glb.jpg'
//import SolarImage from '../../images/soalr.jpg'
//import LightsImage from '../../images/lightslight.jpg'
//import StreetLightImage from '../../images/street-light.jpg'
//import MicrolightImage from '../../images/microlight.jpg'
//import ContainedSolarImage from '../../images/containedsolar.jpg'
// import ContainedSolarImage from '../../images/containedsolar.jpg'

import Box from '../box'
import '../../css/box.css'

import '../../css/HomePageCss/synergy.css'

const Synergy = () => (
    <section className="synergy" >
    <div className="row headline">
        <div className="container-fluid">
        	<div className="col-md-12">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h4 className='synergy headline'>
                            Bringing Light, the capacity to Grow Nutritious Food, and Clean Water Using <span className="orangeTextTitle"> LED Light Technology</span>

                        </h4>
                    </div>
                </div>
           </div>
        </div>

    </div>
        <div className="row box">

            {/**<div className="col-lg-12">**/}
        	    <Box />
            {/**</div>**/}
        </div>
        
</section>

)

export default Synergy

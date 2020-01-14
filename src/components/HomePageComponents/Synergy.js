import React from 'react'
//import PinkDotsImage from '../../images/pink-dots.webp'

//import GlbImage from '../../images/glb.webp'
//import SolarImage from '../../images/soalr.webp'
//import LightsImage from '../../images/lightslight.webp'
//import StreetLightImage from '../../images/street-light.webp'
//import MicrolightImage from '../../images/microlight.webp'
//import ContainedSolarImage from '../../images/containedsolar.webp'
// import ContainedSolarImage from '../../images/containedsolar.webp'

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

import React from 'react'
import ReactGridHover from 'react-grid-hover';
import config from './modalpicsconfig'
import Grow2plants from '../images/growlight/growlightpurple2plants.jpg'
import Ledgrowstrip from '../images/growlight/LED grow strip ligh1.jpg'
import Spectrum from '../images/growlight/spectrum-growlights.jpg'
import Upclosestrip from '../images/growlight/upclosegrowlightstrip.jpg'

//use it as follows:

/*const config = {
	itemSize: '2em', // Standard is 50px, unit may vary
	design: 'flat', //standard is none, 'flat' is alternative
    scaleFactor: 1.5, // standard is 1.1, can be changed
};*/


const Modal02pics = () => (
<ReactGridHover {...config} >

    <img src={Grow2plants} alt='altAttribute' />
    <img src={Ledgrowstrip} alt='altAttribute' />
    <img src={Spectrum} alt='altAttribute' />
    <img src={Upclosestrip} alt='altAttribute' />
</ReactGridHover>
)

export default Modal02pics
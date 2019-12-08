import React from 'react'
import ReactGridHover from 'react-grid-hover';
import config from './modalpicsconfig'
import Img7595 from '../images/whiteled/IMG_7595.jpg'
import Img7598 from '../images/whiteled/IMG_7598.jpg'
import Img7600 from '../images/whiteled/IMG_7600.jpg'
import Img7609 from '../images/whiteled/IMG_7609.jpg'

//use it as follows:

/*const config = {
	itemSize: '2em', // Standard is 50px, unit may vary
	design: 'flat', //standard is none, 'flat' is alternative
    scaleFactor: 1.5, // standard is 1.1, can be changed
};*/


const Modal01pics = () => (
<ReactGridHover {...config} >

    <img src={Img7595} alt='altAttribute' />
    <img src={Img7598} alt='altAttribute' />
    <img src={Img7600} alt='altAttribute' />
    <img src={Img7609} alt='altAttribute' />
</ReactGridHover>
)

export default Modal01pics
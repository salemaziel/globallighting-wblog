import React from 'react'
import ReactGridHover from 'react-grid-hover';
import config from './modalpicsconfig'
import Img1body from '../images/whiteled/1bodylightfront.jpg'
import Img5indoor from '../images/whiteled/5indoorESLsolarLED.jpg'
import Img6indoor from '../images/whiteled/6indoor.jpg'
import Img75solar from '../images/whiteled/7.5solar.jpg'
import Img7indoor from '../images/whiteled/7indoor.jpg'
import Img1860 from '../images/whiteled/8IMG1860.jpg'
import Img1862 from '../images/whiteled/10IMG1862.jpg'
import Img1867 from '../images/whiteled/11IMG1867.jpg'



//use it as follows:

/*const config = {
	itemSize: '2em', // Standard is 50px, unit may vary
	design: 'flat', //standard is none, 'flat' is alternative
    scaleFactor: 1.5, // standard is 1.1, can be changed
};*/


const Modal01pics = () => (
<ReactGridHover {...config} >

    <img src={Img1body} alt='altAttribute' />
    <img src={Img5indoor} alt='altAttribute' />
    <img src={Img6indoor} alt='altAttribute' />
    <img src={Img75solar} alt='altAttribute' />
    <img src={Img7indoor} alt='altAttribute' />
    <img src={Img1860} alt='altAttribute' />
    <img src={Img1862} alt='altAttribute' />
    <img src={Img1867} alt='altAttribute' />
</ReactGridHover>
)

export default Modal01pics
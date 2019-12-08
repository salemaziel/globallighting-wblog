import React from 'react'
import ReactGridHover from 'react-grid-hover';
import config from './modalpicsconfig'
import Waterstraws from '../images/uvlight/waterstraws.jpeg'


//use it as follows:

/*const config = {
	itemSize: '2em', // Standard is 50px, unit may vary
	design: 'flat', //standard is none, 'flat' is alternative
    scaleFactor: 1.5, // standard is 1.1, can be changed
};*/


const Modal03pics = () => (
<ReactGridHover {...config} >
    <img src={Waterstraws} alt='altAttribute' />
    <img src={Waterstraws} alt='altAttribute' />
    <img src={Waterstraws} alt='altAttribute' />
    <img src={Waterstraws} alt='altAttribute' />
</ReactGridHover>
)

export default Modal03pics
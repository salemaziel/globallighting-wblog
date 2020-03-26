import React from 'react'
import Gallery from "react-photo-gallery";
import { render } from 'react-dom'
import { photos } from './pics'

//const Modalpics101 = () => (
class Modalpics101 extends React.Component {
    render() {
        return (
<div>
    <Gallery photos={photos} /*onClick={openLightbox}*/ style={{ display: 'flex', flexDirection: 'column'}} />
    </div>
)
        }
    }

export default Modalpics101
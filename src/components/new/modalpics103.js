import React from 'react'
import Gallery from "react-photo-gallery";
import { photos3 } from './pics3'

//const Modalpics101 = () => (
class Modalpics103 extends React.Component {
    render() {
        return (
<div>
    <Gallery photos={photos3} /*onClick={openLightbox}*/ style={{ display: 'flex'}} />
    </div>
)
        }
    }

export default Modalpics103
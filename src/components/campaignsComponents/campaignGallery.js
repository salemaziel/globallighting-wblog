import React from 'react'
import Gallery from "react-photo-gallery";
import { campaignphotos } from './campaignphotos'


//const Modalpics101 = () => (
class CampaignGallery extends React.Component {
    render() {
        return (
            <>
<div>
    <Gallery photos={campaignphotos} /*onClick={openLightbox}*/ style={{ display: 'flex'}} />
    </div>
</>
)
        }
    }

export default CampaignGallery
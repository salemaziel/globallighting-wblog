import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from '../button'
import DataCards from './dataCards'

const CampaignSection4 = () => (
    <div className="dataCardSection" /*style={{marginTop: '10rem'}}*/>
        <Container type="content" className="text-center home-start">
               <DataCards />
               <p>Source:<em> <a href="https://www.worldometers.info/coronavirus/">https://www.worldometers.info/coronavirus</a></em></p>


        </Container>
    </div>
)

export default CampaignSection4
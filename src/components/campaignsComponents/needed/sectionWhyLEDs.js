import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from '../../button'
import LEDversus from '../../../images/ledvsothers.png'
import Lightspectrum from '../../../images/lightspectrum.jpg'

import {   Twentyfive_1,
  Twentyfive_2,
  Fifty_1,
  Fifty_2,
  Sixtyfour_1,
  Sixtyfour_2,
  SixFourZero_1,
  SixFourZero_2,
  OneTwentyEight_1,
  OneTwentyEight_2,
  TwentyFive_BlackBG,
  TwentyFive_BlackSquare,
  TwentyFive_VertSquare,
  OneTwentyEight_VertSquare,
  Fifty_VertSquare,
  Sixtyfour_VertSquare,
  Sixtyfourzero_VertSquare,

 Covid19UVMask, Covid19Masks, WholeRoom_1_1 }
  from '../../../images/index'

const WhyLEDs = () => (
    <section>
        <Container className="sectionTwoBg">
        <Row className="sectionTwoRow">

        <Col className="colWhyLEDs" >
            <div className="galleryCaption" style={{verticalAlign: 'middle'}}>
                <h3>Why LEDs?</h3>
                <br />
                <p>
              LED lights offer a quick and highly energy efficient method of
              delivering ultraviolet rays compared to traditional mercury UV
              lamps. In addition, they turn on instantaneously, contain no
              mercury, and require only{" "} TESTing`
              <strong>
                5-10% of the energy required by traditional UV lamps.{" "}
              </strong>
              </p>
              <br />
              <br />

                {/*<h3>
                    What Exactly Are LEDs?
                </h3>
                <p>
                LEDs, or Light-emitting diodes (LEDs) are semiconductors consisting of a  stable structure or substrate, such as silicon or sapphire, covered (or doped) in precise materials, which are alternatively missing or supplying electrons from their outer shell. 
                As a voltage is applied, the  free electrons flowing  through the circuit  “fall” into the microscopic holes – or spaces in the electron ring – due to impurities in the doped substrate. By falling into a lower energy state, they release their excess energy in the form of light.</p>
                {/*The wavelength or color released can depend on the bandgap, or drop in energy, between the materials.
                </p>*/}
               </div>
               </Col>
                <Col className="colWhyLEDs" >
                <div>
                  
                <img src={Covid19Masks} className="lightspectrum" />



          </div>


                </Col>
                
                
               

            </Row>

        </Container>
    </section>
)

export default WhyLEDs
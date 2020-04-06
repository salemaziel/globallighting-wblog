import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from '../button'
import LEDversus from '../../images/ledvsothers.png'

const CampaignSectionTwoFive = () => (
    <section>
        <Container className="sectionTwoBg">
        <Row className="sectionTwoRow">

        <Col className="colCampaignGallery">
            <div style={{verticalAlign: 'middle'}}>
                <h3>Why LEDs?</h3>
                <br />
                <p>
              LED lights offer a quick and highly energy efficient method of
              delivering ultraviolet rays compared to traditional mercury UV
              lamps. In addition, they turn on instantaneously, contain no
              mercury, and require only{" "}
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
                <Col className="colCampaignGallery">
                <div>
            <img src={LEDversus} className="LEDvsTable" />
          </div>
                </Col>
                
                
               

            </Row>

        </Container>
    </section>
)

export default CampaignSectionTwoFive
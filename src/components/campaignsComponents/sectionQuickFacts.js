import React from "react"
import { Container, Row, Col } from "reactstrap"
import Button from "../button"
import LEDversus from "../../images/ledvsothers.png"

import CampaignGallery2 from "./campaignGallery2"

const QuickFacts = () => (
  <section>
    <Container className="sectionTwoBg">
      <Row className="sectionTwoRow">
        <Col className="colCampaignGallery">
          <CampaignGallery2 />
        </Col>
        <Col className="colCampaignGallery">
          {/*} <h2 style={{textAlign: 'center'}}>UV-C Light as a Disinfectant</h2>*/}
          <h2 style={{ textAlign: "center" }}>Quick Facts </h2>
          <ul className="quickfacts">
            <br />
            <li>
              COVID-19 infections can be caused by contact with contaminated
              surfaces followed by touching of facial areas and has been
              found able to live on plastic and steel surfaces <strong><a href="https://cdc.gov"> to 3 days.
              [1,2] </a></strong> 
            </li>
            <br />ov
            <li>
              UV-C light has been used <strong>for over 40 years </strong> to disinfect drinking
              water, waste water, air, pharmaceutical products, and surfaces
              against a wide range of human pathogens. To date, hundreds of
              various bacteria and viruses tested have been shown to be
              responsive to UV disinfection at various doses. [3]
            </li>
            <br />
            <li>
              UV-C light in the range of 200-280nm has been <strong>shown to inactivate
              SARS-CoV-1 and MERS-CoV,</strong> two other coronaviruses that are
              near-relatives of the CoVid-19 coronavirus we face today.[2,3]
            </li>
            <br />
           {/* <li>
              LED lights offer a quick and highly energy efficient method of
              delivering ultraviolet rays compared to traditional mercury UV
              lamps. In addition, they turn on instantaneously, contain no
              mercury, and require only{" "}
              <strong>
                5-10% of the energy required by traditional UV lamps.{" "}
              </strong>
           </li>*/}
          </ul>
        </Col>
      </Row>
    </Container>
  </section>
)

export default QuickFacts



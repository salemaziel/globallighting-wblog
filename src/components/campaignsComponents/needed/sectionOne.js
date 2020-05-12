import React from "react"
//import { Container } from "reactstrap"
import Container from "react-bootstrap/Container"

import Button from "../../button"
//import CampaignSection4 from "../sectionFour"
import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"
import MLNews from "./microlinkNews"

const CampaignSection1 = () => (
  <section>
    <Container className="sectionOneBg">
      <Row className="sectionOneRow">
        <Col className="colCampaignAbout">
          <h1>Life Has Changed - For All Of Us.</h1>
          <p>
            The COVID-19 virus has spread around the globe at a relentlessly
            fast pace. It is highly contagious, remaining alive on contaminated
            surfaces for up to 3 days [1]. This allows it to spread quickly by
            carriers unaware they’ve even been exposed – especially healthcare
            workers.
            {/*The COVID-19 virus has spread around the globe at a relently fast pace, unprecedented in modern times. It is highly contagious, remaining alive on contaminated surfaces for days, and is able to be spread widely and quickly by unaware carriers, due to its incubation period lasting up to 14 days.*/}
          </p>
          <br />
          <h4>
            <span>
              The new normal isn’t normal. And everyone is looking for a
              solution.
            </span>
          </h4>
          <br />
          <h3>
            <em>We Have a Solution</em>: UltraViolet LED Lights
          </h3>
        </Col>
      </Row>

      <Row className="sectionOneRow">
        <Col className="colCampaignAbout">
          <p>That’s right. </p>
          <p>
            UltraViolet light (UV) is a known disinfectant for water, air, and
            other surfaces. When applied correctly, it can be used to mitigate
            the risk by inactivating viral pathogens, two of which include the
            genetically-related SARS-CoV-1 and MERS-CoV coronaviruses [2,3].
            With access to powerful UV-C LED lights, the Global Lighting Project
            is in a unique position to supply aid to our healthcare workers and
            help save lives.
          </p>

          <h2>WE’RE READY AND WILLING TO LEND A HAND</h2>
          <br />
          <p>
            <strong>
              <em>But we need your help.</em>
            </strong>
          </p>
        </Col>
      </Row>
      <Row className="CampaignAboutRow2">
        <Col className="colCampaignAbout2">
          {/*<Col className="boxDonateOuter">*/}
          <Container className="boxDonateInner">
            <h2>There's No Time To Waste!</h2>
            {/*<p>
              Your donation today will go directly to research, testing,
              manufacturing, and distributing our disinfecting LED light
              instruments to hospitals and other healthcare facilities around
              the nation.
            </p>*/}
            <p style={{textAlign: 'left'}}>
              Join the fight to save thousands of lives from COVID-19.make your
              donation today to assist us in mass producing and supplying UV LED
              disinfecting equipment to our first responders on the front lines.
            </p>
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <Button
                campaign
                href="https://donorbox.org/fighting-covid-19-with-ultraviolet-led-light"
              >
                Donate Now
              </Button>
            </div>
          </Container>
        </Col>
        <Col className="colCampaignAbout2">
          <h3>Who We Are</h3>
          <p>
            <span>
              The Global Lighting project is a 501c3 non-profit organization
              whose mission is to ensure all people have access to light,
              electricity, clean water, and sanitary cooking facilities by using
              cutting edge LED light technology. Originally founded in 2016, the
              Global Lighting Project team first set out to bring energy and
              light to impoverished communities in India, where many live daily
              without access to light or electricity.
            </span>
          </p>
          <p>
            <br />
            However, given recent events we are pivoting to shift our focus to
            help joing the fight against the global pandemic by transporting
            this LED technology to wherever it’s needed most.
          </p>
        </Col>
      </Row>
      <Row className="sectionOneRow">
        <Col className="colCampaignAbout">
          <h2>How Does It Work?</h2>
          <br />
          <p style={{textAlign: 'left'}}>
            UV-C LED light-fitted COVID-19 killing wands. We are finalizing
            research on the most efficient and cost-effective method to
            distribute instruments fitted with UV-C LED light diodes. Currently,
            one of our favored solutions is an industrial wand with LED diodes
            attached to one side.
          </p>
          <p style={{textAlign: 'left'}}>
            Medical equipment such as masks, gowns, and various hospital surface
            areas could be disinfected on demand by a single person, waving the
            wand slowly over the exposed surface area.
          </p>
          <p style={{textAlign: 'left'}}>
            Other solutions include light structures with powerful LED diodes
            facing all directions that can be turned on and off remotely. These
            structures can be placed in hospital rooms or other enclosed areas
            and turned on for a short period of time to disinfect everything in
            the room the light touches.
          </p>

          <p>
            <strong>
              <em>And this is where you come in.</em>
            </strong>
          </p>
          <p>You can help change the world.</p>
          <p>
            As a nonprofit, we rely on community support to do what we do best –
            supply LED light to the rest of the world. Your gift, no matter how
            small, will help us be a shining light during this difficult time
            because our light can kill COVID-19!
          </p>
        </Col>
      </Row>
      <div className="NoMobile">
        <h2 style={{ margin: "1rem auto", padding: "1rem" }} className="">
          In The News: Ultra Violet Light As A Disinfectant:
        </h2>
        <MLNews className="NoMobile" />
      </div>
    </Container>
  </section>
)

export default CampaignSection1

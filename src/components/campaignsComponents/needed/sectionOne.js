import React from "react"
import { Container } from "reactstrap"
import Button from "../../button"
//import CampaignSection4 from "../sectionFour"
import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"

const CampaignSection1 = () => (
  <section>
    <Container className="sectionOneBg">
      <Row className="sectionOneRow">
        <Col className="colCampaignAbout">
          <h1>Life Has Changed - For All Of Us.</h1>
          <p>
            The COVID-19 virus has spread around the globe at a relentlessly
            fast pace. It is highly contagious, remaining alive on contaminated
            surfaces for up to 14 days. This allows it to spread quickly by
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
         
          {/*} <p>
            The COVID-19 virus has spread around the globe at a relently fast pace, unprecedented in modern times. It is highly contagious, remaining alive on contaminated surfaces for days, and is able to be spread widely and quickly by unaware carriers, due to its incubation period lasting up to 14 days.
            </p>
            <p>
            Healthcare workers are especially at risk. With emergency equipment like masks and ventilators in short supply nation-wide, hospitals need other solutions to keep our doctors, nurses, and other staff as safe from catching the very disease they are trying to treat.
            </p>
            <br />
            <p style={{textAlign: 'center'}}>
            <strong>Our solution: UltraViolet LED Lights.</strong></p><br /><p>
            
            UV is a known disinfectant for water, air, and other surfaces, and when applied correctly can be used to mitigate the risk of both viral and bacterial pathogens, two of which include the genetically-related SARS-CoV-1 and MERS-CoV coronaviruses.
            <br />
          </p>
          <p>
            With access to powerful UV-C LED lights, the Global Lighting Project is in a unique position to supply aid to some of the unsung heroes of our society that are healthcare workers.
          </p>
          <p>
              <strong><em>But we need your help.</em></strong>
          </p>*/}
          {/*old above */}
          <h4>About Our COVID-19 Campaign</h4>
          <p>
            The COVID-19 virus has spread around the globe at a relentlessly
            fast pace. It is highly contagious, remaining alive on contaminated
            surfaces for up to 14 days. This allows it to spread quickly by
            carriers unaware they’ve even been exposed – especially healthcare
            workers.
            {/*The COVID-19 virus has spread around the globe at a relently fast pace, unprecedented in modern times. It is highly contagious, remaining alive on contaminated surfaces for days, and is able to be spread widely and quickly by unaware carriers, due to its incubation period lasting up to 14 days.*/}
          </p>


          <p>
            That’s right. </p>
              <p>
            UltraViolet light (UV) is a known disinfectant for water, air, and
            other surfaces. When applied correctly, it can be used to mitigate
            the risk of both viral and bacterial pathogens, two of which include
            the genetically-related SARS-CoV-1 and MERS-CoV coronaviruses. With
            access to powerful UV-C LED lights, the Global Lighting Project is
            in a unique position to supply aid to our healthcare workers and
            help save lives.
          </p>

          {/*} <p>
            Healthcare workers are especially at risk. With emergency equipment like masks and ventilators in short supply nation-wide, hospitals need other solutions to keep our doctors, nurses, and other staff as safe from catching the very disease they are trying to treat.
        </p>*/}
          <br />
          {/*<p style={{ textAlign: "center" }}>
            <strong>Our solution: UltraViolet LED Lights.</strong>
          </p>
          <br />
          <p>
            UV is a known disinfectant for water, air, and other surfaces, and
            when applied correctly can be used to mitigate the risk of both
            viral and bacterial pathogens, two of which include the
            genetically-related SARS-CoV-1 and MERS-CoV coronaviruses.
            <br />
          </p>
          <p>
            With access to powerful UV-C LED lights, the Global Lighting Project
            is in a unique position to supply aid to some of the unsung heroes
            of our society that are healthcare workers.
      </p>*/}
          {/*<p>
            <strong>
              <em>But we need your help.</em>
            </strong>
          </p>*/}

          {/*<h4>Why LEDs?</h4>
          <p>
            LED lights offer a quick and highly energy efficient method of
            delivering ultraviolet rays compared to traditional mercury UV
            lamps. In addition, they turn on instantaneously, contain no
            mercury, and require only 5-10% of the energy required by
            traditional UV lamps.
          </p>*/}
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
            <h2>Give What You Can</h2>
            <p>
              Your donation today will go directly to research, testing,
              manufacturing, and distributing our disinfecting LED light
              instruments to hospitals and other healthcare facilities around
              the nation.
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
            <p><span>
              The Global Lighting project is a 501c3 non-profit organization
              whose mission is to ensure all people have access to light,
              electricity, clean water, and sanitary cooking facilities by using
              cutting edge LED light technology. Originally founded in 2016, the
              Global Lighting Project team first set out to bring energy and
              light to impoverished communities in India, where many live daily
              without access to light or electricity.</span></p>
              <p>
              <br />
              Today, however, we’re ready and willing to shift our focus to help
              meet the global pandemic by transporting this LED technology to
              wherever it’s needed most.
            </p>
        </Col>
      </Row>
      {/*<Row>
        <CampaignSection4 />
      </Row>*/}
    </Container>
  </section>
)

export default CampaignSection1

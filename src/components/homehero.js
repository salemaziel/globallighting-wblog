import React from 'react'
//import '../css/carrd.css'

import Image04 from '../images/image04.png'
import Modalmailing from './modalmailing'

import { Container, Row } from 'reactstrap'



const Homehero = () => (
<div id="wrapper">
  <div id="main">
    <div className="inner">
      <section id="home-section">
        <div id="columns02" className="container default">
          <div className="inner">
            <div id="image04" className="image">
              <img src={Image04} alt='' />
            </div>
            <h1 id="text01">
              <mark>Global lighting Project</mark>
            </h1>
            <h2 id="text04">
              <strong>Empowering The World</strong>
            </h2>
            <hr id="divider03" />
          </div>
        </div>
        <Container>
        <p id="text08">
          {/**<span>Over 1.6 Billion people still live without reliable access to electricity, clean water, sanitary cooking facilities, or the resources necessary to grow food for themselves or their families. Using the power of renewable energy, revolutionary LED light solutions, and technology workshops in developing communities, the Global Lighting Project is on a mission to change that.</span>**/}
          <br />
          <br />
          <span>Alternative Energy Will Change The World.

            <br />
            <br />
            We work with community-local organizations to supply renewable, LED solar-powered lighting and energy solutions directly to where they are needed</span>
        </p>
        </Container>
        <hr id="divider01" />
        <Container id="container02" className="container default">
          <div>
            <h3 id="text06">Donate Now and Join Our Mailing List to Join Us on Our Mission</h3>
          </div>
        </Container>
        <div id="container01" className="container columns" style={{
                                                              paddingLeft: '0',
                                                              paddingRight: '0',
        }}>
          <Container style={{margin: '1rem 0', padding: '1rem 0'}}>
            <Row style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <div>
              <div id="embed04">
                <a className="dbox-donation-button" href="https://donorbox.org/fighting-covid-19-with-ultraviolet-led-light">Donate</a>
              </div>
            </div>
            <div>
                  <Modalmailing />
            </div>
            </Row>
          </Container>
        </div>
        
       
      </section>
      
    </div>
  </div>
</div>


)

export default Homehero
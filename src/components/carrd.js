import React from 'react'
import '../css/carrd.css'

import Image04 from '../images/image04.png'
import Modalmailinglist from './modalmailinglist'

const Carrd = () => (
<div id="wrapper">
  <div id="main">
    <div className="inner">
      <section id="home-section">
        <div id="columns02" className="container default">
          <div className="inner">
            <div id="image04" className="image">
              <img src={Image04} alt="" />
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
        <p id="text08">
          <span>Over 1.6 Billion people still live without reliable access to electricity, clean water, sanitary cooking facilities, or the resources necessary to grow food for themselves or their families. Using the power of renewable energy, revolutionary LED light solutions, and technology workshops in developing communities, the Global Lighting Project is on a mission to change that.</span>
          <br />
          <br />
          <span>We  work towards reducing the number of such people by providing renewable, LED solar-powered lighting solutions directly to these communities, in alignment with our philosophy and support of self-developing communities.</span>
        </p>
        <hr id="divider01" />
        <div id="container02" className="container default">
          <div className="inner">
            <h3 id="text06">Donate Now and Join Our Mailing List to Join Us on Our Mission</h3>
          </div>
        </div>
        <div id="container01" className="container columns" style={{
                                                              paddingLeft: '0',
                                                              paddingRight: '0',
        }}>
          <div className="inner">
            <div>
              <div id="embed04">
                <a className="dbox-donation-button" style={{background: '#ffc529', color: '#fff', textDecoration: 'none', fontFamily: 'Montserrat,sans-serif', margin: 'auto', display: 'flex', textTransform: 'uppercase', textAlign: 'center', width: '16rem', height: '3.25rem', verticalAlign: 'middle', alignItems: 'center', justifyContent: 'center', lineHeight: '3.25rem', fontSize: '0.875em', letterSpacing: '0.275rem', fontWeight: 900, padding: '0 1.625rem', WebkitBorderRadius: 2, MozBorderRadius: 2, borderRadius: '0.25rem', textShadow: '0 1px rgba(0, 0, 0, 0.3)', transition: 'color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease'}} href="https://donorbox.org/global-lighting-project">Donate</a>
              </div>
            </div>
            <div>
              <ul id="buttons03" className="buttons">
                <li>
                  <a className="button n01" href="#"><Modalmailinglist>Mailing List</Modalmailinglist></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/**<ul id="icons01" className="icons">
          <li>
            <a className="n01" href="https://twitter.com/">
              <svg>
                <use xlinkHref="#icon-905" />
              </svg>
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a className="n02" href="https://facebook.com/">
              <svg>
                <use xlinkHref="#icon-906" />
              </svg>
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a className="n03" href="https://instagram.com/">
              <svg>
                <use xlinkHref="#icon-910" />
              </svg>
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a className="n04" href="mailto:%6a%61%63%6b%40%67%6c%6f%62%61%6c%6c%69%67%68%74%69%6e%67%70%72%6f%6a%65%63%74%2e%63%6f%6d">
              <svg>
                <use xlinkHref="#icon-90a" />
              </svg>
              <span className="label">Email</span>
            </a>
          </li>
        </ul>**/}
       
      </section>
      
    </div>
  </div>
</div>


)

export default Carrd
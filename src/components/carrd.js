import React from 'react'
import '../css/carrd.css'

import Image04 from '../images/image04.png'

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
          <span>The advances in science and technology over the past couple of centuries have contributed significantly towards making our lives simple and comfortable. Many of us fail to imagine life without this essential commodity. Electricity is one of these countless inventions, which has today become an integral part of our living. Yet there are still millions of people living without this basic facility.</span>
          <br />
          <br />
          <span>We at Global Lighting Project, work towards reducing the number of such people by providing renewable, LED solar-powered lighting solutions directly to these communities, in alignment with our philosophy and support of self-developing communities.</span>
        </p>
        <hr id="divider01" />
        <div id="container02" className="container default">
          <div className="inner">
            <h3 id="text06">Donate Now and Join Our Mailing List to keep up with us and be the first to know when our full site launches!</h3>
          </div>
        </div>
        <div id="container01" className="container columns">
          <div className="inner">
            <div>
              <div id="embed04">
                <a className="dbox-donation-button" style={{background: '#ffc529', color: '#fff', textDecoration: 'none', fontFamily: 'Montserrat,sans-serif', margin: 'auto', display: 'flex', textTransform: 'uppercase', textAlign: 'center', width: '16rem', height: '3.25rem', verticalAlign: 'middle', alignItems: 'center', justifyContent: 'center', lineHeight: '3.25rem', fontSize: '0.875em', letterSpacing: '0.275rem', fontWeight: 900, padding: '0 1.625rem', WebkitBorderRadius: 2, MozBorderRadius: 2, borderRadius: '0.25rem', textShadow: '0 1px rgba(0, 0, 0, 0.3)', transition: 'color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease'}} href="https://donorbox.org/global-lighting-project-usa">Donate</a>
              </div>
            </div>
            <div>
              <ul id="buttons03" className="buttons">
                <li>
                  <a href="#signup" className="button n01">Mailing List</a>
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
        {/**<p id="text05">
          <em>Global Lighting Project is a certified 501(c)3 Non-Profit Organization</em>
        </p>
    <p id="text03">© Global Lighting Project. All rights reserved.</p>**/}
      </section>
      {/**<section id="signup-section">
        <div id="container03" className="container default">
          <div className="inner">
            <h3 id="text02">Join Our Mailing List to keep up with us and be the first to know when our full site launches!</h3>
            <form id="form01" method="post">
              <div className="inner">
                <div className="field">
                  <input type="email" name="email" id="form01-email" placeholder="Email" maxLength={128} required />
                </div>
                <div className="field">
                  <div className="checkbox">
                    <input type="checkbox" name="consent" id="form01-consent" defaultValue="checked" required />
                    <label htmlFor="form01-consent">
                      <span>I accept the above information will be used to subscribe me to this list.</span>
                    </label>
                  </div>
                </div>
                <div className="field">
                  <input type="text" name="site-url" id="form01-site-url" placeholder="Site Url" maxLength={128} />
                </div>
                <div className="actions">
                  <button type="submit">
                    <svg>
                      <use xlinkHref="#icon-90a" />
                    </svg>
                    <span className="label">Submit</span>
                  </button>
                </div>
              </div>
              <input type="hidden" name="id" defaultValue="form01" />
            </form>
            <ul id="buttons01" className="buttons">
              <li>
                <a href="#home" className="button n01">No thanks</a>
              </li>
            </ul>
          </div>
        </div>
</section>**/}
      {/**<footer id="footer" />**/}
    </div>
  </div>
</div>


)

export default Carrd
import React from 'react'

import '../css/signup.css'


const Signup = () => (
    <section id="signup-section">
        <div id="container03" className="container default">
          <div className="inner">
            <h3 id="text02">Join Our Mailing List to keep up with us and receive the latest updates </h3>
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
</section>
)

export default Signup
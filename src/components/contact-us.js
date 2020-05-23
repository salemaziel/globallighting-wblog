import React from "react"
import { navigate } from "gatsby"


import "../css/contactHero.css"
import "../css/contact.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    <div>
      <section className="section-contacthero">
        <div className="container cx_inner">
          <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="col-12">
              <h1>Get in touch</h1>
              <p className="p">
                Fill out the form below and a Global Lighting Project
                representative will contact you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-contact">
        <div className="container py-5">
          <div
            className="row pb-5 mb-5"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className="col-12 col-md-8">
              {/* Form */}
              <form
                name="Contact"
                method="post"
                action="/thanks"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div
                  className="row mt-5 mb-4"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="Contact" />
             {/*     <p hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p> */}
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Your Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="textarea"
                      name="message"
                      placeholder="Your Message"
                      className="textarea"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <div className="col-12">
                    <button
                      type="submit"
                      value="Send Message"
                      className="form button"
                      onChange={handleSubmit}
                    >
                      SUBMIT{" "}
                    </button>
                  </div>
                </div>
              </form>
              {/* End Form */}
            </div>
            <div className="col-12 col-md-4 mb-5 mb-md-0 mt-5 mt-md-0">
              <aside className="pb-md-5">
                <div className="contact_info">
                  {/**<p className="mb-2">Phone</p>
                                                <p className="mb-2"><a href="tel:#">760-555-5555</a></p>**/}
                  <h4 className="mb-2">Email</h4>
                  <p className="mb-2">
                    <a href="mailto:jack@globallightingproject.com">
                      jack@globallightingproject.com
                    </a>
                  </p>
                </div>
                <h4 className="followus">Follow Us</h4>
                <div className="followus">
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

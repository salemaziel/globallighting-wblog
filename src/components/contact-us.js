import React from 'react'
//import styled from 'styled-components'
import { navigate } from 'gatsby-link'
import '../css/contactHero.css'
import '../css/contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

{/*8const MainWrapper = styled.div`
  margin: 0;
`;**/}

{/**export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    handleCheckboxChange = event => {
        const { name } = event.target
        this.setState({ [name]: !this.state[name] })
    }

    handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        console.log('fullname', this.state.fullname)
        this.setState({ 'firstname': this.state.fullname },
            () => {
                const formFields = this.state
                fetch('/.netlify/functions/mauticSubmission', {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/html; charset=utf-8' },
                    body: JSON.stringify({
                        'formName': form.getAttribute('name'),
                        formFields,
                    }),
                })
                    .then(() => navigate(form.getAttribute('action')))
                    .catch((error) => alert(error))
            }
        )
    }

render() {**/}


function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  export default function Contact() {
    const [state, setState] = React.useState({})
  
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }
  
        return (
            <div>
                <section className="section-contacthero">
                    <div className="container cx_inner">
                        <div className="row">
                            <div className="col-12">
                                <h1>Get in touch</h1>
                                <p className="p">Fill out the form below and a Global Lighting Project representative will contact you as soon as possible.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-contact">
                    <div className="container py-5">
                        <div className="row pb-5 mb-5">
                            <div className="col-12 col-md-8">
                                {/* Form */}
                                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks">
                                {/**<form name='contact' onSubmit={this.handleSubmit} method="POST" data-netlify="true" className="contact__form" action="#" >**/}
                                    <div className="row mt-5 mb-4">
                                    <input type="hidden" name="form-name" value="contact" />
                                    <input type="hidden" name="form-name" value="contact" />
                                            <p hidden>
                                                <label>
                                                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                                                </label>
                                            </p>
                                        <div className="col-12 col-md-6">
                                            <input type="text" id='fullname' name='fullname' placeholder="Your Name" onChange={handleChange} required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="email" id='email' name='email' placeholder="Your Email" onChange={handleChange} required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="tel" id='phone' name='phone' placeholder="Your Phone" onChange={handleChange} />
                                        </div>
                                        {/**<div className="col-12 mb-4 pb-2">
                                            <p className="u-weight-bld mb-4"></p>
                                            <div className="row">
                                                <div className="col-4">
                                                </div>
                                                <div className="col-4">
                                                </div>
                                                <div className="col-4">
                                                    </div>
                    
                                                </div>
                                        </div>**/}
                                        
                                        <div className="col-12">
                                            <textarea name='message' placeholder="Your Message" onChange={handleChange} required></textarea>
                                        </div>
                                        </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <button type="submit" className="form button">SUBMIT</button>
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
                                                <p className="mb-2"><a href="mailto:jack@globallightingproject.com">jack@globallightingproject.com</a></p>
                                            
                                       
                                    </div>
                                    <h4 className="followus">Follow Us</h4>
                                    <div className="followus">
                                        <a href="https://twitter.com/code_staff">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a href="https://www.linkedin.com/company/code-staff">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                        <a href="https://www.facebook.com/codestaff">
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



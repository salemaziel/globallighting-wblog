import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import TopTrendingSkills from './top-trending-skills'
import HireAndApply from './hire-and-apply'

const MainWrapper = styled.div`
  margin: 0;
`;

export default class Contact extends React.Component {
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

    render() {
        return (
            <MainWrapper>
                <section className="banner banner--alt">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="u-color-secondary u-weight-smb">Get in touch</h1>
                                <p className="p--hg u-ls-0 u-color-black-2 mt-3 mt-md-2 mb-5 mb-md-4">Fill out the form below and a codestaff representative will contact you as soon as possible. For immediate<br className="d-none d-lg-block" /><span className="d-lg-none">&nbsp;</span>assistance, please call our sales line or email our customer support.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact py-5">
                    <div className="container py-5">
                        <div className="row pb-5 mb-5">
                            <div className="col-12 col-md-8">
                                <p className="chip mb-4 mb-md-3">REQUEST YOU TO FILL THE FORM</p>
                                <h2 className="h2--lg-2 u-lh-lg u-weight-bld">Please Complete This Form</h2>
                                {/* Form */}
                                <form name='contact' onSubmit={this.handleSubmit} className="contact__form" action="#" >
                                    <div className="row mt-5 mb-4">
                                        <div className="col-12 col-md-6">
                                            <input type="text" id='fullname' name='fullname' placeholder="Your Name" onChange={this.handleChange} required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="email" id='email' name='email' placeholder="Your Email" onChange={this.handleChange} required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="tel" id='phone' name='phone' placeholder="Your Phone" onChange={this.handleChange} required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="text" name='website' placeholder="Your Website" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-12 mb-4 pb-2">
                                            <p className="u-weight-bld mb-4">Reason To Contact</p>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="contact__checkbox">
                                                        <input type="checkbox" id="general-query" name="genquery" onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="general-query">General Query</label>
                                                    </div>
                                                    <div className="contact__checkbox">
                                                        <input type="checkbox" id="pay-per-click" name="payperclick" onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="pay-per-click">Pay-Per-Click</label>
                                                    </div>
                                                    <div className="contact__checkbox">
                                                        <input type="checkbox" id="web-development" name="webdevelopment" onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="web-development">Web Development</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="contact__checkbox">
                                                        <input type="checkbox" id="free-audit-request" name="freeauditrequest" onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="free-audit-request">Free Audit Request</label>
                                                    </div>
                                                    <div className="contact__checkbox">
                                                        <input type="checkbox" id="social-media-marketing" name="social_media_marketing" onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="social-media-marketing">Social Media Marketing</label>
                                                    </div>
                                                    <div className="contact__checkbox">
                                                        <input type="checkbox" id="reporting" name="reporting" onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="reporting">Reporting</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="contact__checkbox">
                                                        <input type="checkbox" id="search-engine-optimization" name="search_engine_optimizatio" onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="search-engine-optimization">Search Engine Optimization</label>
                                                    </div>
                                                    <div className="contact__checkbox">
                                                        <input type="checkbox" id="email-marketing" name="email_marketing" onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="email-marketing">Email Marketing</label>
                                                    </div>
                                                    <div className="contact__checkbox">
                                                        <input type="checkbox" id="web-design" name="web_design" onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="web-design">Web Design</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <textarea name='message' placeholder="Your Message" onChange={this.handleChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <button type="submit" className="btn btn--sm px-5 d-inline-block">SUBMIT</button>
                                        </div>
                                    </div>
                                </form>
                                {/* End Form */}
                            </div>
                            <div className="col-12 col-md-4 mb-5 mb-md-0 mt-5 mt-md-0">
                                <aside className="contact__aside pb-md-5">
                                    <div className="contact__aside-intro">
                                        <p className="p--xhg u-font-titles">Weâ€™ve driven over <span className="u-weight-smb">10 Thousands leads</span> for our clients. Ready to know how we can help you?</p>
                                    </div>
                                    <h2 className="h2--lg u-weight-bld u-color-black"><a href="tel:8558352633">855-835-CODE</a></h2>
                                    <div className="contact__info my-5">
                                        <div className="contact__info-group">
                                            <p className="u-lh-sm"><i className="fas fa-fw fa-envelope u-color-primary-lgt"></i></p>
                                            <div className="contact__info-group-main">
                                                <p className="u-weight-bld mb-2">Email</p>
                                                <p className="mb-2"><a href="mailto:info@codestaff.io">info@codestaff.io</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="u-weight-smb mb-4">Follow Us</h4>
                                    <div className="contact__social mb-md-5">
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
                <HireAndApply />
                <TopTrendingSkills />
            </MainWrapper>
        )
    }
}
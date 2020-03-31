import React from "react";
import Layout from "../components/layout";
import '../css/main.css';
import ContactUs from '../components/contact-us';
import "../css/contactHero.css";
import SEO from "../components/originalseo"




const ContactPage = () => (
        <Layout>
            <SEO />
            <ContactUs />
        </Layout>
)

export default ContactPage
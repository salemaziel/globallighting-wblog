import React, { Fragment } from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import '../css/carrd.css'
import '../css/main.css'
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarGlobal from "./navbar"
import SEO from './seoNew'


const Layout = ({ children }) => (
    <Fragment>
      <Header />
      <SEO />
      <NavbarGlobal />
      {children}
      <Footer />
    </Fragment>
  )

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};


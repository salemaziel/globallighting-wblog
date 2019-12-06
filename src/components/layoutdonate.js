import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import HeaderDonate from "./HeaderDonate"
import Footer from "./footer"

import "./layout.css"
//import NavbarGl from "./navbar"
//import Layout2 from "./originallayout"



const LayoutDonate = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <HeaderDonate siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </>
  )
}

LayoutDonate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutDonate

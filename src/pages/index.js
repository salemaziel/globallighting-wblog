import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


import AboutUs from '../components/HomePageComponents/AboutUs'
import ActionComponent from '../components/HomePageComponents/ActionComponent'
import WhatWeDo from '../components/HomePageComponents/WhatWeDo'
import NewFromBlog from '../components/HomePageComponents/NewFromBlog'


import Synergy from "../components/HomePageComponents/Synergy"
import Homeheadertitle from "../components/HomePageComponents/Homeheadertitle"
import Homehero from "../components/homehero"

const IndexPage = () => (
  <Layout>
    <Helmet title={'Home Page'} />
      <Homehero />
      <Homeheadertitle />
      <AboutUs />
      <Synergy />
      <WhatWeDo /> 
     {/* <NewFromBlog />*/}
      <ActionComponent />
    {/**<OurWork />**/}
  </Layout>
)

export default IndexPage

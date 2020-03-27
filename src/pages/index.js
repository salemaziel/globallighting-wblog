import React from "react"
import Layout from "../components/layout"

import AboutUs from '../components/HomePageComponents/AboutUs'
import ActionComponent from '../components/HomePageComponents/ActionComponent'
import WhatWeDo from '../components/HomePageComponents/WhatWeDo'
import NewFromBlog from '../components/HomePageComponents/NewFromBlog'


import Synergy from "../components/HomePageComponents/Synergy"
import Homeheadertitle from "../components/HomePageComponents/Homeheadertitle"
import Homehero from "../components/homehero"
import SEO from "../components/originalseo"

const IndexPage = () => (
 <div>
  <Layout>
    <SEO title="Global Lighting Project"/>
    <Homehero />
    <Homeheadertitle />
    <AboutUs />
    <Synergy />
    <WhatWeDo />
    
    
    <NewFromBlog />
    <ActionComponent />
    {/**<OurWork />**/}
  </Layout>
  </div> 
)

export default IndexPage
